$(document).ready(function(){
	//datepicker
	$(function () {
                $('#datetimepicker1').datepicker();
    });
    //datepicker end

    //navBar slidedown
    $(".slidedown").click(function() {
    	if($(this).next("div").is(":visible")){
    		$(this).next("div").slideToggle("slow");
    	}
    	else{
    		if($(".slide-down-panle").is(":visible")){
    			$(".slide-down-panle").hide();
    			$(this).next("div").slideToggle("slow");
    		}
    		else{
    			$(this).next("div").slideToggle("slow");
    		}
    	}
    		   	
    });
    //navBar slidedown end

    //calendar
    $('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			defaultDate: '2014-09-12',
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'All Day Event',
					start: '2014-09-01'
				},
				{
					title: 'Long Event',
					start: '2014-09-07',
					end: '2014-09-10'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2014-09-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2014-09-16T16:00:00'
				},
				{
					title: 'Conference',
					start: '2014-09-11',
					end: '2014-09-13'
				},
				{
					title: 'Meeting',
					start: '2014-09-12T10:30:00',
					end: '2014-09-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2014-09-12T12:00:00'
				},
				{
					title: 'Meeting',
					start: '2014-09-12T14:30:00'
				},
				{
					title: 'Happy Hour',
					start: '2014-09-12T17:30:00'
				},
				{
					title: 'Dinner',
					start: '2014-09-12T20:00:00'
				},
				{
					title: 'Birthday Party',
					start: '2014-09-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2014-09-28'
				}
			]
		});
		//calendar end

		//gallery lightbox
		$('.thumbnail img').on('click',function(){
                var src = $(this).attr('src');
                var img = '<img src="' + src + '" class="img-responsive"/>';
                $('#myModal').modal();
                $('#myModal').on('shown.bs.modal', function(){
                    $('#myModal .modal-body').html(img);
                });
                $('#closeIcon').on('click',function(){
                	$('#myModal').modal('hide');
                });
                $('#myModal').on('hidden.bs.modal', function(){
                    $('#myModal .modal-body').html('');
                });
           });
		//gallery lightbox end

		//back to top widget
		$(function() {
			$(window).scroll(function() {
				if($(this).scrollTop() > 300) {
					$('#totop').fadeIn();	
				} else {
					$('#totop').fadeOut();
				}
			});
		 
			$('#totop').click(function() {
				$('body,html').animate({scrollTop:0},500);
			});	
	
});

  });




//this function is for view select. Not useing anymore 
//leave here just for study

/*function viewSelector(view1,view2,view3,view4,view5,drop){
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
}*/

  
  







