// This Javascript file contains functions required for the site search function with type-ahead
// The search.js needs typeahead.bundle.min.js to function.
// It also needs some data to function. It is for now stored in data/searchdata.js as global variables.
var start=0;
var searchParentWidthPercent;
var backgroundColor;
var maximized;
var animating;
var animSpeed;
var searchIsRunning=false;
var hitcounter=0;
var hasURL= false;

$(document).ready(function(){
  // Make search in menu header visible 
  activateSearch();
  
  // Perform search only on the search results page (add other pages if necessary)
  if ( window.location.href.indexOf("search-results.html") != -1 ){
	  //Get the search term from the URL
    get = getQuery();
    searchIsRunning=false;

    start = 0; // Start from the first group of search results from Google
	
    //If the start parameter is something else than nothing, get the new starting point for the up-coming Google search
    if (get['start']!=undefined && get['start'].length > 0 ) { 
      start = get['start'];
    }
	
    // If there is a search term to use, perform the search
    if ( get['q'] != undefined && get['q'].length > 0 ) {	
      $("form.stb-form-inline input.searchbox").val(get['q']);
      getPromotions();
      searchQuery(get['q'], start);
    };
  }
});

// Activate and display the search field in the top menu for desktop 
// (On mobile we will always show the search icon.)
function activateSearch() {
  $('#desktop-menu ul.nav li.search').show();
  
  // The search field on desktop must be made extendable upon click
  initExtendedSearch();

  // Prepare for type-ahead  
  initTypeahead();
}

// Remove certain special characters from search, in order to not break the Google search URL
function checkSearch(query) {
  var reg1 = new RegExp("\"","g"); 
  var reg2 = new RegExp("'", "g");
  var reg3 = new RegExp("<", "g");
  query = query.replace(reg1, "");
  query = query.replace(reg2, "");
  query = query.replace(reg3, "");
  window.location = "search-results.html?action=search&q=" + query;
}

function initPromotion() {
  // Data is available as global variable promotions in searchdata.js
};

function initTypeahead(){
  // Categorized JSON object. This will be served from CMS eventually. For now it is hardcoded.
  // Raw data is currently available as global variable typeaheads in searchdata.js, will be dynamically updated by CMS or other admin system later
  
  // Set up the category config object. First set some general parameters, such as the limit for how many typeahead suggestions to show.
  var categoryConfig = [{
    hint: true,
    highlight: true,
    minLength: 3,
    limit: 10
  }];

  // Loop through the category data, create multiple datasets (one per category), and add it to the category config.
  $.each(typeaheads, function(index) {
    // Make use of the Bloodhound suggestion engine in order to use an array of datums(js objects)
    var category =  new Bloodhound( {
      // A function with the signature (datum) that transforms a datum into an array of string tokens.
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
      // A function with the signature (query) that transforms a query into an array of string tokens.
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      // An array of datums
      local: typeaheads[index]
    });

    category.initialize();

    var header = '<h3 class="headline-search">&nbsp;<span class="stb-sprite-16 search"></span> ' + index + '<span style="font-size: 16px;"> - Direktevalg</span></h3>';

    if (index == "Anbefalte") {
      header = '<h3 class="headline-search">&nbsp;<span class="stb-color-sprite-16 ok"></span> Forslag til s&oslash;keord </h3>';
    }
    
    var catObj = {
      name : index,
      displayKey: 'name',
      source: category.ttAdapter(),
      templates: {
        header: header
      }
    };
    categoryConfig.push(catObj);
  });

  // Call  the typeahead with the category config
  $.fn.typeahead.apply( $('.searchbox.typeahead'), categoryConfig);

  $('input.searchbox').bind('typeahead:selected', function(event,data) {
    //Check whether Google Analytics is initialized, and if so, send event logging there
    if( typeof(ga) === 'function' ) {
      ga('send', 'event', 'search', 'selected', 'Search for: '+data.name);
    }
    if (data.url) {
      //Go to the defined URL for the current search keyword
      hasURL = true;
      window.location.href = data.url;
    }
    $('.typeahead').typeahead('close');
  });

  $('.tt-mobile .search-icon').click(function(){
    window.location = "search-results.html?q="+$('.tt-mobile .typeahead.tt-input').typeahead('val');
  });

  // Call checkSearch when hitting Enter while in the input area
  $("input.searchbox").keydown(function(event){
	if(!hasURL){
      if(event.which == 13){   
        checkSearch( this.value );
        return false;
      }
	}
  });

  // Call checkSearch when clicking the submit button
  $(".stb-form-inline button").click(function(event) {
	//alert($('input#main_search').val());
    checkSearch($('input#main_search').val());
    return false;
	
  });
}

//Make the search field extend on focus
function initExtendedSearch(){

  // Save the state of the search box. The search box is not in focus by default.
  maximized=false;

  // Save the animation state, whether the element is being animated or not.
  animating=false;

  // Animation speed
  animSpeed = 800;

  // Check when the document is clicked anywhere outside the search input field
  $(document).click(function() {
    // If the search field is in focus and not animating
    if(maximized == true && animating==false) {

      // Do not minimize if there is text in the search field
      if(!$('.navbar-nav .typeahead.tt-input').val()){
        minimizeSearch();
      }
    }
  });
  
  // Close search if Escape button is pressed
  $("input.searchbox").keydown(function(event){
    if(event.which == 27){
      minimizeSearch();
      $(this).blur();
    }
  });  
  
  // Close search if close icon is clicked
  $('.navbar-nav .search .remove').click(function(){
    minimizeSearch();
  });

  // If the search icon or the input element itself gets clicked, do not pass the click event to the document.
  $(".navbar-nav .typeahead.tt-desktop, .search-icon").click(function(e) {
    // Give it focus
    $('.navbar-nav .typeahead').focus();

    // If it's currently minimized and not animating, maximize it.
    if (maximized == false && animating == false) {
      maximizeSearch();
    }

    // This will prevent the minimizeSearch from being called too early.
    e.stopPropagation();
    return false;
  });
  

  function maximizeSearch() {
    maximized = true;

    // Save the animation state, and reset it once the animations complete
    animating = true;
    setTimeout(function(){
      animating = false;
    },animSpeed);

    // Store the current width
    searchParentWidth = $('.navbar-nav > li.search').css('width');
    backgroundColor = $('.navbar-nav .typeahead').css('background-color');
    // Since the width is given in pixels instead of percentage, we need to calculate it ourselves
    searchParentWidthPercent = Math.round(100*(parseInt(searchParentWidth) / $('.navbar-nav').width()));

    // Give the text element a fixed size
    $('.navbar-nav .typeahead').css('width',searchParentWidth);
    // Hide the menu
    $('.navbar-nav > li.group').toggle();

    // Expand the search parent to take 95 % of the available width
    $('.navbar-nav > li.search').css('width','95%');

    // Fade out the white search icon
    $('.navbar-nav .search-icon .search').fadeOut(animSpeed/4);

    // After fading out icon, fade in inverted (charcoal) icon with new background
    setTimeout(function(){
      $('.navbar-nav .search-icon .search').removeClass("white").fadeIn(animSpeed/2);
    }, animSpeed/4);

    $('.navbar-nav .search-icon').animate({backgroundColor:'"fff'},animSpeed);

    // Animate span parent container to 100 %
    $('.navbar-nav .typeahead').animate({width:'100%',backgroundColor:'"fff',color:"#000"},animSpeed);
    
    // Animate the text box
    $('.navbar-nav .twitter-typeahead').animate({width:'100%',backgroundColor:'"fff',color:"#000"},animSpeed);

    // Show the "Close search" icon
    setTimeout(function(){
      $('.navbar-nav li.search .remove').toggle();
    },animSpeed);
  }

  function minimizeSearch() {
    // Save the animating state, and reset it once the animations complete
    animating = true;
    setTimeout(function(){
      animating = false;
    },animSpeed);

    // Hide the remove icon
    $('.navbar-nav li.search .remove').toggle();

    // Reset the searchParent to the original width. The text box will fit on its own as its width is 100 %.
    $('.navbar-nav > li.search').animate({width:searchParentWidthPercent+'%'}, animSpeed);
    $('.navbar-nav .typeahead').animate({backgroundColor:backgroundColor,color:"#fff"}, animSpeed);

    // Fade out the white search icon
    $('.navbar-nav .search-icon .search').fadeOut(animSpeed/4);

    // After half the animation time has passed, fade in the inverted icon
    setTimeout(function(){
      $('.navbar-nav .search-icon .search').removeClass("charcoal").addClass("white").fadeIn(animSpeed/2);
    }, animSpeed/4);

    $('.navbar-nav .search-icon').animate({backgroundColor:backgroundColor},animSpeed);

    // Reset all the states after the animations complete
    setTimeout(function(){
      // Show the menu
      $('.navbar-nav > li.group').toggle();

      // Remove the focus from the smaller search box in case the user clicked on it during the animation
      $('.navbar-nav .typeahead').blur();

      // Save the new state
      maximized = false;

      // Reset the span container to initial value
      $('.navbar-nav .twitter-typeahead').css('width','initial');
    }, animSpeed);

  }
};

function getQuery(){
  // Get the query from the location URL
	var get = [];
	decodeurl = decodeURI(location.search);
	decodeurl.replace('?', '').split('&').forEach(function (val) {
	  split = val.split("=", 2);
	  get[split[0]] = split[1];
  });
  return get;
}

// AJAX search call to Google
function searchQuery( query, start ) {
  // loader image
  $(".searchresults").append("<row><div class='col-12 top-margin-30' style='text-align: center;'><img id='loadingimage' src='images/ajax-loader.gif'></div></div>");
  searchIsRunning = true;

  var query = encodeURI( encodeURI( query ) ); // Used because of the yahoo api. Replace with Storebrand proxy later.
  $.ajax({
    type: "GET",
	  url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Fwww.google.com%2Fcse%3Fcx%3D005330830390972510741%253A_ylpvikmny8%26client%3Dgoogle-csbe%26gl%3Dno%26start%3D"+start+"%26num%3D20%26output%3Dxml_no_dtd%26ie%3Dutf-8%26oe%3Dutf-8%26q%3D"+query+"'&diagnostics=false",
    dataType: "xml",
	  success: xmlParser
	});
}

function getPromotions() {
  // Populate the promotion area
  if (start == 0){
    initPromotion();
    $.each(promotions,function(value) {
      if (value.toLowerCase() == get['q'].toLowerCase()){ 
        $(".searchresults").append('<div class="top-margin-20 bottom-margin-20 promotion stb-box gray' + '"><h3>'+promotions[value].header + '<' + '/h3><' + 'p class="description">' + promotions[value].text + '</p' + ' ><p class="showurl"' + '><a href="' + promotions[value].url + '">' + promotions[value].name + '<' + '/a><' + '/p><' + '/div>');
      }
     });
  }
}

function xmlParser(xml) { 
  $("#loadingimage").remove();
  searchIsRunning = false;
  noresult = false;
  
  if(start == 0){
    // Prepare the result summary for populating the status of the search result ( found or not)
    resultSummary = '<div class="resultsummary row"><div class="col-sm-12"></div></div>';
    $(resultSummary).insertAfter($('.stb-form-inline .searchbox').closest('form').parent().parent());
    
    // Forslag til annen stavem�te
    $(xml).find("Spelling").each(function() {
    var suggestedSpelling = $(this).find("Suggestion").attr("q");
    //$(".searchsummary").append('<div id="suggestion"' + '>Vi har f� eller ingen treff p� det s�keordet, men pr�v <a href="/site/stb.nsf/frmgugl-bootstrap.html?ReadForm&q=' + suggestedSpelling + '">' + suggestedSpelling + '<' + '/a>.<' + '/div>');
    $(".resultsummary div").append('<div id="suggestion"' + '>Vi har f&aring; eller ingen treff p&aring; det s&oslash;keordet, men pr&oslash;v <a href="/site/stb.nsf/frmgugl-bootstrap.html?ReadForm&q=' + suggestedSpelling + '">' + suggestedSpelling + '<' + '/a>.<' + '/div>');
    noresult= true;
    });
    // Hvis vi ikke finner noe som helst m� vi jo si ifra om det f�rst:
    if ($(xml).find("R").length == 0 && $(xml).find("Spelling").length== 0 ) {
    $(".resultsummary div").append('<div class="nogo"' + '>Fant ingen treff ved s&oslash;k etter <' + 'strong>'+ $(xml).find("Q").text()+'<' + '/strong>.<' + '/div>');
      noresult=true;
    }
    // Men hvis vi finner noe, s� kan vi vise treff
    // F�rst antall treff, og s� kan vi ogs� legge p� lenke til neste/forrige gjeng sider, hvis vi vil.
    hitcounter = parseInt($(xml).find("M").text());

    if (hitcounter > 10) {
    //$(".searchsummary").append('Viser treff ' + $(xml).find("RES").attr("SN") + '-' + $(xml).find("RES").attr("EN") + ' av totalt ' + hitcounter + ' for s�k p� "' + $(xml).find("Q").text() + '".<' + 'br />');
    //$(".searchFooter").append('Viser treff ' + $(xml).find("RES").attr("SN") + '-' + $(xml).find("RES").attr("EN") + ' av totalt ' + hitcounter + ' for s�k p� "' + $(xml).find("Q").text() + '".<' + 'br />');
    //$('.currentsearch .number').text(hitcounter);
    var statpos = 0;
    var urlNow = window.location.href;
    if ($(xml).find("PU").length > 0) {
      var nextCounter = parseInt($(xml).find("RES").attr("SN")) - 11;
      statpos = urlNow.indexOf("&start=");
      var urlNewPrev = urlNow;
      if (statpos != -1) {
      urlNewPrev = window.location.href.substring(0,statpos)
      }
     // $(".searchsummary").append('<a href="' + urlNewPrev +  '&start=' + nextCounter + '">Forrige 20<' + '/a> - ');
      //$(".searchFooter").append('<a href="' + urlNewPrev +  '&start=' + nextCounter + '">Forrige 20<' + '/a> - ');
    }
    if ($(xml).find("NU").length > 0) {
      var nextCounter = parseInt($(xml).find("RES").attr("SN")) + 9;
      statpos = urlNow.indexOf("&start=");
      var urlNewNext = urlNow;
      if (statpos != -1) {
      urlNewNext = window.location.href.substring(0,statpos)
      }
      //$(".searchsummary").append('<a href="' + urlNewNext +  '&start=' + nextCounter + '">Neste 20<' + '/a><br' + '/>');
      //$(".searchFooter").append('<a href="' + urlNewNext +  '&start=' + nextCounter + '">Neste 20<' + '/a><br' + '/>');
    }
    }
    else if (hitcounter > 2) {
    //$(".searchsummary").append('Viser alle ' + hitcounter + ' treff for s&oslash;k p&aring; "' + $(xml).find("Q").text() + '".<' + 'br />');
    $(".searchFooter").append('Viser alle ' + hitcounter + ' treff for s&oslash;k p&aring; "' + $(xml).find("Q").text() + '".<' + 'br />');
    }
    else if (hitcounter == 2) {
    //$(".searchsummary").append('Viser de to treffene vi fant for s&oslash;k p&aring; "' + $(xml).find("Q").text() + '".<' + 'br />');
    //$(".searchFooter").append('Viser de to treffene vi fant for s&oslash;k p&aring; "' + $(xml).find("Q").text() + '".<' + 'br />');
    }
    else if (hitcounter == 1) {
    //$(".searchsummary").append('Viser det enslige treffet vi fant for s&oslash;k p&aring; "' + $(xml).find("Q").text() + '".<' + 'br />');
    //$(".searchFooter").append('Viser det enslige treffet vi fant for s&oslash;k p&aring; "' + $(xml).find("Q").text() + '".<' + 'br />');
    }
    else {
    //$(".searchsummary").append('');
    //$(".searchFooter").append('');
    }
  }
 
 displaySearchResult(xml);
 
  // Til slutt kan vi vise frem resultatet.
  //$(".lookatwhatifound").fadeIn(1000);
  
  // Populate the result summary for the search result ( search term and total number of results)
  if (noresult==false && start==0) {
    foundresult= '<p>Ditt s&oslash;k etter &laquo;'+$(xml).find("Q").text()+'&raquo; gav '+(hitcounter>100?" mer enn 100 " : hitcounter)+' treff.</p>';
  //$('.stb-form-inline .searchbox').closest('form').parent().parent().insertAfter(resultSummary);
  $(".resultsummary div").append(foundresult);  
  }
  
}

function displaySearchResult(xml) {
  // N� skal vi vise selve treffene
  $(xml).find("R").each(function () {
    // Vi behandler "promotions" spesielt, og resten p� en annen m�te
    // F� inn promotions, som alltid kommer f�rst, hvis de kommer i det hele tatt.
    if ($(this).find("SL_MAIN").length > 0) {
      // Vise promotion
      var promoURL = $(this).find("IMAGE_SOURCE").text();
      var promoPic = "";
      if (promoURL!="" && promoURL!= null) {
        promoPic = "<img src='" + promoURL + "' />";
      }
      $(".searchresults").append('<div class="lookatwhatifound' + '"><div class="promotering"' + '>' + promoPic + '<div class="title"' + '><a href="'  + $(this).find("SL_MAIN").find("U").text() + '">' +  $(this).find("BLOCK").find("T").text() + '<' + '/a><' + '/div><' + 'div class="description">' + $(this).find("S").text() + '<' + '/div><' + '/div><'+ '/div>');
    } else {
      // S�ke-promotions (som vanligvis er det som kommer)
      var strippedS = $(this).find("S").text();
      var stripRE = new RegExp("<br>", "g");
      strippedS = strippedS.replace(stripRE, "");
      var showU = $(this).find("U").text();
      var strippedU = showU;
      var stripU = new RegExp("http://www.", "g");
      strippedU = strippedU.replace(stripU, "");
      stripU = new RegExp("https://www.", "g");
      strippedU = strippedU.replace(stripU, "");
      if(strippedU.length > 85) {
        var shortenedU =  strippedU.substring(0,35) + "..." + strippedU.substring(strippedU.length-40, strippedU.length);
      } else {
        var shortenedU = strippedU;
      }
      
     // shorten the URL's
      
      var mobileU = shortenedU;
      
     //get the index of the last / in the url
      lastSlashIndex = mobileU.lastIndexOf("/");
      
      //if the last / was at the end of the URL, for example in storebrand.no/bank/
      if( lastSlashIndex+1 == mobileU.length ) {
     //remove the last /
        mobileU = mobileU.substr( 0, mobileU.length-1 );
     //now look for the new last /
     lastSlashIndex = mobileU.lastIndexOf("/", lastSlashIndex);
      }
      
      //if no slash was found, reset it to 0
      if( lastSlashIndex == -1 ) {
           lastSlashIndex = 0;
      }
      
      //if there are more than 1 slash, then we want to add "/..." to the start of the short URL
      var numOfSlashes = (mobileU.split("/").length - 1);
      mobileU = decodeURI(( numOfSlashes > 1?"/...":"" ) + mobileU.substr( lastSlashIndex ));
      
      
      var linkDecoration = "";
      if (strippedU.indexOf(".pdf") > 0) {
        linkDecoration = ' class="pdf_document" ';
      }

      var resultMarkup = "";

      if (strippedS.indexOf("reutzer") > 0) {
        resultMarkup = '<div class="lookatwhatifound' + '"><img src="/site/stb.nsf/minidar.png" width="52" height="73"' + '/><div class="title"' + '><a ' + linkDecoration + ' href="'  + $(this).find("U").text() + '">' +  $(this).find("T").text() + '<' + '/a><' + '/div><' + 'div class="description">' + strippedS + '<br' + ' /><div class="showurl"' + '><a href="' + showU + '">' + mobileU + '<' + '/a><' + '/div>' + '<' + '/div><' + '/div>';
        $(".searchresults").append(resultMarkup);
      } else {
        resultMarkup = '<div class="top-margin-50' + '"><h4 class=""' + '><a ' + linkDecoration + ' href="'  + $(this).find("U").text() + '">' + $(this).find("T").text() + '<' + '/a><' + '/h1><' + 'p class="description">' + strippedS + '</p' + ' ><p class="showurl"' + '><a href="' + showU + '">' + mobileU + '<' + '/a><' + '/p><' + '/div>';
        $(".searchresults").append(resultMarkup);
      }
      
    
    }
  });

}

$(document).scroll(function(e){
  // Prevent the scroll from searching again while the search is still running, or if the search result limit has been reached
  if ( searchIsRunning == true || (start+20)>hitcounter ) {
    return false;
  }

  // If the user has scrolled to the bottom of the page
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    // Show message after searching 100 items (now 40)
    if(start>=40) {
      $(".searchresults").append("<row><div class='col-12 top-margin-30' style='text-align: center;'> <p class='intro'>Kanskje du b&oslash;r pr&oslash;ve et <a href='#'> annet s&oslash;keord</a>?</p></div></div>");
      hitcounter = 0;
      return false;
    }
  
   start = start + 20;   
   searchQuery(get['q'], start);
  }
});
