$(document).ready(function() {
    	
    	// find all the major articles 
	 	var articles= $('.articles');
	 	for(i=0; i<articles.length; i++) {
	 		
	 		//retrieve article heading(h3) content and id for each article
	 		var h3text = $(articles[i]).find('h3').html();
	 		var h3id = $(articles[i]).find('h3').attr("id");
	 		
	 		// append article heading text as links in the articlelist
	 		$('.articlelist .items').append('<li><a href="#'+h3id+'">'+h3text+'</a></li>');
	 		
	 		// find all subarticles(h4) inside each article
	 		var allh4= $(articles[i]).find('h4')
	 	
	 		// make a list of all subarticles in each article
	 		var h4list = '<ul style="margin-left: 50px">';
	 		for( j=0; j<allh4.length;j++) {
	 			var h4text= $(allh4[j]).html();
	 			var h4id= $(allh4[j]).attr("id");
	 			h4list=h4list+'<li><a href="#'+h4id+'">'+h4text+'</a></li>';
	 		}
	 		h4list = h4list+'</ul>';
	 		
	 		//append these subarticles in the articlelist
	 		$('.articlelist .items').append(h4list);
	 	}
	 
	});