
$(document).ready(function(){
	
  // tracking article links
  $('.items a').click(function(){
	ga('send', 'event', 'ArticleList', document.title, $(this).text());
  });
  
  // tracking FAQ's
  $('.accordion a').click(function(){
    var accordionHeader = $(this).clone().children().remove().end().text().substr(0,20);
    ga('send', 'event', 'FAQs', document.title,accordionHeader);
  });
  
});