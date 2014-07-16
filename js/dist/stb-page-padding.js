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

// End content padding
