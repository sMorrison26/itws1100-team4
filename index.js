$(document).ready(function () {

    //Load the json file into the main div
    //hide on load
    $.ajax({
        type: 'GET',
        url: 'json/team4.json',
        dataType: 'json',
        success: function (responseData, status){
            $.each(responseData.Charity, function () {
                var output = '</br><div class="charity"><h2>'+this.name+
                '</h2><p>Type: '+this.type+'</p></br><p>Link: </p><a href="'+this.url+'">'+this.name+'</a></p></div></br>';
                switch (this.type){
                    case "International Needs":
                        $("#International").append(output);
                        break;
                    case "Domestic Needs":
                        $("#Domestic").append(output);
                        break;
                    case "Medical":
                        $("#Domestic").append(output);
                        break;
                    case "Environment":
                        $("#Domestic").append(output);
                        break;
                    case "Religious":
                        $("#Domestic").append(output);
                        break;
                    case "Health":
                        $("#Domestic").append(output);
                        break;
                    case "Youth":
                        $("#Domestic").append(output);
                        break;
                    default: 
                        break;
                    }
                });
            }
        });
    // $("#Discover").hide();  
    $("#Discover").click( function() {
        $("#Discover").toggle();
    });
});