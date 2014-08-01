$(document).ready(function(){

	//save the state of the search box. the search box is not in focus by default
	maximized=false;
	
	//save the animation state, whether the element is being animated or not
	animating=false;
	
	//animation speed
	animSpeed = 800;
		
	//if the document is clicked anywhere
	$(document).click(function() {
		//if the search field is in focus, and not animating
		if(maximized == true && animating==false) {

      //Don´t minimize if there is text in the search field
      if(!$('.typeahead.tt-input').val()){
        minimizeSearch();
      }
		}
	});

  $('.search .remove').click(function(){
    minimizeSearch();
  });

	
	//if the search icon or the input element itself gets clicked, do not pass the click event to the document
	$(".typeahead, .search-icon").click(function(e) {
		//give it focus
		$('.typeahead').focus();
		
		//if its currently small and not animating, maximize it
		if(maximized == false && animating == false) {
			maximizeSearch();
		}
		
		//this will prevent the minimizeSearch from being called
		e.stopPropagation();
		return false;
	});

	
	function maximizeSearch()
	{

		maximized = true;

		//save the animating state, and reset it once the animations complete
		animating = true;
		setTimeout(function(){	
			animating = false;
		},animSpeed);
		
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

    //animate span parent container to 100 %
    $('.typeahead').animate({width:'100%',backgroundColor:'"fff',color:"#000"},animSpeed);
		//animate the textbox
    $('.twitter-typeahead').animate({width:'100%',backgroundColor:'"fff',color:"#000"},animSpeed);

		
		// show the remove icon
		setTimeout(function(){	
			$('li.search .remove').toggle();
		},animSpeed);
	}

			
	function minimizeSearch()
	{	
	
		//save the animating state, and reset it once the animations complete
		animating = true;
		setTimeout(function(){	
			animating = false;
		},animSpeed);

		
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

		
		//reset all the states after the animations complete
		setTimeout(function(){	
			//show the menu
			$('.navbar-nav > li.group').toggle();
			
			//remove the focus from the smaller search box in case the user clicked on it during the animation
			$('.typeahead').blur();
			
			//save the new state
			maximized = false;

      //Reseting the span container to initial value
      $('.twitter-typeahead').css('width','initial');
    }, animSpeed);
		
	}
});