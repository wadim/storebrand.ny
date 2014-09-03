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
      {"name": "Kvartalsrapporter","url" : "http://www.storebrand.no/site/stb.nsf/Pdfkvartalsrapporterprselskap?Openview&RestrictToCategory=Storebrand%20Asa%202013"},
      {"name": "Bærekraft","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsidebarekraft.html"},
      {"name": "Presse","url":"http://www.storebrand.no/site/stb.nsf/Pages/newsdesk.html#/"},
      {"name": "Pressekontakter","url":"http://www.storebrand.no/site/stb.nsf/Pages/newsdesk.html#/"},
      {"name": "Jobb i Storebrand","url":"http://www.storebrand.no/site/stb.nsf/pages/hovedsidejobbistorebrand.html"}
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
      {"name": "Lær om pensjon","url" : "dummy.html"},
      {"name": "Pensjonskalkulator","url":"dummy.html"},
      {"name": "Kjøp pensjonssparing","url":"dummy.html"},
      {"name": "Ekstrapensjon","url":"http://www.storebrand.no/site/stb.nsf/Pages/ekstrapensjon.html"},
      {"name": "Ditt pensjonstall","url":"dummy.html"},
      {"name": "Fripolise","url":"dummy.html"},
      {"name": "Pensjonsskolen","url":"dummy.html"},
      {"name": "Folketrygden","url":"dummy.html"},
      {"name": "Tjenestepensjon","url":"dummy.html"},
      {"name": "Kontakt pensjon","url":"dummy.html"},
      {"name": "Start pensjonssparing","url":"dummy.html"},
      {"name": "Chat om pensjon","url":"dummy.html"},
      {"name": "Mitt pensjonstall","url":"dummy.html"},
      {"name": "Tips til pensjon","url":"dummy.html"}
    ],
  "Bank" :
    [
      {"name": "Banksparing","url" : "dummy.html"},
      {"name": "Kort og kreditt","url":"dummy.html"},
      {"name": "Mistet kort","url":"dummy.html"},
      {"name": "Sperr kort","url":"dummy.html"},
      {"name": "Visakort","url":"dummy.html"},
      {"name": "Kredittkort","url":"dummy.html"},
      {"name": "Bli kunde","url":"dummy.html"},
      {"name": "Kontakt banken","url":"dummy.html"},
      {"name": "Priser og vilkår","url":"dummy.html"},
      {"name": "Dagens renter","url":"dummy.html"},
      {"name": "Søk boliglån","url":"dummy.html"},
      {"name": "Start Banksparing","url":"dummy.html"},
      {"name": "Chat om bank","url":"dummy.html"}
    ],
  "Forsikring" :
    [
      {"name": "Meld skade","url" : "dummy.html"},
      {"name": "Bilforsikring","url":"dummy.html"},
      {"name": "Helseforsikring","url":"dummy.html"},
      {"name": "Hytteforsikring","url":"dummy.html"},
      {"name": "Tips om forsikring","url":"dummy.html"},
      {"name": "Mine behov","url":"dummy.html"},
      {"name": "Alt til bilen","url":"dummy.html"},
      {"name": "Alt til barnet","url":"dummy.html"},
      {"name": "Alt til huset","url":"dummy.html"},
      {"name": "Kontakt forsikring","url":"dummy.html"},
      {"name": "Chat om forsikring","url":"dummy.html"},
      {"name": "Motorsykkelforsikring","url":"dummy.html"},
      {"name": "Tilhengerforsikring","url":"dummy.html"},
      {"name": "Uføreforsikring","url":"dummy.html"}
    ],
  "Minside" :
    [
      {"name": "Betal regning","url" : "dummy.html"},
      {"name": "Min oversikt","url":"dummy.html"},
      {"name": "Mitt forbruk","url":"dummy.html"},
      {"name": "Efaktura","url":"dummy.html"},
      {"name": "Kort og kreditt","url":"dummy.html"},
      {"name": "Anders Losvik","url":"dummy.html"},
      {"name": "Bjørn Christian Tørrissen'","url":"http://bjornfree.com/"},
      {"name": "Mine kontoer","url":"dummy.html"},
      {"name": "Mine innstillinger","url":"dummy.html"},
      {"name": "Søk lån","url":"dummy.html"},
      {"name": "Banksparing","url":"dummy.html"},
      {"name": "Nettbank","url":"dummy.html"},
      {"name": "Sikker chat - logg inn","url":"dummy.html"}
    ]
};