

// This Javascript file contains functions required for search
// Later this can be merged with the other search JS files like extendedsearch.js


$( document ).ready(function() {
	
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
});

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