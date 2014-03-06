
// Accordion v3 jQuery plugin
// Author: unknown 3'rd party, q2i@storebrand.no

// Usage: $('ul[data-widget=stbFaq]').stbFaq();
// See web manual for markup-example

(function($){

  $.fn.stbFaq = function(){

    $(this).find('a').on('click', function(e) {

      if($(this).hasClass('twister')) {
        e.preventDefault();
        var text = $(this).siblings('ul.accordion li .answer');
        if($(this).hasClass('open')){
          $(this).removeClass('open');
          text.slideUp(200);
        }
        else {
          // Eksempel på logging av bruk av FAQ-en. Må ha både sidenavn og FAQ-navn for å skille på sider med mer enn én FAQ.
          // ga('send', 'event', '[Sidenavn]', 'Les [FAQ-navn]', 'Svar nummer ' +$(this).children(".number").html());
          $(this).addClass("open");
          text.slideDown(200);
        }
      }
    });

  };

}(jQuery));
