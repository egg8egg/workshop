
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
	
            
        