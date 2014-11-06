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
var urlParams;

$(document).ready(function(){
  // Make search in menu header visible 
  activateSearch();
  
  // Perform search only on the search results page (add other pages if necessary)
  if ( window.location.href.indexOf("search-results.html") != -1 ){
	  //Get the search term from the URL
    urlParams = getQuery();
    searchIsRunning=false;

    start = 0; // Start from the first group of search results from Google
	
    //If the start parameter is something else than nothing, get the new starting point for the up-coming Google search
    if (urlParams.start!==undefined && urlParams.start.length > 0 ) { 
      start = urlParams.start;
    }
	
    // If there is a search term to use, perform the search
    if ( urlParams.q!==undefined && urlParams.q.length > 0 ) {	
      $("form.stb-form-inline input.searchbox").val(urlParams.q);
      getPromotions();
      searchQuery(urlParams.q, start);
    }
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
  //absURL is defined elsewhere so not initialized here again
  window.location = absURL+"../brukertest/vanlig/search-results.html?action=search&q=" + query; // link to the search result page
}

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
   // var header = '<h3 class="headline-search">&nbsp;<span class="stb-sprite-16 search"></span> ' + index + '<span style="font-size: 16px;"> Anbefalte Søkeresultater</span></h3>';   
   //var header = '<h3 class="headline-search"><span class="stb-sprite-16 search"></span>Gå direkte til:</h3>';
    
    //if (index == "Anbefalte") {
    //  header = '<h2 class="headline-search" style="margin:0; padding:0;"><span class="stb-color-sprite-16 ok"></span></h2>';
    //}
    
    var catObj = {
      name : index,
      displayKey: 'name',
      source: category.ttAdapter(),
      templates: {
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
  $(".searchcontainer .stb-form-inline button").click(function(event) {
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
    if(maximized===true && animating===false) {

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
    if (maximized===false && animating===false) {
      maximizeSearch();
    }

    // This will prevent the minimizeSearch from being called too early.
    e.stopPropagation();
    return false;
  });
  

  function maximizeSearch() {
    maximized = true;

    //Hide overlay when search is focus
    $('#overlay').hide();

    // Save the animation state, and reset it once the animations complete
    animating = true;
    setTimeout(function(){
      animating = false;
    },animSpeed);

    // Store the current width
    var searchParentWidth = $('.navbar-nav > li.search').css('width');
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
}

function getQuery(){
  // Get the query from the location URL
	var get = [];
	var decodeurl = decodeURI(location.search);
	decodeurl.replace('?', '').split('&').forEach(function (val) {
	  var split = val.split("=", 2);
	  get[split[0]] = split[1];
  });
  return get;
}

// AJAX search call to Google
function searchQuery( inputQuery, start ) {
  // loader image
  $(".searchresults").append("<row><div class='col-12 top-margin-30' style='text-align: center;'><img id='loadingimage' src='../../images/ajax-loader.gif'></div></div>");
  searchIsRunning = true;

  var query = encodeURI( encodeURI( inputQuery ) ); // Used because of the yahoo api. Replace with Storebrand proxy later.
  $.ajax({
    type: "GET",
	  url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Fwww.google.com%2Fcse%3Fcx%3D005330830390972510741%253A_ylpvikmny8%26client%3Dgoogle-csbe%26gl%3Dno%26start%3D"+start+"%26num%3D20%26output%3Dxml_no_dtd%26ie%3Dutf-8%26oe%3Dutf-8%26q%3D"+query+"'&diagnostics=false",
    dataType: "xml",
	  success: xmlParser
	});
}

function getPromotions() {
  // Populate the promotion area
  if (start===0){
    $.each(promotions,function(value) {
      if (value.toLowerCase() == urlParams.q.toLowerCase()){ 
        $(".searchresults").append('<div class="top-margin-20 bottom-margin-20 promotion' + '"><h3>'+promotions[value].header + '<' + '/h3><' + 'p class="description">' + promotions[value].text + '</p' + ' ><p class="showurl"' + '><a href="' + promotions[value].url + '">' + promotions[value].name + '<' + '/a><' + '/p><' + '/div>');
      }
     });
  }
}

// parse the search result coming from google

function xmlParser(xml) { 
  $("#loadingimage").remove();
  searchIsRunning = false;
  var noresult = false;
  
  // If this is the first set of results to be parsed
  if(start===0){
	  
    // Prepare the result summary for populating the status of the search result ( found or not)
    var resultSummary = '<div class="resultsummary row"><div class="col-sm-12"></div></div>';
    $(resultSummary).insertAfter($('.stb-form-inline .searchbox').closest('form').parent().parent());
    
    // Show search suggestions
    $(xml).find("Spelling").each(function() {
      var suggestedSpelling = $(this).find("Suggestion").attr("q");
      $(".resultsummary div").append('<div id="suggestion"' + '>Vi har f&aring; eller ingen treff p&aring; det s&oslash;keordet, men pr&oslash;v <a href="?action=search&q=' + suggestedSpelling + '">' + suggestedSpelling + '<' + '/a>.<' + '/div>');
      noresult= true;
    });
    
    // If we don't get anything initially, show corresponding message 
    if ($(xml).find("R").length===0 && $(xml).find("Spelling").length===0 ) {
    $(".resultsummary div").append('<div class="nogo"' + '>Fant ingen treff ved s&oslash;k etter <' + 'strong>'+ $(xml).find("Q").text()+'<' + '/strong>.<' + '/div>');
      noresult=true;
    }

    // Store number of results
    hitcounter = parseInt($(xml).find("M").text());

    // Populate the result summary for the search result (search term and total number of results)
    if (!noresult) {
      $(".resultsummary div").append('<p>Ditt s&oslash;k etter &laquo;'+$(xml).find("Q").text()+'&raquo; gav '+(hitcounter>100?" mer enn 100 " : hitcounter)+' treff.</p>');  
    }
  }
  
  // Display the results
  if(!noresult) {
    displaySearchResult(xml);
  }
}

function displaySearchResult(xml) {
  // Parse the results elements
  $(xml).find("R").each(function () {
    //Get the search result item's string and sanitize it
	var strippedS = $(this).find("S").text();
    var stripRE = new RegExp("<br>", "g");
    strippedS = strippedS.replace(stripRE, "");
    
    //Get the search result item's page URL and shorten it
    var showU = $(this).find("U").text();
    var strippedU = showU;
    var stripU = new RegExp("http://www.", "g");
    strippedU = strippedU.replace(stripU, "");
    stripU = new RegExp("https://www.", "g");
    strippedU = strippedU.replace(stripU, "");
    var shortenedU = "";
    if(strippedU.length > 85) {
      shortenedU =  strippedU.substring(0,35) + "..." + strippedU.substring(strippedU.length-40, strippedU.length);
    } else {
      shortenedU = strippedU;
    }
    //get the index of the last / in the url
    var lastSlashIndex = shortenedU.lastIndexOf("/");  
    //if the last / was at the end of the URL, for example in storebrand.no/bank/
    if( lastSlashIndex+1 == shortenedU.length ) {
      //remove the last /
      shortenedU = shortenedU.substr( 0, shortenedU.length-1 );
      //now look for the new last /
      lastSlashIndex = shortenedU.lastIndexOf("/", lastSlashIndex);
    }
    //if no slash was found, reset it to 0
    if( lastSlashIndex == -1 ) {
      lastSlashIndex = 0;
    }
    //if there are more than 1 slash, then we want to add "/..." to the start of the short URL
    var numOfSlashes = (shortenedU.split("/").length - 1);
    shortenedU = decodeURI(( numOfSlashes > 1?"/...":"" ) + shortenedU.substr( lastSlashIndex ));
  
    //Setup any special classes to identify result type
    var linkDecoration = "";
    if (strippedU.indexOf(".pdf") > 0) {
      linkDecoration = ' class="pdf_document" ';
    }

    //Prepare and display the result markup
    var resultMarkup = '<div class="top-margin-50' + '"><h4 class=""' + '><a ' + linkDecoration + ' href="'  + $(this).find("U").text() + '">' + $(this).find("T").text() + '<' + '/a><' + '/h1><' + 'p class="description">' + strippedS + '</p' + ' ><p class="showurl"' + '><a href="' + showU + '">' + shortenedU + '<' + '/a><' + '/p><' + '/div>';
    $(".searchresults").append(resultMarkup);
  });
}

//Detect page scrolling to load new search results
$(document).scroll(function(event){
  // Prevent the scroll from searching again while the search is still running, or if the search result limit has been reached
  if ( searchIsRunning===true || (start+20)>hitcounter ) {
    return false;
  }

  // If the page has search query and the user has scrolled to the bottom of the page, load more search results
  if((urlParams.q!==undefined && urlParams.q.length>0) && $(window).scrollTop() + $(window).height() == $(document).height()) {
    // Show message after searching 40 items
    if(start>=40) {
      $(".searchresults").append("<row><div class='col-12 top-margin-30' style='text-align: center;'> <p class='intro'>Kanskje du b&oslash;r pr&oslash;ve et <a href='#'> annet s&oslash;keord</a>?</p></div></div>");
      hitcounter = 0;
      return false;
    }
    
   //Start from the next 20 search results  
   start = start + 20;   
   searchQuery(urlParams.q, start);
  }
});
