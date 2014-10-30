(function($){

// Start navigation padding

// Start mobile top menu decoration
  $(document).ready(function(){
    $('#nav .panel-group').on('show.bs.collapse', function (event) {
      $(event.target).prev().find('span:first').toggleClass('chevron-down chevron-right');
    });

    $('#nav .panel-group').on('hide.bs.collapse', function () {
      $('.panel-collapse.collapse.in').prev().find('span:first').toggleClass('chevron-down chevron-right');
    });

    $(".dropdown").on("hide.bs.dropdown", function(){
      if( $(this).find('.dropdown-menu') ) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        if( $(this).closest('#top-menu-nav').length ) {
          $("#overlay").css("display","none");
          if(window.location.href.indexOf("login") > -1) {
            $(this).parent().find('li.login').addClass('current');
          }else{
            $(this).parent().find('li.private').addClass('current');
          }
        }
      }
      $(this).find('span.marker').toggleClass('active');
    });

    $(".dropdown").on("show.bs.dropdown", function(){
      if( $(this).find('.dropdown-menu') ) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        if( $(this).closest('#top-menu-nav').length ) {
          $("#overlay").css("display","block");
          if(window.location.href.indexOf("login") > -1) {
            $(this).parent().find('li.login').removeClass('current');
          }else{
            $(this).parent().find('li.private').removeClass('current');
          }
        }
      }
      $(this).find('span.marker').toggleClass('active');
    });

    $("#desktopmenu li:first a").click(function(){
      $(".dropdown").removeClass('open');
      $(".dropdown").trigger("hide.bs.dropdown");
    });

    $("#loginmenu li:first a").click(function(){
      $(".dropdown").removeClass('open');
      $(".dropdown").trigger("hide.bs.dropdown");
    });

    //For KL user test, needs to be removed
    $('.nav li.company a').click(function(){
      event.stopPropagation();
    });

    if($('.nav .company').hasClass("current")) {
    	$('.nav .private').css("background-image","none");
    }
  });
// End mobile top menu decoration

// Showing the hiding the overlay on clicking the dropdown toggle
  $(document).ready(function(){
    //initialize the overlay to get the document's dimenstions
    $("#overlay").css("width",$(document).width());
    $("#overlay").css("height",$(document).height());
  });

  $(window).resize(function() {
    //Recalculate the overlay when window is resized
    $("#overlay").css("width",$(document).width());
    $("#overlay").css("height",$(document).height());
  });


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
    var toclist ='<div class="row"><div class="col-md-8 toc-list top-margin-20 top-padding-10 border-top-and-bottom stbcolor-background fifth"><p class="intro stb-font">G&aring; direkte til<span class="stb-sprite-medium chevron-down pull-right"></span></p><ul class="items"></ul></div></div>';

    // Place the table of content above the first h3.toc-header
    $(toclist).insertBefore( $('h3.toc-header:first').closest("div.row") );

    // Find all the top level toc headings (h3)
    var tocHeaders= $('h3.toc-header');

    // Iterate through all the top level headings (h3)
    for(var i=0; i<tocHeaders.length; i++) {
      listMade = false;
      var h3tag = tocHeaders[i];

      $(h3tag).attr('name', h3tag.textContent.replace(/\W/g, '').toLowerCase());
      // Appending heading text to table to contents
      $('.toc-list .items').append( prepareTocLink(h3tag, "") );

      // Find all sub-headings(h4) inside each heading(h3)
      var allh4 = $(h3tag).nextUntil('h3','h4');

      // Check if there are any h4 elements. If there are none, we should not run the code below.
      if(allh4.length == 0) continue;
      // Prepare a list mark-up for all sub-headings in the table of contents
      var h4list = '<ul style="margin-left: 20px">';

      // Iterate through these sub headings
      /*for( var j=0; j<allh4.length;j++) {
       var h4tag = allh4[j];
       $(h4tag).attr('name', h3tag.textContent.replace(/\W/g, '').toLowerCase() + h4tag.textContent.replace(/\W/g, '').toLowerCase());
       // adding the sub headings to the subheading list
       h4list = h4list + prepareTocLink(h4tag, $(h3tag).text());
       }
       h4list = h4list+'</ul>';

       //append sub-heading list to the table of contents
       $('.toc-list .items').append(h4list);
       */
    }

    //check if URL already has a hash and scroll to the correct heading
    /**
     * @todo Clean this up, must be more robust! Do not assume that all hash URLS are links to headings, sanitize and add tests. Angular uses hash URLs to simulate page navigation
     *
     */
    if (window.location.hash.length > 0) {
      try {
        var hashId = window.location.hash;
        //if a matching h3 or h4 has the hash ID, then scroll to it.
        if($("h3"+hashId).length > 0 || $("h4"+hashId).length > 0) {
          scrollToHash( hashId );
        }

      } catch(e) {
        // Don't do a thing!
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
      target = target.length ? target : $('[name=' + hash.slice(1) +']');
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
      $(headerTag).attr("id",prefix.replace(/ /g,"-").toLowerCase() + "--" + headerText.replace(/\-/g,'').replace(/ /g,"-").toLowerCase()); // generating id for the h3
      var headerId = $(headerTag).attr("id").replace(/\W/g, ''); // set the id
      //create the link and return it
      return '<li><a href="#'+headerId+'">'+headerText+'</a></li>';
    }

  });

  $(document).ready(function(){

    // small chevron icon in mobile view

    if( $( window ).width() <= 768){
      $('.toc-list p span').toggleClass("stb-sprite-small stb-sprite-medium");
    }
    // hide and show articles list
    $('.toc-list p').click(function() {
      // if the media screen width is large, then don't do anything
      // the following will apply for mobile view
      $('.toc-list .items').slideToggle();
      $('.toc-list p span').toggleClass("chevron-down red chevron-up");

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
    var arrowCode ='<span class="stb-sprite-small arrow-right pull-right"></span>';
    $('a.list-group-item').append(arrowCode);
  });

//Adding link visibility to contents in first column in clickable rows in tables
  $(document).ready(function() {
    $('tr.clickable td:first-child').each(function() {
      $(this).html('<a href="#"' + '>' + $(this).text() + '</' + 'a>')
    });
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

// Check  for list groups with .expandable class and make them expandable
  $(document).ready(function(){
    $('ul.stb-list-group.expandable').each(function(index){
      makeExpandableList($(this),2);
    });

  });


// Google Analytics event tagging - automated for various design elements
  $(document).ready(function(){

    $('button').bind( "click", function() {
      var btnTxt = $(this).html();
      var path = window.location.pathname;
      //console.log(btnTxt);
      //console.log(path);
      ga('send', 'event', path , 'Klikk på knappen', btnTxt);
    });

    $('a').bind( "click", function() {
      var linkTxt = $(this).html();
      var path = window.location.pathname;
      //console.log(linkTxt);
      //console.log(path;
      ga('send', 'event', path , 'Klikk på lenke', linkTxt);
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
        var markup = '<div class="modal stb-modal fade" id="dialogModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog modal-span6">' +
            '<div class="modal-content">' +
            '<div class="modal-header stbcolor-secondary fifth">' +
            '<button type="button" class="close" data-dismiss="modal" onclick="options.onCloseAction();"><p class="pull-left">Lukk</p><span class="stb-sprite-medium remove pull-left"></span></button>' +
            '<h4 class="modal-title"><span class="stb-color-sprite-medium info"></span></h4>' +
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

// Script for populating the dropdown with the selected tab link
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

// Script for translating alias classes for Enonic editor One class names is not translated.
  $(document).ready(function(){
    $( ".regularButton").each(function() {$(this).removeClass(); $(this).addClass('stb-btn transparent light');  });
  });

// Script to hightlight anchor tags in mini and big boxes on mouseenter
  $("document").ready(function() {
    $( ".mini" ).mouseenter(function() {
      $(this).find('a').css('color', '#DA291C');
      $(this).find('a').css('border-color', '#DA291C');
    });
    $( ".mini" ).mouseleave(function() {
      $(this).find('a').css('color', '#404040');
      $(this).find('a').css('border-color', '#404040');
    });
    $( ".big" ).mouseenter(function() {
      $(this).find('a').css('color', '#DA291C');
      $(this).find('a').css('border-color', '#DA291C');
    });
    $( ".big" ).mouseleave(function() {
      $(this).find('a').css('color', '#404040');
      $(this).find('a').css('border-color', '#404040');
    });
  });

  function openChatPension(){
    $('.chatPensionClosed span').addClass('stbcolor-secondary');
    $('.chatPensionClosed span').removeClass('stbcolor-gray');
    $('.chatPensionClosed a').attr("onClick","window.open(this.href, '','height=500,width=560');return false;");
    $('.chatText.pension').html('');
    $('.chatPensionClosed').addClass('chatPensionOpen');
    $('.chatPensionClosed').removeClass('chatPensionClosed');
  }

  function closeChatPension(){
    $('.chatPensionOpen span').addClass('stbcolor-gray');
    $('.chatPensionOpen span').removeClass('stbcolor-secondary');
    $('.chatPensionOpen a').attr('onClick','return false');
    $('.chatText.pension').html('<br>Stengt. Åpent hverdager 8-16 (Lør 9-15)');
    $('.chatPensionOpen').addClass('chatPensionClosed');
    $('.chatPensionOpen').removeClass('chatPensionOpen');
  }

  function openChatBank(){
    $('.chatBankClosed span').addClass('stbcolor-secondary');
    $('.chatBankClosed span').removeClass('stbcolor-gray');
    $('.chatBankClosed a').attr("onClick","window.open(this.href, '','height=500,width=560');return false;");
    $('.chatText.bank').html('');
    $('.chatBankClosed').addClass('chatBankOpen');
    $('.chatBankClosed').removeClass('chatBankClosed');
  }

  function closeChatBank(){
    $('.chatBankOpen span').addClass('stbcolor-gray');
    $('.chatBankOpen span').removeClass('stbcolor-secondary');
    $('.chatBankOpen a').attr('onClick','return false');
    $('.chatText.bank').html('<br>Stengt. Åpent hverdager 8-20 (Lør 9-15)');
    $('.chatBankOpen').addClass('chatBankClosed');
    $('.chatBankOpen').removeClass('chatBankOpen');
  }

// login
  $(document).ready(function(){
    /* Verify National Identity Number ***********************************************/
    function verifyIDNumber(nr) {
      var pn = new Array();
      var v1 = new Array(3,7,6,1,8,9,4,5,2,1,0);
      var v2 = new Array(5,4,3,2,7,6,5,4,3,2,1);
      for(var i=0; i<nr.length; i++) {
        pn[i] = nr.charAt(i);
      }
      var k1=0;
      for(var i=0; i<v1.length; i++) {
        k1 += pn[i]*v1[i];
      }
      var k2=0;
      for(var i=0; i<v2.length; i++) {
        k2 += pn[i]*v2[i];
      }
      if (k1%11==0 && k2%11==0 ) {
        return true;
      } else {
        return false;
      }
    }

    var idValidator = {
      message: '<span class="stb-color-sprite-small warning"></span> Fødselsnummeret er ikke gyldig!',
      callback: function(value, validor){
        return verifyIDNumber(value);
      }
    };

    try{

      $('#start-login-form, #start-login-form-mobile ').bootstrapValidator({
        message: 'This value is not valid',
        live: 'disabled',
        feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
          birthNumber: {
            container: '.info-message',
            validators: {
              callback: idValidator,
              notEmpty: {
                message: '<span class="stb-color-sprite-small warning"></span> Oppgi fødselsnummer'
              }
            }

          }
        }
      }).on('success.form.bv', function(e) {
            // Prevent form submission
            e.preventDefault();

            var $form        = $(e.target),
                validator    = $form.data('bootstrapValidator'),
                submitButton = validator.getSubmitButton();

            window.location = absURL+"../brukertest/vanlig/login/login-step-faner.html"
          });

    }catch(err){}
  });

  $(document).ready(function(){
    var accept = readCookie('acceptCookie');
    if(accept=='Yes'){
      jQuery('#cookieFooter').hide();
    }

    $('#mobilemenu').find('#accordion-privat').on('show.bs.collapse', function (event) {
      $(event.target).prev().find('span:last').toggleClass('chevron-down chevron-up red');
      $(event.target).parent().addClass('active');
    });

    $('#mobilemenu').find('#accordion-privat').on('hide.bs.collapse', function () {
      $('.panel-collapse.collapse.in').prev().find('span:last').toggleClass('chevron-down chevron-up red');
      $('.panel-collapse.collapse.in').parent().removeClass('active');
    });


  });
  function aksepterCookie(){
    createCookie('acceptCookie','Yes','60');
    jQuery('#cookieFooter').hide('slow');
  }

  $(document).ready(function(){
    var closeLinks = $('a').filter(function(index){
      return $(this).find('span.remove').length > 0;
    });

    if(closeLinks.length > 0){
      hoverIcons(closeLinks);
    }
  });


  //All empty links need to redirect to a standard dummy page.
  $(document).ready(function(){

    $('a').bind('click', function(){
      if(window.location.href.indexOf("brukertest") > -1){
        if($(this).attr('href') == '#' && $(this).attr('data-toggle') == undefined && $(this).attr('onclick') == undefined && $(this).children('span.remove').length == 0 && !$(this).hasClass('twister') && document.title != "Bedrift"){
          if(document.title == "Forside" || document.title == "Contact Us" || document.title == "Contact Us"  || document.title == "Sitemap" || document.title == "Search Results"){
            window.location = "dummy/standardprototype.html";
          }else{
            window.location = "../dummy/standardprototype.html";
          }
        }
      }
    })

  });


}(jQuery));