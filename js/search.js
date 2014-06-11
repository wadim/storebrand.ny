$(document).ready( function(){
/**
 * Initialize typeahead.js
 */
$('.typeahead').typeahead({
	name: $(this).attr('id'),
	minLength:3,
	prefetch: {
		// http://www.geonames.org/export/geonames-search.html
		url: 'data/sample.json',
		filter: function(parsedResponse) {
			var result = [];
			for (var i=0; i<parsedResponse.keywords.length; i++) {
				var Id = parsedResponse.keywords[i].Id;
				result.push({
					name: parsedResponse.keywords[i].keyword,
					value: parsedResponse.keywords[i].keyword,
					categoryName: parsedResponse.keywords[i].categoryName,
					
				});
			}
			return result;
		}
	},
	template: [
	    '<p class="geo-country text-muted">{{categoryName}}</p>',
		'<p class="geo-name">{{name}}</p>'
		
	].join(''),
	engine: Hogan
});

$('.typeahead').focus(function()

		           		{

		            	      /*to make this flexible, storing the current width in an attribute*/

		           			$(this).parent().attr('data-default', $(this).parent().css('width'));

		           		    $(this).parent().animate({ width: 300 }, 'slow');

		           		}).blur(function()
		            		{

		            		    /* lookup the original width */

	            		    var w = $(this).parent().attr('data-default');
		            		    $(this).parent().animate({ width: w }, 'slow');

		            		});

		          


});