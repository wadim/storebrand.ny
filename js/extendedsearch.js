$(document).ready(function(){
	  $('.typeahead').focus(function()
				{
					//animation speed
					animSpeed = 800;
			        //store the current width
					searchParentWidth = $('.navbar-nav > li.search').css('width');		
					backgroundColor = $('.typeahead').css('background-color');
					//since the width is given in pixels instead of percentage, we need to calculate it ourselves
					searchParentWidthPercent = Math.round(100*(parseInt(searchParentWidth) / $('.navbar-nav').width()));
					
					
					//give the text element a fixed size first
					$('.typeahead').css('width',searchParentWidth);
					//hide the menu
			      	$('.navbar-nav > li.group').toggle();

					//expand the search parent to take 100% of the available width
					$('.navbar-nav > li.search').css('width','100%');

					//fadeOut the white search icon in 1/4th speed of the animation time
					$('.search-icon .search').fadeOut(animSpeed/4);
					
					//after the fadeOut animation time has passed, fadeIn with the class name changed to charcoal
					setTimeout(function(){	
						$('.search-icon .search').removeClass("white").addClass("charcoal").fadeIn(animSpeed/2);
						}, animSpeed/4);
				
					$('.search-icon').animate({backgroundColor:'"fff'},animSpeed);
					
					//animate the textbox				
					$('.typeahead').animate({width:'100%',backgroundColor:'"fff',color:"#000"},animSpeed);
					
					// show the remove icon
					setTimeout(function(){	
						$('li.search .remove').toggle();
					},animSpeed);
					
				}).blur(function()
				{	
					// hide the remove icon
					
					$('li.search .remove').toggle();
					//reset the searchParent to the original width. The text box will fit on its own as its width is 100%.
					$('.navbar-nav > li.search').animate({width:searchParentWidthPercent+'%'},animSpeed);			
					$('.typeahead').animate({backgroundColor:backgroundColor,color:"#fff"},animSpeed);
					
					
					//fadeOut the white search icon in 1/4th speed of the animation time
					$('.search-icon .search').fadeOut(animSpeed/4);
					
					//after half the animation time has passed, fadeIn with the class name changed to white
					setTimeout(function(){	
						$('.search-icon .search').removeClass("charcoal").addClass("white").fadeIn(animSpeed/2);
						}, animSpeed/4);

					$('.search-icon').animate({backgroundColor:backgroundColor},animSpeed);

				    
					//show the menu after the animation completes
					setTimeout(function(){	
						$('.navbar-nav > li.group').toggle();
						}, animSpeed);

						
				});
});