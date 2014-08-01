

// This Javascript file containes functions required for search
// Later this can be merged with the other search JS files like extendedsearch.js


$( document ).ready(function() {
  $("input.searchbox").keydown(function(event){
    if(event.which == 13){
      checkSearch( this.value );
      return false;
    }
  });
});

function checkSearch(query){
  //Gjør søkefeltet smart. Kommer det inn 11 tall antar vi at bruker vil logge inn ---
  //Inneholder bokstaver - søker direkte
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