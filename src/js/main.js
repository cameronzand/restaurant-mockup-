import $ from 'jquery';
console.log("loaded");
 
//===============Start of Ajex Request===================================>

function getItem () {
 	return $.ajax({
 		url: "https://json-data.herokuapp.com/restaurant/news/1",
 	
 	})	
 }

 function specialId(){
  return $.ajax({
    url:"https://json-data.herokuapp.com/restaurant/special/1"
  })
 }

 function pullMenu() {
  return $.ajax({
    url: "https://json-data.herokuapp.com/restaurant/menu/1"
  })
}

 // ====================== End of API Request=========>
//--------------------------------------------------------------------------------

function newsItem(items){
  return ` 
  				<h4>Latest News</h4>
  				<div class="news-Title">${items.title}</div>
  				<span class="date">${items.date_published}</span>
  				 <span class= "news-post"><p>${items.post}</p></span>
  				}
  				 

		
  `
 }
getItem().then(function(data){
    console.log(data);
	$('.news-Box').append(newsItem(data));
})
//---------------------------------------------------------------------------
// Special Items Json list
 function specialItems ( items, id ){
  console.log(items);
 var special = items.filter(function(entree){
  return entree.id == id
 });

 return `<h4>Today's Special</h4>
 
 <h5>${special[0].item}</h5>
 <div class="description">${special[0].description}`

}

// What is the special item of the day?
specialId().then(function(data1){
  // data now = { id: 1, menu-item-id: 25 }
  var id = data1.menu_item_id;
  pullMenu().then(function(data2){
    // data now { appetizers: [], entrees: [], sides: [] }
    console.log(data2);
    var entrees = data2.entrees

    $('.special-Box').append(specialItems(entrees,id));


  })
})
 






  