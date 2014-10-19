function viewSelector(view1,view2,view3,view4,view5){
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
						$("#panel").html(view1);
						break;
						case "school":
						$("#panel").html(view2);
						break;
						case "about":
						$("#panel").html(view3);
						break;
						case "pages":
						$("#panel").html(view4);
						break;
						case "contacts":
						$("#panel").html(view5);
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
					$("#panel").html(view1);
					break;
					case "school":
					$("#panel").html(view2);
					break;
					case "about":
					$("#panel").html(view3);
					break;
					case "pages":
					$("#panel").html(view4);
					break;
					case "contacts":
					$("#panel").html(view5);
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






