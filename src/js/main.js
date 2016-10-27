import $ from 'jquery';
console.log("loaded");
 


function NewsItem () {
 	return $.ajax({
 		url: "https://json-data.herokuapp.com/restaurant/news/1",
 	
 	})	
 }



NewsItem().then(function(data){
    console.log(data);
	$('.news-container').append(NewsItem(data));

})


