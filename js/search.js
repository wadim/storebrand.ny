

// This Javascript file containes functions required for search
// Later this can be merged with the other search JS files like extendedsearch.js


function checkSearch(searchterm) {
	//alert(searchbox.value);
    searchGoogleBootstrap(searchterm.value);
}

function searchGoogleBootstrap(sterm) {
  //var sterm =document.getElementById("searchterm").value;
  var reg1 = new RegExp("\"","g"); 
  var reg2 = new RegExp("'", "g");
  var reg3 = new RegExp("<", "g");
  sterm = sterm.replace(reg1, "");
  sterm = sterm.replace(reg2, "");
  sterm = sterm.replace(reg3, "");
  window.location = "o2w-test-search-result.html?q="+sterm;
}	;
