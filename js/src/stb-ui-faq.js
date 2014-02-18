
// Accordion v3 jQuery plugin
// Author: unknown 3'rd party, q2i@storebrand.no

// Usage: $('ul[data-widget=stbFaq]').stbFaq();
// See the webmanual for markup-example

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
          // ga('send', 'event', 'Forside pensjon - Twister', 'Les', 'Svar nummer ' +$(this).children(".number").html());
          $(this).addClass("open");
          text.slideDown(200);
        }
      }
    });

  };

}(jQuery));
