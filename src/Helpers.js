export function googleBookApi(p){
	var results;
	fetch("https://www.googleapis.com/books/v1/volumes?q=" + p)
		.then((data) => data.json())
	  	.then(function(data) {
	    	// console.log(data);
	    	for (var i = 0; i < data.items.length; i++) {
				// console.log(data.items[i].volumeInfo.title) 
				// console.log(data.items[i].volumeInfo.authors);	
			}
			results = data.items;
			return results;
	    })
	  	.catch(function(error) {
	    	console.log("REQUEST WAS BAD");
	  	});  
		
}
export function reviewsApi(value){
	fetch("http://idreambooks.com/api/books/reviews.json?q="+ value + "&key=c8d90c617ee44af8b4a1a11590fe4598a799a536")
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