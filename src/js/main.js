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
  				<div class="news-Title">${items.title}</div>
  				<span class="date">${items.date_published}</span>
  				 <p>${items.post}</p>
  				}
  				 

			</div>
  `
 }



getItem().then(function(data){
    console.log(data);
	$('.news-container').append(newsItem(data));

})


