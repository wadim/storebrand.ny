


$('document').ready(function(){

  // simulate moving progressbar:
  $('#progressbar-trigger').on('click', function(){
    var rand = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    $('.stb-progress div[data-widget=progressExample]').css({width: rand + '%'});
  });

  // tooltip and popover:
  $('#demo-popover').popover();
  $('#demo-tooltip-1').tooltip('show');
  $('#demo-tooltip-2').tooltip('show');

  // datepicker
  $('select[data-widget=chosenSelect]').chosen();

  // faq/accordion
  $('ul[data-widget=stbFaq]').stbFaq();

  // custom selects
  $('select.stb-select').customSelectMenu({menuClass: 'stb-select'});
  $('input[name=customStyleSelect]').on('change', function(){
    // do nothing, keep for reference.
  });

  // append hex color-values to DOM
  $('.color-swatch').each(function(){
    var rgb = $(this).css('background-color');
    var color = hexc(rgb).toUpperCase();
    $(this).append('<div class="color-code">'+color+'</div>');
  });

}); //end:Document.ready

// util function: converts rgb(1,2,3) to hex color-value
function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i], 10).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
    return color;
}