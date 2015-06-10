//when document is ready, this will run
$(function(){
//this will get the request for the cars and pass it a callback
	$.get("/cars", function(data){
//this will loop through the info in the cars variable
		for (var i = 0; i < data.length; i++) {
//this will add each car to a new list to the unordered list
			$('ul').append('<li>' + data[i] + '</li>');
		}
	})
});
