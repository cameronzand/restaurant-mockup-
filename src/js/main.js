import $ from 'jquery';
console.log("loaded");
 


function getItem () {
 	return $.ajax({
 		url: "https://json-data.herokuapp.com/restaurant/news/1",
 	
 	})	
 }
 function newsItem(items){
  return ` <div class= "news-Box">
  <h4>Latest News</h4>
  <div class="news-Title"> Rated Top 10 Pubs in America
  </div><p>Lorem ipsum dolor sit amet, 
  consectetur adipisicing elit, sed 
  do eiusmod tempor incididunt ut labore 
  et dolore magna aliqua. Ut enim ad minim veniam, 
  quis nostrud exercitation ullamco laboris nisi ut 
  aliquip ex ea commodo consequat. Duis aute irure dolor in 
  reprehenderit in voluptate velit esse cillum dolore eu fugiat 
  nulla pariatu</p>


</div>
  `
 }



getItem().then(function(data){
    console.log(data);
	$('.news-container').append(newsItem(data));

})


