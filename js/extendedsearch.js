 
 $(document).ready(function(){
     $('.typeahead').focus(function()
    			{
    				//animation speed
    				animSpeed = 800;

    		        //store the current width
    				searchParentWidth = ($('.navbar-nav > li.search').css('width'));		
    				
    				//hide the menu
    		      	$('.navbar-nav > li.group').toggle();

    				//animate the typeahead's parent LI to the full available width
    				$('.navbar-nav > li.search').animate({width:'100%'},animSpeed);
    				
    			}).blur(function()
    			{
    				searchParentWidth = parseInt(searchParentWidth) - 0.1;

    				//reset to the original widths
    				$('.navbar-nav > li.search').animate({width:searchParentWidth},animSpeed);
    			
    				
    			    //show the menu after the animation completes
    				setTimeout(function(){	
    					$('.navbar-nav > li.group').toggle();
    					}, animSpeed);
    			    	buttonWidthPercentage

    					//$('.navbar-nav > li.group').css('display','block');
    		      	//$('.navbar-nav > li.search').css('width',width);
    			    /* lookup the original width */
    		 		//var w = $(this).parent().attr('data-default');
    			    //$(this).parent().  alert("lkjlø");
    				//$('.navbar-nav li').css("background-color","red");
    			});

});