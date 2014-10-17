'use strict';


requirejs.config({
    paths: {
    	'jquery':'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
    	'bootstrap':'https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js',
    }
});


require(['https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js','https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'], function () {

    var app = {
        initialize: function () {
            $(document).ready(function(){
			$(".slideDown").click(function(){			  	
				if($("#panel").is(":visible")){
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
			    
		  });
		});
	
            
        }
            
        }
    };

    app.initialize();

});
