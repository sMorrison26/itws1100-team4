$(document).ready(function () {

    //hide on load
    resetDivs();
    //Load the json file into the main div
    loadDiscover();
    //Actions for clicks on the nav bar links
    $("#DiscoverLink").click( function() {
        resetDivs();
        $("#DiscoverLink").addClass("active");
        $("#Discover").addClass("activeDiv");
        $("#Discover div").each( function() {
            $(this).addClass("activeDiv");
        });
        loadActiveDiv();
    });
    $("#TopCharitiesLink").click( function() {
        resetDivs();
        $("#TopCharities").show();
        $("#TopCharitiesLink").addClass("active");
    });
    $("#FavoritesLink").click( function() {
        resetDivs();
        $("#Favorites").show();
        $("#FavoritesLink").addClass("active");
    });
    $("#HelpLink").click( function() {
        resetDivs();
        $("#Help").show();
        $("#HelpLink").addClass("active");
    });
    $("#AboutLink").click( function() {
        resetDivs();
        $("#About").show();
        $("#AboutLink").addClass("active");
    });
    $("#ProfileLink").click( function() {
        resetDivs();
        $("#Profile").show();
        $("#ProfileLink").addClass("active");
    });

    //Actions for clicks on the sort buttons
    $("#Allbtn").click(function () {
        $("#Discover div").each(function () {
            $(this).show();
        });
    });
    $("#INbtn").click(function () {
        hideAllDiscover();
        $("#Discover").show();
        $("#International").show();
        $("#International div").each(function () {
            $(this).show();
        });
    });
    $("#DNbtn").click(function () {
        hideAllDiscover();
        $("#Discover").show();
        $("#Domestic").show();
        $("#Domestic div").each(function () {
            $(this).show();
        });
    });
    $("#Mbtn").click(function () {
        hideAllDiscover();
        $("#Discover").show();
        $("#Medical").show();
        $("#Medical div").each(function () {
            $(this).show();
        });
    });
    $("#Ebtn").click(function () {
        hideAllDiscover();
        $("#Discover").show();
        $("#Environment").show();
        $("#Environment div").each(function () {
            $(this).show();
        });
    });
    $("#Rbtn").click(function () {
        hideAllDiscover();
        $("#Discover").show();
        $("#Religious").show();
        $("#Religious div").each(function () {
            $(this).show();
        });
    });
    $("#Ybtn").click(function () {
        hideAllDiscover();
        $("#Discover").show();
        $("#Youth").show();
        $("#Youth div").each(function () {
            $(this).show();
        });
    });

    $("#DiscoverLink").click();

});
function hideAllDiscover(){
    $("#Discover div").each(function() {
        $(this).hide();
    });
    $("#SortButtons").show();
}
function resetDivs(){
    //find the anchor tag with the active class and remove it
    $("#nav a").each(function () {
        if ($(this).hasClass("active")){
            $(this).removeClass("active");
        }
    });
    // hide all of the divs
    $("#main div").each(function () {
        $(this).hide();
    });
    $("div").each(function () {
        $(this).removeClass('activeDiv');
    });
}
//loads all of the charities into divs containing their respective type
function loadDiscover(){ 
    $.ajax({
        type: 'GET',
        url: 'json/team4.json',
        dataType: 'json',
        success: function (responseData, status){
            $.each(responseData.Charity, function () {
                var output = '</br><div class="charity"><h2>'+this.name+
                '</h2><p>Type: '+this.type+'</p><p>Link: </p><a href="'+this.url+'" target="_blank">'+this.name+'</a></p></div></br>';
                switch (this.type){
                    case "International Needs":
                        $("#International").append(output);
                        break;
                    case "Domestic Needs":
                        $("#Domestic").append(output);
                        break;
                    case "Medical":
                        $("#Medical").append(output);
                        break;
                    case "Environment":
                        $("#Environment").append(output);
                        break;
                    case "Religious":
                        $("#Religious").append(output);
                        break;
                    case "Health":
                        $("#Health").append(output);
                        break;
                    case "Youth":
                        $("#Youth").append(output);
                        break;
                    default: 
                        break;
                }
            });
        }, error: function(msg){
            alert('There was a problem: '+msg.status+' '+msg.statusText);
        }
    });
}

function loadActiveDiv(){
    $(".activeDiv").each( function() {
        $(this).show();
    });
}