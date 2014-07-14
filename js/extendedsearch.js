 
 $(document).ready(function(){
$('.typeahead').focus(function()
		{
			animSpeed = 800;
	       /*to make this flexible, storing the current width in an attribute*/
			navWidth = $('.navbar-nav').width();
			searchParentWidth = $('.navbar-nav > li.search').css('width');
			buttonWidth = $('.navbar-nav > li.search button').css('width');
			
			//hide the menu
			$('.navbar-nav').css('background-color','#BF1D19');
	      	$('.navbar-nav > li.group').css('display','none');
	    	
			//set the button width in pixels (instead of percentage as it is by default in CSS)
	    	$('.navbar-nav > li.search button').css('width', buttonWidth);
	      
			//animate the typeahead's parent LI to the width of the navigation bar
			$('.navbar-nav > li.search').animate({width:navWidth},animSpeed);
	      
		}).blur(function()
		{
			//reset to the original widths
			$('.navbar-nav > li.search').animate({width:searchParentWidth},animSpeed);
			$('.navbar-nav > li.search button').css('width',buttonWidth);
			$('.navbar-nav > li.search input').css('width','100%');
			   
		    //show the menu after the animation completes
			setTimeout(function(){	$('.navbar-nav > li.group').css('display','block');}, animSpeed);
		});

});