'use strict';


requirejs.config({
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min',
    }
});


require(['jquery','bootstrap'], function ($,bootstrap) {

    var app = {
        initialize: function () {
            
            $(document).ready(function(){
            var lastClickId;
            $(".slideDown").click(function(){

                if($("#panel").is(":visible")){
                    if(this.id==lastClickId){
                        $("#panel").fadeOut("fast");
                    }
                    else{
                        $("#panel").fadeOut("fast");
                        switch (this.id) {
                            case "courses":
                                $("#panel").html('{>"courses"/}');
                                break;
                            case "school":
                                $("#panel").html('{>"school"/}');
                                break;
                            case "about":
                                $("#panel").html('{>"about"/}');
                                break;
                            case "pages":
                                $("#panel").html('{>"pages"/}');
                                break;
                            case "contacts":
                                $("#panel").html('{>"contacts"/}');
                                break;
                            default: 
                                $("#panel").html(this.id);
                                break; 
                        }
                        $("#panel").slideToggle("600");
                    }
                    
                }
                else{
                    switch (this.id) {
                        case "courses":
                            $("#panel").html('{>"courses"/}');
                            break;
                        case "school":
                            $("#panel").html('{>"school"/}');
                            break;
                        case "about":
                            $("#panel").html('{>"about"/}');
                            break;
                        case "pages":
                            $("#panel").html('{>"pages"/}');
                            break;
                        case "contacts":
                            $("#panel").html('{>"contacts"/}');
                            break;
                        default: 
                            $("#panel").html(this.id);
                            break; 
                    }
                    $("#panel").slideToggle("600");
                }
            lastClickId = this.id;
          });
        });
        }
    };

    app.initialize();

});

