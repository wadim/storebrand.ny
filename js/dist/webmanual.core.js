/** 
 * Generated by patsy for webmanual
 *
 * @version v0.2.3-beta
 * @date 2014-01-08
 * @link https://github.com/phun-ky/patsy
 */
function hexc(a) {
    var b = a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete b[0];
    for (var c = 1; 3 >= c; ++c) b[c] = parseInt(b[c], 10).toString(16), 1 == b[c].length && (b[c] = "0" + b[c]);
    return color = "#" + b.join("");
}

$("document").ready(function(){
  $(".row .column").matchHeight(true);
});
    
$(window).resize(function() {
  $(".row .column").matchHeight(true);
});

//Code for toogle demonstration of Notification boxes
function toggleMsg(){
  hideErrorMsg();
  hideCommonMsg();
  setTimeout(function(){
    showErrorMsg();
    showCommonMsg();
  }, 1000);
}

$(document).ready(function() {
        $.datepicker.regional.no = {
            closeText: "Lukk",
            prevText: "&laquo;",
            nextText: "&raquo;",
            currentText: "I dag",
            monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
            dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
            dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesMin: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
            weekHeader: "Uke",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, $.datepicker.setDefaults($.datepicker.regional.no), $("input[data-widget=stb-datepicker]").datepicker().children().show();
    }), $(document).ready(function() {
        var sliderObj = {
            from: 0,
            to: 100,
            domNode: "#stb-slider",
            valueElem: "#stb-slider-value",
            calculate: function(a) {
                return $(this.domNode).siblings(this.valueElem).text(a), a;

            },
            complete: function() {},
            onstatechange: function() {
                var a = $(this.domNode).find(".jslider-bg .l"),
                    b = $(this.domNode).find(".jslider-bg .r"),
                    c = $(this.domNode).find(".jslider-pointer");
                if (c && c.length > 0) {
                    var d = c[0].style.left.split("%")[0],
                        e = 100 - d;
                    a.css({
                        width: d + "%"
                    }), b.css({
                        width: e + "%",
                        left: d + "%"
                    });
                }
            },
            getPercentVal: function(a) {
                var b = a,
                    c = 0,
                    d = 100;
                if (b && b.length > 0) {
                    var e = b[0].style.left.split("%")[0];
                    c = e, d = 100 - c;
                }
                return d;
            }
        };
        var sliderEl = $("#stb-slider");
        initiateSlider(sliderEl, sliderObj, "år", "percent");

    }), $("document").ready(function() {
        $("#progressbar-trigger").on("click", function() {
            var a = Math.floor(101 * Math.random()) + 0;
            $(".stb-progress div[data-widget=progressExample]").css({
                width: a + "%"
            });
        }), $("#demo-popover").popover(), $("#demo-a-popover").popover(), $("select[data-widget=chosenSelect]").chosen(), $("select.stb-select").customSelectMenu({
            menuClass: "stb-select"
        }), $("input[name=customStyleSelect]").on("change", function() {}), $(".color-swatch").each(function() {
            var a = $(this).css("background-color"),
                b = hexc(a).toUpperCase();
            $(this).append('<div class="color-code">' + b + "</div>");
        }), $("document").ready(function(){
          
        	  // Prepare the row that contains the table of contents
            var toclist ='<div class="row"><div class="col-md-12 toc-list top-margin-20 top-padding-10 border-top-and-bottom"><p class="intro stb-font">Jump down to <span class="stb-sprite-medium chevron-up red  pull-right"></span></p><ul class="items"></ul></div></div>';
            var tocHeaders= null;
            // Place the table of content on the top and find the top headings 
            $(toclist).insertAfter($('p.lead')); 
            tocHeaders= $('h2.toc-header');
            
            // Iterate through all the top level headings
            
            for(var i=0; i<tocHeaders.length; i++) {
              listMade = false;
              var headingtag = tocHeaders[i];

              $(headingtag).attr('name', headingtag.textContent.replace(/\W/g, '').toLowerCase());
              // Appending heading text to table to contents
              $('.toc-list .items').append( prepareTocLink(headingtag, "") );

              // Find all sub-headings(h4) inside each heading(h3)
              var allh4 = $(headingtag).nextUntil('h3','h4');

              // Check if there are any h4 elements. If there are none, we should not run the code below.
              if(allh4.length == 0) continue;
              // Prepare a list mark-up for all sub-headings in the table of contents
              var h4list = '<ul style="margin-left: 20px">';

              // Iterate through these sub headings
              /*for( var j=0; j<allh4.length;j++) {
               var h4tag = allh4[j];
               $(h4tag).attr('name', headingtag.textContent.replace(/\W/g, '').toLowerCase() + h4tag.textContent.replace(/\W/g, '').toLowerCase());
               // adding the sub headings to the subheading list
               h4list = h4list + prepareTocLink(h4tag, $(headingtag).text());
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
            
            $('.toc-list .items a[href*=#]:not([href=#])').click(function(event) {
              event.preventDefault();
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                scrollToHash( this.hash);
              }
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
        }), $(document).ready( function(){
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
      });
