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

  // Take a hash as input and smooth-scroll to the related target element
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
  
  // Prepare the TOC link for a given header tag
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
    $('a.list-group-item').append(arrowCode);
});

//Appending arrow after text in first column in every row for clickable tables
$(document).ready(function() {
    var arrowCode ='<span class="stb-sprite-16 arrow-right pull-right"></span>';
    $('tr.clickable td:first-child').append(arrowCode);
});

// Handling cookie note
$(document).ready(function(){
  var acceptingCookies = readCookie('acceptCookies');
  if(acceptingCookies!='Yes'){
    // Disabling showing of cookie notification for now, for peace of mind during testing.
    //$('#cookieNote').show();
  }
});

function acceptCookies(){
  createCookie('acceptCookies','Yes', '90');
  $('#cookieNote').hide('slow');
}
// End of handling cookie note


// End content padding

// Start full-screen modal box padding
// Requires Modernizr for now! (for transition prefixing)
/**
 * uiMorphingButton_fixed.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
  'use strict';
  var transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
  },
  transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
  support = { transitions : Modernizr.csstransitions };

  function extend( a, b ) {
    for( var key in b ) {
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  function UIMorphingButton( el, options ) {
    this.el = el;
    this.options = extend( {}, this.options );
    extend( this.options, options );
    this._init();
  }

  UIMorphingButton.prototype.options = {
    closeEl : '',
    onBeforeOpen : function() { return false; },
    onAfterOpen : function() { return false; },
    onBeforeClose : function() { return false; },
    onAfterClose : function() { return false; }
  }

  UIMorphingButton.prototype._init = function() {
    // the button
    this.button = this.el.querySelector( '.stb-modal-btn' );
    // state
    this.expanded = false;
    // content el
    this.contentEl = this.el.querySelector( '.morph-content' );
    // init events
    this._initEvents();
  }

  UIMorphingButton.prototype._initEvents = function() {
    var self = this;
    // open
    this.button.addEventListener( 'click', function() {
      self.toggle();
    } );
    // close
    if( this.options.closeEl !== '' ) {
      var closeEl = this.el.querySelector( this.options.closeEl );
      if( closeEl ) {
        closeEl.addEventListener( 'click', function() { self.toggle(); } );
      }
    }
  }

  UIMorphingButton.prototype.toggle = function() {
    if( this.isAnimating ) return false;

    // callback
    if( this.expanded ) {
      this.options.onBeforeClose();
    } else {
      // add class active (solves z-index problem when more than one button is on the page)
      $(this.el).addClass('active');
      this.options.onBeforeOpen();
    }

    this.isAnimating = true;

    var self = this, onEndTransitionFn = function( ev ) {
      if( ev.target !== this ) return false;
      if( support.transitions ) {
        // open: first opacity then width/height/left/top
        // close: first width/height/left/top then opacity
        if( self.expanded && ev.propertyName !== 'opacity' || !self.expanded && ev.propertyName !== 'width' && ev.propertyName !== 'height' && ev.propertyName !== 'left' && ev.propertyName !== 'top' ) {
          return false;
        }
        this.removeEventListener( transEndEventName, onEndTransitionFn );
      }
      self.isAnimating = false;
      // callback
      if( self.expanded ) {
        // remove class active (after closing)
        $(self.el).removeClass('active');
        self.options.onAfterClose();
      } else {
        self.options.onAfterOpen();
      }
      self.expanded = !self.expanded;
    };

    if( support.transitions ) {
      this.contentEl.addEventListener( transEndEventName, onEndTransitionFn );
    } else {
      onEndTransitionFn();
    }

    // Set the left and top values of the contentEl (same as the button)
    var buttonPos = this.button.getBoundingClientRect();
    // need to reset
    $(this.contentEl).addClass('no-transition');
    this.contentEl.style.left = 'auto';
    this.contentEl.style.top = 'auto';

    // Add/remove class "open" to the button wrapper
    setTimeout( function() {
      self.contentEl.style.left = buttonPos.left + 'px';
      self.contentEl.style.top = buttonPos.top + 'px';

      if( self.expanded ) {
        $(self.contentEl).removeClass('no-transition');
        $(self.el).removeClass('open');
      } else {
        setTimeout( function() {
          $(self.contentEl).removeClass('no-transition');
          $(self.el).addClass('open');
        }, 25 );
      }
    }, 25 );
  }

  // Add to global namespace
  window.UIMorphingButton = UIMorphingButton;

})( window );

$("document").ready(function(){
  (function() {
    var docElem = window.document.documentElement, didScroll, scrollPosition;
    // Trick to prevent scrolling when opening/closing button
    function noScrollFn() {
      window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
    }

    function noScroll() {
      window.removeEventListener( 'scroll', scrollHandler );
      window.addEventListener( 'scroll', noScrollFn );
    }

    function scrollFn() {
      window.addEventListener( 'scroll', scrollHandler );
    }

    function canScroll() {
      window.removeEventListener( 'scroll', noScrollFn );
      scrollFn();
    }

    function scrollHandler() {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( function() { scrollPage(); }, 60 );
      }
    };

    function scrollPage() {
      scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
      didScroll = false;
    };

    scrollFn();

    $('.stb-modal-full').each(function(index, el){
      new UIMorphingButton( el, {
        closeEl : '.close',
        onBeforeOpen : function() {
          // Do not allow scrolling in opened modal
          noScroll();
        },
        onAfterOpen : function() {
          // Allow scrolling again
          canScroll();
          // Add class "noscroll" to body
          $(document.body).addClass('noscroll');
          // Add scroll class to main el
          $(el).addClass('scroll');
        },
        onBeforeClose : function() {
          // Remove class "noscroll" to body
          $(document.body).removeClass('noscroll');
          // Remove scroll class from main el
          $(el).removeClass('scroll');
          // Do not allow scrolling during closing of modal
          noScroll();
        },
        onAfterClose : function() {
          // Allow scrolling again
          canScroll();
        }
      });
    });
    
  })();
 
});
// End full-screen modal padding


// Adding hotkeys based on Resig
$("document").ready(function(){

  //Hotkey for search
  if($('.typeahead').length){

    $(document).bind('keydown', 'shift+s', function(event){event.preventDefault();$('.typeahead').click();});
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


//Functions for chat choice on minibox
function openChatChoice(){
  $('.allContact').slideUp('slow');
  $('.chatWhat').slideDown('slow');
}
function closeChatChoice(){
  $('.allContact').slideDown('slow');
  $('.chatWhat').slideUp('slow');
}


//Function to handle only numbers and nothing else in the input field

function numbersonly(myfield, e, dec) {
  var key;
  var keychar;

  if (window.event)
    key = window.event.keyCode;
  else if (e)
    key = e.which;
  else
    return true;
  keychar = String.fromCharCode(key);

  // control keys
  if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27) )
    return true;

  // numbers
  else if ((("0123456789").indexOf(keychar) > -1))
    return true;

  // decimal point jump
  else if (dec && (keychar == ".")) {
    myfield.form.elements[dec].focus();
    return false;
  }
  
  else
   return false;
}

//Checks for list groups with .expandable class and makes them expandable.
$(document).ready(function(){
  $('ul.stb-list-group.expandable').each(function(index){
    makeExpandableList($(this),2);
  });

});



//Making lists expandable
function makeExpandableList(selector){
  initialExpandable(selector);

  var showMore = selector.find('.showMore');

  showMore.click(function() {
    if(showMore.hasClass('open')){
      initialExpandable(selector);
      showMore.find('span').toggleClass('chevron-up red chevron-down');
    }else{
      selector.children('li').show(400);
      showMore.find('span').toggleClass('chevron-up red chevron-down');
    }
    showMore.toggleClass('open');
  });
}

//Loops through list, showing li elements with summary class, and hides the other li elements
function initialExpandable(selector){
  selector.children('li').each(function(index){
    if(!$(this).is('.summary, .showMore')){
      $(this).hide(400);
    }
  });
}

//Google Analytics eventtagging -- automated for various designelements
$(document).ready(function(){  

    $('button').bind( "click", function() {
      var btnTxt = $(this).html();
      var path = window.location.pathname;
      //console.log(btnTxt);
      //console.log(page);
      ga('send', 'event', path , 'Klikk på knappen', btnTxt);
    });

    $('.mini.clickable').bind( "click", function() {
      var boxId = $(this).attr('alt');
      var path = window.location.pathname;
      //console.log(boxId);
      //console.log(path);
      ga('send', 'event', path , 'Klikk på boksen ', boxId);
    });

    $('.twister').bind( "click", function() {
      console.log('faq');
      var q = $(this).html();
      var path = window.location.pathname;
      //console.log(q);
      //console.log(path);
      ga('send', 'event', path , 'Klikk på boksen ', q);
    });

});



//Options example object.
/*var options = {
  onConfirmAction : function(){console.log("Confirm")},
  onCancelAction : function(){console.log("Cancel")},
  onCloseAction : function(){console.log("Close")},
  title : "This is the title of the modal",
  text : "this is the text/description of the modal, must accept HTML"
}
*/



var modalDialog = {

  triggerModal : function(type,options){

    if(type == 'confirm'){
     var markup = ' <div class="modal stb-modal fade" id="dialogModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
         '<div class="modal-dialog modal-span6">' +
          '<div class="modal-content">' +
            '<div class="modal-header stbcolor-secondary fifth">' +
              '<button type="button" class="close" data-dismiss="modal" onclick="options.onCloseAction();"><p class="pull-left">Lukk</p><span class="stb-sprite-24 remove pull-left"></span></button>' +
              '<h4 class="modal-title"><span class="stb-color-sprite-24 info"></span></h4>' +
            '</div>' +
            '<div class="modal-body">' +
              '<h3>'+options.title+'</h3>' +
              '<p>'+options.text+'</p>' +
              '<form>' +
               '<button class="stb-btn" onclick="options.onConfirmAction();">Yes</button>' +
               '<button class="stb-btn transparent light" onclick="options.onCancelAction();">No</button>' +
              '</form>' +
            '</div>' +
          '</div>' +
         '</div>';
        '</div>';

      if($('#dialogModal').length == 0){
        $('body').append(markup);
      }

      $('#dialogModal').show();
      $('#dialogModal').modal();

    }

  }
}


// script for populating the dropdown with the selected tab link

$(document).ready(function() {
	  $(".dropdown-tabs .dropdown .heading").html($(".dropdown-tabs .dropdown-menu li.active a").html());
	  $(".dropdown-tabs .dropdown-menu li a").click(function() {
		  $(".dropdown-tabs .dropdown-menu li.active").removeClass("active");
		  $(".dropdown-tabs .dropdown .heading").html($(this).html());
	  });  
	  
	  $(".dropdown-tabs button").click(function() {
		  $(".dropdown-tabs button span.icon").toggleClass('chevron-up chevron-down');
	  });
});

//Script for translating alias classes for Enonic editor One class names is not translated.

$(document).ready(function(){  
    $( ".regularButton").each(function() {$(this).removeClass(); $(this).addClass('stb-btn transparent light');  }); 
}); 


