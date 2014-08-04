
// This Javascript file contains functions required for search
// Later this can be merged with the other search JS files like extendedsearch.js
$(document).ready(function(){
  activateSearch();
});

//Activates and displays the search field on the menu bar.
function activateSearch(){
  var searchDesktopMarkup = '<li class="search col-md-3"><div class="stb-sprite-16 remove white pull-left top-margin-10" style="display:none; cursor: pointer"></div><form><label style="width: 95%"> <input type="text" class="typeahead searchbox tt-desktop"/><span class="search-icon"><span class="stb-sprite-16 search white"></span></span></label></form></li>'
  $('#desktop-menu ul.nav').append(searchDesktopMarkup);

  if($(window).width() > 970){
    initExtendedSearch();
  }
  initTypeAhead();
}

function checkSearch(query){
  searchGoogleBootstrap(query);
}

function searchGoogleBootstrap(sterm) {
  var reg1 = new RegExp("\"","g"); 
  var reg2 = new RegExp("'", "g");
  var reg3 = new RegExp("<", "g");
  sterm = sterm.replace(reg1, "");
  sterm = sterm.replace(reg2, "");
  sterm = sterm.replace(reg3, "");
  window.location = "o2w-test-search-result.html?q="+sterm;
}

function initTypeAhead(){
  //Categorized json object
  var categoryData = {
    "Anbefalte" :
        [
          {"name": "Fond"},
          {"name": "Bank"},
          {"name": "Forsikring"},
          {"name": "Pensjon"}
        ],
    "Fond" :
        [
          {"name": "Fond","url" : "http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Fondslister","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Lær mer om fondsparing","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Bærekraft","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Kjøp fond","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Våre anbefalte fond","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Delphi","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Storebrandfondene","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Kontakt fond","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Start fondsparing","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Chat om fond","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"}
        ],
    "Pensjon" :
        [
          {"name": "Lær om pensjon","url" : "http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Pensjonskalkulator","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Kjøp pensjonssparing","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Hva er pensjonssparing","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Ditt pensjonstall","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Fripolise","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Pensjonsskolen","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Folketrygden","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Tjenestepensjon","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Kontakt pensjon","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Start pensjonssparing","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Chat om pensjon","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Spar til din pensjon","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Mitt pensjonstall","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Tips til pensjon","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"}
        ],
    "Bank" :
        [
          {"name": "Banksparing","url" : "http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Kort og kreditt","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Mistet kort","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Sperr kort","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Visakort","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Kredittkort","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Bli kunde","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Kontakt banken","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Priser og vilkår","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Dagens renter","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Søk boliglån","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Start Banksparing","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Chat om bank","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"}
        ],
    "Forsikring" :
        [
          {"name": "Meld skade","url" : "http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Bilforsikring","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Helseforsikring","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Hytteforsikring","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Tips om forsikring","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Mine behov","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Alt til bilen","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Alt til barnet","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Alt til huset","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Kontakt forsikring","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Chat om forsikring","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Motorsykkelforsikring","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Tilhengerforsikring","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Uføreforsikring","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"}
        ],
    "Minside" :
        [
          {"name": "Betal regning","url" : "http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Min oversikt","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Mitt forbruk","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Efaktura","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Kort og kreditt","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Anders Losvik","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Bjørn Christian Tørrissen'","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Mine kontoer","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Mine innstillinger","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Søk lån","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Banksparing","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Nettbank","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Sikker chat - logg inn","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"}
        ]
  };

  //The category config object. The first object set some general parameters, such as limit.
  var categoryConfig = [{
    hint: true,
    highlight: true,
    minLength: 3,
    limit: 10
  }];

  //Loops through the category data and creates multiple datasets(per category) and puts it in the category config.
  $.each(categoryData, function(index) {

    //Make use of the Bloodhound suggestion engine in order to use json objects
    var category =  new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: categoryData[index]
    });

    category.initialize();

    var header = '<h3 class="headline-search"><span class="glyphicon glyphicon-log-in"></span> '+index+'<span style="font-size: 16px;"> - Direkte</span></h3>';

    if(index == "Anbefalte"){
      header = '<h3 class="headline-search"><span class="glyphicon glyphicon-stats"></span> Anbefalt </h3>';
    }
    var catObj = {
      name : index,
      displayKey: 'name',
      source: category.ttAdapter(),
      templates: {
        header: header
      }
    }
    categoryConfig.push(catObj);
  });

  $.fn.typeahead.apply($('.search .typeahead'), categoryConfig);
  //Calls the typeahead with the category config
  //$('#the-basics .typeahead').typeahead(categoryConfig[0], categoryConfig[1]);

  $('.search .typeahead').bind('typeahead:selected', function(event,data) {
    ga('send', 'event', 'search', 'selected', 'Søkeord: '+data.name);

    if(data.url){
      window.location.href = data.url
    }

    $('.typeahead').typeahead('close');
    //$('#showTrailer').html('<h3>Her kan vi vise noe spesielt for valget ' + stripSpan($('#searchHit').val()) + '</h3>Og så kan vi vise Google-treffene under der igjen.');
  });

  $('.tt-mobile .search-icon').click(function(){
    window.location = "o2w-test-search-result.html?q="+$('.tt-mobile .typeahead.tt-input').typeahead('val');
  });

  // Call checksearch on hitting enter in the input area
  $("input.searchbox").keydown(function(event){
    if(event.which == 13){
      checkSearch( this.value );
      return false;
    }
  });

  // Call cheksearch on clicking the submit button
  $(".stb-form-inline .stb-btn").click(function(event){
    checkSearch($(this).siblings("input.searchbox").val());
    return false;
  });
}

//Makes the search field extend to a greater width when focused
function initExtendedSearch(){

  //save the state of the search box. the search box is not in focus by default
  maximized=false;

  //save the animation state, whether the element is being animated or not
  animating=false;

  //animation speed
  animSpeed = 800;

  //if the document is clicked anywhere
  $(document).click(function() {
    //if the search field is in focus, and not animating
    if(maximized == true && animating==false) {

      //Don´t minimize if there is text in the search field
      if(!$('.typeahead.tt-input').val()){
        minimizeSearch();
      }
    }
  });

  $('.search .remove').click(function(){
    minimizeSearch();
  });


  //if the search icon or the input element itself gets clicked, do not pass the click event to the document
  $(".typeahead.tt-desktop, .search-icon").click(function(e) {
    //give it focus
    $('.typeahead').focus();

    //if its currently small and not animating, maximize it
    if(maximized == false && animating == false) {
      maximizeSearch();
    }

    //this will prevent the minimizeSearch from being called
    e.stopPropagation();
    return false;
  });


  function maximizeSearch()
  {

    maximized = true;

    //save the animating state, and reset it once the animations complete
    animating = true;
    setTimeout(function(){
      animating = false;
    },animSpeed);

    //store the current width
    searchParentWidth = $('.navbar-nav > li.search').css('width');
    backgroundColor = $('.typeahead').css('background-color');
    //since the width is given in pixels instead of percentage, we need to calculate it ourselves
    searchParentWidthPercent = Math.round(100*(parseInt(searchParentWidth) / $('.navbar-nav').width()));


    //give the text element a fixed size first
    $('.typeahead').css('width',searchParentWidth);
    //hide the menu
    $('.navbar-nav > li.group').toggle();

    //expand the search parent to take 100% of the available width
    $('.navbar-nav > li.search').css('width','100%');



    //fadeOut the white search icon in 1/4th speed of the animation time
    $('.search-icon .search').fadeOut(animSpeed/4);

    //after the fadeOut animation time has passed, fadeIn with the class name changed to charcoal
    setTimeout(function(){
      $('.search-icon .search').removeClass("white").addClass("charcoal").fadeIn(animSpeed/2);
    }, animSpeed/4);

    $('.search-icon').animate({backgroundColor:'"fff'},animSpeed);

    //animate span parent container to 100 %
    $('.typeahead').animate({width:'100%',backgroundColor:'"fff',color:"#000"},animSpeed);
    //animate the textbox
    $('.twitter-typeahead').animate({width:'100%',backgroundColor:'"fff',color:"#000"},animSpeed);


    // show the remove icon
    setTimeout(function(){
      $('li.search .remove').toggle();
    },animSpeed);
  }


  function minimizeSearch()
  {

    //save the animating state, and reset it once the animations complete
    animating = true;
    setTimeout(function(){
      animating = false;
    },animSpeed);


    // hide the remove icon
    $('li.search .remove').toggle();
    //reset the searchParent to the original width. The text box will fit on its own as its width is 100%.
    $('.navbar-nav > li.search').animate({width:searchParentWidthPercent+'%'},animSpeed);
    $('.typeahead').animate({backgroundColor:backgroundColor,color:"#fff"},animSpeed);

    //fadeOut the white search icon in 1/4th speed of the animation time
    $('.search-icon .search').fadeOut(animSpeed/4);

    //after half the animation time has passed, fadeIn with the class name changed to white
    setTimeout(function(){
      $('.search-icon .search').removeClass("charcoal").addClass("white").fadeIn(animSpeed/2);
    }, animSpeed/4);

    $('.search-icon').animate({backgroundColor:backgroundColor},animSpeed);


    //reset all the states after the animations complete
    setTimeout(function(){
      //show the menu
      $('.navbar-nav > li.group').toggle();

      //remove the focus from the smaller search box in case the user clicked on it during the animation
      $('.typeahead').blur();

      //save the new state
      maximized = false;

      //Reseting the span container to initial value
      $('.twitter-typeahead').css('width','initial');
    }, animSpeed);

  }
};