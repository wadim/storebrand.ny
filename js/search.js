// This Javascript file contains functions required for search
// The search.js is dependent on the typeahead.bundle.min.js script in order to work

$(document).ready(function(){
  activateSearch();
  
  // perform search only for search result page
  
  if(window.location.href.indexOf("action=search")!=-1){
	//get the query from the location URL
    get=getQuery();
    searchIsRunning=false;

    start=0; //start from the first page of search result
	
    //if start is defined, get the number
	if(get['start']!=undefined && get['start'].length>0 ) {
	  start = get['start'];
	}
	
	//if the query exists, then perform the search
	if (get['q']!=undefined && get['q'].length > 0 ) {	
      $("form.stb-form-inline input.searchbox").val(get['q']);
	  //$('.currentsearch .searchterm').text(get['q']);
	  searchQuery(get['q'], start);
    };
  }
});

//Activates and displays the search field on the menu bar.
function activateSearch(){
  $('#desktop-menu ul.nav li.search').show();

  //If desktop the search field is extendable
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
  window.location = "o2w-test-search-result.html?action=search&q="+sterm;
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
          {"name": "LÃ¦r mer om fondsparing","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "BÃ¦rekraft","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "KjÃ¸p fond","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "VÃ¥re anbefalte fond","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Delphi","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Storebrandfondene","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Kontakt fond","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Start fondsparing","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Chat om fond","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"}
        ],
    "Pensjon" :
        [
          {"name": "LÃ¦r om pensjon","url" : "http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Pensjonskalkulator","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "KjÃ¸p pensjonssparing","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
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
          {"name": "Priser og vilkÃ¥r","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Dagens renter","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "SÃ¸k boliglÃ¥n","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
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
          {"name": "UfÃ¸reforsikring","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"}
        ],
    "Minside" :
        [
          {"name": "Betal regning","url" : "http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Min oversikt","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Mitt forbruk","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Efaktura","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Kort og kreditt","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Anders Losvik","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "BjÃ¸rn Christian TÃ¸rrissen'","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Mine kontoer","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "Mine innstillinger","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
          {"name": "SÃ¸k lÃ¥n","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
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

    //Make use of the Bloodhound suggestion engine in order to use an array of datums(js objects)
    var category =  new Bloodhound({
      // A function with the signature (datum) that transforms a datum into an array of string tokens.
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
      // A function with the signature (query) that transforms a query into an array of string tokens.
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      // An array of datums
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
    };
    categoryConfig.push(catObj);
  });

  //Calls the typeahead with the category config
  $.fn.typeahead.apply($('.search .typeahead'), categoryConfig);

  $('.search .typeahead').bind('typeahead:selected', function(event,data) {

    //Checks if Google analytics is initialized and sends data regarding the search
    if(typeof(ga) === 'function'){
      ga('send', 'event', 'search', 'selected', 'SÃ¸keord: '+data.name);
    }

    if(data.url){
      window.location.href = data.url;
    }

    $('.typeahead').typeahead('close');
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

      //DonÂ´t minimize if there is text in the search field
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


    function getQuery(){
	  //get the query from the location URL
	  var get = [];
	  decodeurl = decodeURI(location.search);
	  decodeurl.replace('?', '').split('&').forEach(function (val) {
	    split = val.split("=", 2);
	    get[split[0]] = split[1];
	  });

	  return get;
	}

	//search ajax call
	function searchQuery( query, start ) {
      // loader image
      $(".searchresults").append("<row><div class='col-12 top-margin-30' style='text-align: center;'><img id='loadingimage' src='images/ajax-loader.gif'></div></div>");
      searchIsRunning = true;
	  
	  
	 var query = encodeURI( encodeURI( query ) ); // used becauase of the yahoo api. Can be removed later
	  $.ajax({
	    type: "GET",
	    url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Fwww.google.com%2Fcse%3Fcx%3D005330830390972510741%253A_ylpvikmny8%26client%3Dgoogle-csbe%26gl%3Dno%26start%3D"+start+"%26num%3D20%26output%3Dxml_no_dtd%26ie%3Dutf-8%26oe%3Dutf-8%26q%3D"+query+"'&diagnostics=false",
	    dataType: "xml",
	    success: xmlParser
	  });
	}

	function xmlParser(xml) {
	  $("#loadingimage").remove();
	  searchIsRunning = false;
	  noresult = false;
	  
		if(start == 0){
		  // prepare the resultsummary for populating the status of the search result ( found or not)
		  resultSummary = '<div class="resultsummary row bottom-margin-30"><div class="col-sm-12"></div></div>';
		  $(resultSummary).insertAfter($('.stb-form-inline .searchbox').closest('form').parent().parent());
		  
		  
		  // Forslag til annen stavemåte
		  $(xml).find("Spelling").each(function() {
			var suggestedSpelling = $(this).find("Suggestion").attr("q");
			//$(".searchsummary").append('<div id="suggestion"' + '>Vi har få eller ingen treff på det søkeordet, men prøv <a href="/site/stb.nsf/frmgugl-bootstrap.html?ReadForm&q=' + suggestedSpelling + '">' + suggestedSpelling + '<' + '/a>.<' + '/div>');
			$(".resultsummary div").append('<div id="suggestion"' + '>Vi har f&aring; eller ingen treff p&aring; det s&oslash;keordet, men pr&oslash;v <a href="/site/stb.nsf/frmgugl-bootstrap.html?ReadForm&q=' + suggestedSpelling + '">' + suggestedSpelling + '<' + '/a>.<' + '/div>');
			noresult= true;
		  });
		  // Hvis vi ikke finner noe som helst må vi jo si ifra om det først:
		  if ($(xml).find("R").length == 0 && $(xml).find("Spelling").length== 0 ) {
			$(".resultsummary div").append('<div class="nogo"' + '>Fant ingen treff ved s&oslash;k etter <' + 'strong>'+ $(xml).find("Q").text()+'<' + '/strong>.<' + '/div>');
			  noresult=true;
		  }
		  // Men hvis vi finner noe, så kan vi vise treff
		  // Først antall treff, og så kan vi også legge på lenke til neste/forrige gjeng sider, hvis vi vil.
		  hitcounter = parseInt($(xml).find("M").text());

		  if (hitcounter > 10) {
			//$(".searchsummary").append('Viser treff ' + $(xml).find("RES").attr("SN") + '-' + $(xml).find("RES").attr("EN") + ' av totalt ' + hitcounter + ' for søk på "' + $(xml).find("Q").text() + '".<' + 'br />');
			//$(".searchFooter").append('Viser treff ' + $(xml).find("RES").attr("SN") + '-' + $(xml).find("RES").attr("EN") + ' av totalt ' + hitcounter + ' for søk på "' + $(xml).find("Q").text() + '".<' + 'br />');
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
	  
	  // populate the resultsummary for the search result ( search term and total number of results)
	  if (noresult==false && start==0) {
	    foundresult= '<p>Ditt s&oslash;k p&aring; &laquo;'+$(xml).find("Q").text()+'&raquo; gav '+(hitcounter>100?" mer enn 100 " : hitcounter)+' treff.</p>';
		//$('.stb-form-inline .searchbox').closest('form').parent().parent().insertAfter(resultSummary);
		$(".resultsummary div").append(foundresult);  
	  }
	  
	}
	
	function displaySearchResult(xml) {
	
	 // Så¡¥r det på¡´ide å¡¬egge på¡³elve treffene.
	  $(xml).find("R").each(function () {
	    // Vi behandler "promotions" spesielt, og resten på¡¥n annen mæµ¥
	    // Fð²³´ promotions, som alltid kommer fð²³´ hvis de kommer
	    if ($(this).find("SL_MAIN").length > 0) {
	      // Vise promotion
	      var promoURL = $(this).find("IMAGE_SOURCE").text();
	      var promoPic = "";
	      if (promoURL!="" && promoURL!= null) {
	        promoPic = "<img src='" + promoURL + "' />";
	      }
	      $(".searchresults").append('<div class="lookatwhatifound' + '"><div class="promotering"' + '>' + promoPic + '<div class="title"' + '><a href="'  + $(this).find("SL_MAIN").find("U").text() + '">' +  $(this).find("BLOCK").find("T").text() + '<' + '/a><' + '/div><' + 'div class="description">' + $(this).find("S").text() + '<' + '/div><' + '/div><'+ '/div>');
	    } else {
	      // Så¡©kke-promotions (som vanligvis er det som kommer)
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
	      var linkDecoration = "";
	      if (strippedU.indexOf(".pdf") > 0) {
	        linkDecoration = ' class="pdf document" ';
	      }

	      var resultMarkup = "";

	      if (strippedS.indexOf("reutzer") > 0) {
	        resultMarkup = '<div class="lookatwhatifound' + '"><img src="/site/stb.nsf/minidar.png" width="52" height="73"' + '/><div class="title"' + '><a ' + linkDecoration + ' href="'  + $(this).find("U").text() + '">' +  $(this).find("T").text() + '<' + '/a><' + '/div><' + 'div class="description">' + strippedS + '<br' + ' /><div class="showurl"' + '><a href="' + showU + '">' + shortenedU + '<' + '/a><' + '/div>' + '<' + '/div><' + '/div>';
	        $(".searchresults").append(resultMarkup);
	      } else {
	        resultMarkup = '<div class="top-margin-50' + '"><h4 class=""' + '><a ' + linkDecoration + ' href="'  + $(this).find("U").text() + '">' + $(this).find("T").text() + '<' + '/a><' + '/h1><' + 'p class="description">' + strippedS + '</p' + ' ><p class="showurl"' + '><a href="' + showU + '">' + shortenedU + '<' + '/a><' + '/p><' + '/div>';
	        $(".searchresults").append(resultMarkup);
	      }
	    }
	  });
	
	}

	$(document).scroll(function(e){

	  // prevent the scroll to search again while the search is still running, or if the search result limit has been reached
	  if(searchIsRunning == true || (start+20)>hitcounter) {
		return false;
	  }

	  //if the user has scrolled to the bottom of the page
	  if($(window).scrollTop() + $(window).height() == $(document).height()) {

 	    // Show message after searching 100 items
	    if(start>=80) {
  		  $(".searchresults").append("<row><div class='col-12 top-margin-30' style='text-align: center;'> <p class='intro'>You have searched about 100 records. Do you want to perform some other search.</p></div></div>");
		  hitcounter = 0;
		  return false;
	    }
		
	   start = start + 20;
	   
	   searchQuery(get['q'], start);
	  }
	});
