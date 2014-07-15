$(document).ready(function(){
	  $('.typeahead').focus(function()
				{
					//animation speed
					animSpeed = 800;

			        //store the current width
					searchParentWidth = $('.navbar-nav > li.search').css('width');		
					
					//since the width is given in pixels instead of percentage, we need to calculate it ourselves
					searchParentWidthPercent = Math.ceil(100*(parseInt(searchParentWidth) / $('.navbar-nav').width()));
					
					//give the text element a fixed size first
					$('.typeahead').css('width',searchParentWidth);
					
					//hide the menu
			      	$('.navbar-nav > li.group').toggle();

					//expand the search parent to take 100% of the available width
					$('.navbar-nav > li.search').css('width','100%');
					
					//animate the textbox
					$('.typeahead').animate({width:'100%'},animSpeed);
					
				}).blur(function()
				{	
					//reset the searchParent to the original width. The text box will fit on its own as its width is 100%.
					$('.navbar-nav > li.search').animate({width:searchParentWidthPercent+'%'},animSpeed);			
				
				    //show the menu after the animation completes
					setTimeout(function(){	
						$('.navbar-nav > li.group').toggle();
						}, animSpeed);

				});
});