// Start navigation padding 

// Start mobile top menu decoration
$(document).ready(function(){
  $('.panel-group').on('show.bs.collapse', function (event) {
    $(event.target).prev().find('span:first').toggleClass('glyphicon-chevron-down glyphicon-chevron-right')
  });
  
  $('.panel-group').on('hide.bs.collapse', function () {
    $('.panel-collapse.collapse.in').prev().find('span:first').toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
  });

  $(".dropdown").on("hide.bs.dropdown", function(){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    $(this).find('span.marker').toggleClass('active');
  });

  $(".dropdown").on("show.bs.dropdown", function(){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    $(this).find('span.marker').toggleClass('active');
  });
    
});
// End mobile top menu decoration
    
// Start prevent top menu clicks from running away with the page
$(document).on('click', '.yamm .dropdown-menu', function(e) {
  e.stopPropagation();
});
// End prevent top menu clicks from running away with the page

// End navigation padding

//Start content padding 

// Start Adding twister effect to accordion/FAQ
$(document).ready(function () {
  $("ul[data-widget=stbFaq]").stbFaq()
}),
function (a) {
  a.fn.stbFaq = function () {
    a(this).find("a").on("click", function (b) {
      if (a(this).hasClass("twister")) {
        b.preventDefault();
        var c = a(this).siblings("ul.accordion li .answer");
        a(this).hasClass("open") ? (a(this).removeClass("open"), c.slideUp(200)) : (a(this).addClass("open"), c.slideDown(200))
      }
    })
  }
}(jQuery);
// End twister effect on accordion/FAQ

// Start adding triggers for showing additional info 
// Looks for trigger points with class "hidy-ho", and toggles visibility for the element refered to by rel attribute.
$("document").ready(function(){
  $(".hidy-ho").click(function() {
    var toggler = "#" + $(this).attr('rel');
    $(toggler).slideToggle("fast");
  });
})
  
    // End adding triggers for showing additional info    
    
// End content padding

// Adding hotkeys based on Resig
$("document").ready(function(){
  //Hotkey for search
  if($(".typeahead")[0]){
    $(document).bind('keydown', 'shift+s', function(){$('.typeahead').click();});
  }
  //Hotkey for top
  $(document).bind('keydown', 'shift+t', function(){$('html, body').animate({ scrollTop: 0}, 500);});
  //Hotkey for bottom
  $(document).bind('keydown', 'shift+b', function(){$('html, body').animate({ scrollTop: $('footer').offset().top}, 500);});
  //Hotkey for login
  if($("li.login > a")) {
    $(document).bind('keydown', 'shift+l', function(){$('li.login > a').click();});
  }
})

// Handling automatically generated toc lists for article pages
$(document).ready(function() {
  var i = 0;
  var j = 0;
  // find all the major articles 
  var tocHeaders= $('.toc-header');
  for(i=0; i<tocHeaders.length; i++) {
    //retrieve heading(h3) content and id for each heading to be included in toc
    var h3text = $(tocHeaders[i]).find('h3').html();
    var h3id = $(tocHeaders[i]).find('h3').attr("id");
    
    // append article heading text as links in the toc-header list
    $('.toc-list .items').append('<li><a href="#'+h3id+'">'+h3text+'</a></li>');
    
    // find all sub-headers inside each toc-header
    var allh4= $(tocHeaders[i]).find('h4');
    
    // make a list of all sub-headers for each toc-header
    var h4list = '<ul style="margin-left: 20px">';
    for( j=0; j<allh4.length;j++) {
      var h4text= $(allh4[j]).html();
      var h4id= $(allh4[j]).attr("id");
      h4list=h4list+'<li><a href="#'+h4id+'">'+h4text+'</a></li>';
    }
    
    h4list = h4list+'</ul>';
    //append these sub-headers to the toc-header list
    $('.toc-list .items').append(h4list);
  }
	 	
  // Performs a smooth page scroll to an anchor on the same page.
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          scrollToPosition = target.offset().top;					
					// Checking if the navigation header is fixed. If yes, set the scrollto position by subtracting the height of the fixed header
					if($('.navbar-fixed-top').css("display") == "block") { 
            scrollToPosition -= $('.navbar-fixed-top').height(); 
          }
          $('html,body').animate({ scrollTop: scrollToPosition }, 1000);
          // Highlighting the clicked heading for a brief period to make it easier to see what just happened.
          $(target).animate({backgroundColor:"yellow"},1000);
          $(target).animate({backgroundColor:"white"},1000);
          return false;
	 		  }
      }
    });
  });
  
});

$(document).ready(function(){ 
  // hide and show articles list 
  $('.toc-list p').click(function() {
    // if the media screen width is large, then don't do anything
    if( $( window ).width() <= 992) {
      // the following will apply for mobile view
      $('.toc-list .items').slideToggle();
      $('.toc-list p span').toggleClass(" red chevron-down chevron-up");
    }
  });
});

// End of handling automatically generated toc lists for article pages
