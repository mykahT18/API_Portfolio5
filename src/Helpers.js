export function googleBookApi(p){
	
	fetch("https://www.googleapis.com/books/v1/volumes?q=" + p)
		.then((data) => data.json())
	  	.then(function(data) {
	    	console.log(data);
	  //   	for (var i = 0; i < data.items.length; i++) {
			// 	console.log(data.items[i].volumeInfo.title) 
			// 	console.log(data.items[i].volumeInfo.authors);
			// 	console.log(data.items[i].volumeInfo.description);
			// }
	    })
	  	.catch(function(error) {
	    	console.log("REQUEST WAS BAD");
	  	});   
}
// $.ajax({
// 		url: "https://www.googleapis.com/books/v1/volumes?q=" + p,
// 		dataType: "json",
// 		success: function(data){
// 			console.log(data);
// 			for (var i = 0; i < data.items.length; i++) {
// 				results.innerHTML += '<h1> Title: ' + data.items[i].volumeInfo.title + '</h1>';
// 				results.innerHTML += '<p> Author: ' + data.items[i].volumeInfo.authors + '</p>';
// 				results.innerHTML += '<p> Description: ' + data.items[i].volumeInfo.description + '</p>';
// 			}
// 		},

// 		type: 'GET'
// 	});