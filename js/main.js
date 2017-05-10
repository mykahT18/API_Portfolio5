function MySearch(){

	var input = document.getElementById('input').value;
	document.getElementById('results').innerHTML="";
	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + input,
		dataType: "json",
		success: function(data){
			console.log(data);
			for (var i = 0; i < data.items.length; i++) {
				results.innerHTML += '<h1> Title: ' + data.items[i].volumeInfo.title + '</h1>';
				results.innerHTML += '<p> Author: ' + data.items[i].volumeInfo.authors + '</p>';
				results.innerHTML += '<p> Description: ' + data.items[i].volumeInfo.description + '</p>';
			}
		},

		type: 'GET'
	});
}
document.getElementById('search').addEventListener('click', MySearch, false);



