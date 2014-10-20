function viewSelector(view1,view2,view3,view4,view5,drop){
			var lastClickId;
			$(".slidedown").click(function(){
				if(this.id=="drop"){
					$("#panel").removeClass("slide-down-panle").addClass("drop-down-panle");
				}
				else{
					$("#panel").removeClass("drop-down-panle").addClass("slide-down-panle");
				}

				if($("#panel").is(":visible")){
				if(this.id==lastClickId){
					$("#panel").hide();
				}
				else{
					$("#panel").hide();
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
						case "drop":
							$("#panel").html(drop);
							break;
						default: 
						break; 
					}
					$("#panel").slideToggle("slow");
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
					case "drop":
						$("#panel").html(drop);
						break;
					default: 
						break; 
				}
				$("#panel").slideToggle("slow");
			}
			lastClickId = this.id;
		  });
		
}

  
  







