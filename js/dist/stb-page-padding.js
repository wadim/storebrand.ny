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
