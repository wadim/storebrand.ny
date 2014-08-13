// Start navigation padding 

// Start mobile top menu decoration
$(document).ready(function(){
  $('.panel-group').on('show.bs.collapse', function (event) {
    $(event.target).prev().find('span:first').toggleClass('chevron-down chevron-right');
  });
  
  $('.panel-group').on('hide.bs.collapse', function () {
    $('.panel-collapse.collapse.in').prev().find('span:first').toggleClass('chevron-down chevron-right');
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

// Start content padding 

// Start Adding twister effect to accordion/FAQ
$(document).ready(function () {
  $("ul[data-widget=stbFaq]").stbFaq();
}),
function (a) {
  a.fn.stbFaq = function () {
    a(this).find("a").on("click", function (b) {
      if (a(this).hasClass("twister")) {
        b.preventDefault();
        var c = a(this).siblings("ul.accordion li .answer");
        a(this).hasClass("open") ? (a(this).removeClass("open"), c.slideUp(200)) : (a(this).addClass("open"), c.slideDown(200));
      }
    });
  };
}(jQuery);
// End twister effect on accordion/FAQ

// Start adding triggers for showing additional info 
// Looks for trigger points with class "hidy-ho", and toggles visibility for the element refered to by rel attribute.
$("document").ready(function(){
  $(".hidy-ho").click(function() {
    var toggler = "#" + $(this).attr('rel');
    $(toggler).slideToggle("fast");
  });
});
  
// End adding triggers for showing additional info    
    
// Handling automatic generation of toc lists on article pages
$(document).ready(function() {
  

 
  
  // Prepare the row that contains the table of contents
  var toclist ='<div class="row"><div class="col-md-12 toc-list top-margin-20 top-padding-10 border-top-and-bottom"><p class="intro stb-font">G&aring; direkte til<span class=" visible-xs visible-sm stb-sprite-16 chevron-down pull-right"></span></p><ul class="items"></ul></div></div>';
  
  // Place the table of content above the first h3.toc-header
  $(toclist).insertBefore( $('h3.toc-header:first').closest("div.row") );
  
  // Find all the top level toc headings (h3)
  var tocHeaders= $('h3.toc-header');
  
  // Iterate through all the top level headings (h3)
  for(var i=0; i<tocHeaders.length; i++) {
	listMade = false;
	var h3tag = tocHeaders[i];
    
	// Appending heading text to table to contents
    $('.toc-list .items').append( prepareTocLink(h3tag, "") );
    
    // Find all sub-headings(h4) inside each heading(h3)
    var allh4 = $(h3tag).nextUntil('h3','h4');
    
    // Check if there are any h4 elements. If there are none, we should not run the code below.
    if(allh4.length == 0) continue; 
    // Prepare a list mark-up for all sub-headings in the table of contents
    var h4list = '<ul style="margin-left: 20px">';
    
    // Iterate through these sub headings
    for( var j=0; j<allh4.length;j++) {
	  var h4tag = allh4[j];
      // adding the sub headings to the subheading list
      h4list = h4list + prepareTocLink(h4tag, $(h3tag).text());
    }
    h4list = h4list+'</ul>';
    
    //append sub-heading list to the table of contents
    $('.toc-list .items').append(h4list);
    
    
  }
 
  //check if URL already has a hash and scroll to the correct heading 
  if(window.location.hash.length > 0) {
	
    var hashId = window.location.hash;
	//if a matching h3 or h4 has the hash ID, then scroll to it.
	if($("h3"+hashId).length > 0 || $("h4"+hashId).length > 0) {
      scrollToHash( hashId );
	}
  }
  
  
  // Perform a smooth page scroll to an anchor on the same page.
  $(function() {
	  $('.toc-list .items a[href*=#]:not([href=#])').click(function(event) {
      event.preventDefault();
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        scrollToHash( this.hash);
      }
    });
  });

  //takes a hash as input and smooth scrolls to the related target element
  function scrollToHash(hash) {
    var target = $(hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	if (target.length) {
      scrollToPosition = target.offset().top;					
	  // Checking if the navigation header is fixed. If yes, set the scrollto position by subtracting the height of the fixed header
	  if($('.navbar-fixed-top').css("display") == "block") { 
        scrollToPosition -= $('.navbar-fixed-top').height(); 
      }
      $('html,body').animate({ scrollTop: scrollToPosition }, 1000);
      // Highlighting the clicked heading for a brief period to make it easier to see what just happened.
      $(target).animate({backgroundColor:"#FFF0F0"},1000);
      $(target).animate({backgroundColor:"#FFFFFF"},1000);
    }
  }
  
  //Prepares the TOC link for a given header tag
  function prepareTocLink(headerTag, prefix) {
    //take the header text
    var headerText = $(headerTag).text();
    //prepare the header ID from its text
    $(headerTag).attr("id",prefix.replace(/ /g,"-").toLowerCase() + "--" + headerText.replace(/ /g,"-").toLowerCase()); // generating id for the h3
    var headerId = $(headerTag).attr("id"); // set the id
    //create the link and return it
    return '<li><a href="#'+headerId+'">'+headerText+'</a></li>';
  }
  
});

$(document).ready(function(){ 
  // hide and show articles list 
  $('.toc-list p').click(function() {
    // if the media screen width is large, then don't do anything
    if( $( window ).width() <= 992) {
      // the following will apply for mobile view
      $('.toc-list .items').slideToggle();
      $('.toc-list p span').toggleClass("chevron-down chevron-up");
    }
  });
});

// End of automatic generation of toc lists on article pages

// Opens the href in the relattribute to the clickable class
$(document).ready(function($) {
    $(".clickable").click(function() {
    window.document.location = $(this).attr("rel");
  });
});

//Appending arrow after link for clickable links
$(document).ready(function() {
    var arrowCode ='<span class="stb-sprite-16 arrow-right pull-right"></span>';
    $('.list-group-item.links').append(arrowCode);
});

//Appending arrow after text in first column in every row for clickable tables
$(document).ready(function() {
    var arrowCode ='<span class="stb-sprite-16 arrow-right pull-right"></span>';
    $('tr.clickable td:first-child').append(arrowCode);
});

// Handling cookie note
$(document).ready(function(){
  var acceptCookies = readCookie('acceptCookies');
  if(acceptCookies!='Yes'){
    $('#cookieNote').show();
  }
});

function acceptCookies(){
  createCookie('acceptCookies','Yes');
  $('#cookieNote').hide('slow');
}
// End of handling cookie note


// End content padding

// Adding hotkeys based on Resig
$("document").ready(function(){

  //Hotkey for search
  if($('.typeahead').length){
    $(document).bind('keydown', 'shift+s', function(){$('.typeahead').click();});
  }

  //Hotkey for bottom
  if( $('footer').length){
    $(document).bind('keydown', 'shift+b', function(){$('html, body').animate({ scrollTop: $('footer').offset().top}, 500);});
  }

  //Hotkey for login
  if($('li.login > a').length) {
    $(document).bind('keydown', 'shift+l', function(){$('li.login > a').click();});
  }

  //Hotkey for top
  $(document).bind('keydown', 'shift+t', function(){$('html, body').animate({ scrollTop: 0}, 500);});
});


