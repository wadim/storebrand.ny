// capture the clicking of the article links
$(document).ready(function(){
  $('.items a').click(function(){
	ga('send', 'event', 'ArticleList', document.title, $(this).text());
  });
});