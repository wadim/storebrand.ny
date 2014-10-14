
//get the searchdata.js absolute URL
var scripts = document.getElementsByTagName('script');

//load the current running script (which has to be this script as its running right now)
var absURL = scripts[scripts.length-1].src;

//remove the JS file name
absURL = absURL.substring(0,absURL.lastIndexOf("/")+1);

var promotions = {
  "banksparing" : {"header": "Det er lurt å spare i bank!",
            "text": "Da får du nemlig rente på pengene dine!", 
            "name": "Den som sparer, han har!", 
            "url": "http://www.storebrand.no/site/stb.nsf/Pages/sparekonto.html"},            
  "fond" : {"header": "Vet du hva du får i fond",
            "text": "Write something here", 
            "name": "write something here", 
            "url": "dummy.html"},
  "lån" : {"header": "Vet du hva du får i bank og lån",
           "text": "Write something here", 
           "name": "Write something here", 
           "url":"dummy.html"},
  "søk" : {"header": "Vet du hva du får i pensjon",
           "text": "Write something here", 
           "name": "Write something here", 
           "url":"dummy.html"},
  "eiendom" : { "header": "Storebrand Eiendom er en av Norges største eiendomsforvaltere.",
                "text": "Vi eier kjøpesentre, kontorbygg og lagerbygg.",
                "name": "Se tjenestene våre",
                "url": "dummy.html"},
  "Rapporter" : { "header": "Q2 rapporten er klar.",
                "text": "En god periode med godt resultat er stikkordene fra pressen",
                "name": "Finn rapportene her",
                "url": "dummy.html"},  
  "Rapporter" : { "header": "Q3 rapporten er klar.",
                "text": "En god periode med godt resultat er stikkordene fra pressen",
                "name": "Finn rapportene her",
                "url": "dummy.html"},                 
  "Kalkulator" : { "header": "Bilkalulator.",
                "text": "Vi har beste pris",
                "name": "Finn rapportene her",
                "url": "dummy.html"}, 
  "kontorbygg" : { "header": "Storebrand Eiendom forvalter mange kontorbygg.",
                "text": "Lei kontor fra oss!",
                "name": "Se kontorbyggene våre",
                "url": "dummy.html"}                
};

var typeaheads = {
  "Anbefalte" :
    [    
      {"name": "Fond"},
      {"name": "Fondssparing"},    
      {"name": "Bank"},
      {"name": "Banksparing"},
      {"name": "Forsikring"},
      {"name": "Bilhenger"},
      {"name": "Pensjon"}
    ],
    "Storebrand" :
    [
      {"name": "Kundefordeler","url":absURL+"../brukertest/vanlig/tema3/kundefordeler.html"}
    ],
  "Fond" :
    [
      {"name": "Fond","url" : "http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
      {"name": "Fondslister","url":"http://www.storebrand.no/site/stb.nsf/Pages/fondsliste-utvalgte-fond.html"},
      {"name": "Lær mer om fondsparing","url":"http://www.storebrand.no/site/stb.nsf/pages/fond_sparing.html"},
      {"name": "Bærekraft","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsidebarekraft.html"},
      {"name": "Kjøp fond","url":"https://www2.storebrand.no/fondweb/productinfo.html"},
      {"name": "Våre anbefalte fond","url":"https://www2.storebrand.no/spareveileder/general.html"},
      {"name": "Delphi","url":"https://www.delphi.no/site/delphino.nsf/Pages/hjem.html"}
    ],
  "Pensjon" :
    [
      {"name": "Lær om pensjon","url" : absURL+"../brukertest/vanlig/kategori/pensjon.html"},
      {"name": "Pensjonskalkulator","url":absURL+"../brukertest/vanlig/verktoy/pensjonstall.html"},
      {"name": "Pensjonssparing","url":absURL+"../brukertest/vanlig/artikkel/pensjonssparing.html"},
      {"name": "Egen sparing pensjon","url":absURL+"../brukertest/vanlig/produkt/egensparingpensjon.html"}
    ],
  "Bank" :
    [
      {"name": "Banksparing","url" : absURL+"../brukertest/vanlig/kategori/sparing.html"},
      {"name": "Bank og LÅn","url":absURL+"../brukertest/vanlig/kategori/bankoglaan.html"},
      {"name": "Bolig lån","url":absURL+"../brukertest/vanlig/produkt/boliglaan.html"},
      {"name": "Bolig lån for unge","url":absURL+"../brukertest/vanlig/produkt/boliglaanunge.html"},
      {"name": "Lånekalkulator","url":absURL+"../brukertest/vanlig/verktoy/laanekalkulator.html"},
      {"name": "Dagens Lånerenter","url":absURL+"../brukertest/vanlig/artikkel/dagenslaanerenter.html"},
      {"name": "Søke boliglån","url":absURL+"../brukertest/vanlig/artikkel/sokeboliglaan.html"},
      {"name": "Vilkår for boliglån","url":absURL+"../brukertest/vanlig/artikkel/vilkaarboliglaan.html"}
    ],
  "Forsikring" :
    [
      {"name": "Tips om forsikring","url":absURL+"../brukertest/vanlig/kategori/forsikring.html"},
      {"name": "Bilforsikring","url":absURL+"../brukertest/vanlig/produkt/bilforsikring.html"},
      {"name": "Bil og kjøretøy","url" : absURL+"../brukertest/vanlig/tema2/bilogkjoretoy.html"},
      {"name": "Hus og hjem","url" : absURL+"../brukertest/vanlig/tema2/husoghjem.html"},
      {"name": "At om bilforsikring","url" : absURL+"../brukertest/vanlig/artikkel/bilforsikring.html"},
      {"name": "Bonus på Kjøretøy","url" : absURL+"../brukertest/vanlig/artikkel/bonuskjoretoy.html"},
    ],
  "Minside" :
    [
    ]
};