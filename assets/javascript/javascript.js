$(document).ready(function() {

	var topics = [ 
		"Superman", 
		"Hulk", 
		"Batman", 
		"Thor", 
		"Spider-man", 
		"Wolverine", 
		"Iron Man", 
		"Captain America",
		"Cyclops",
		"Wonder Woman",
		"Flash",
		"Green Arrow"];

	var newTopics = [];

	function createButton(arr) {
		for (var i = 0; i < arr.length; i++) {
			var newButton = $("<button type='button'>").addClass("gifButton btn btn-danger");
			newButton.append(arr[i]).appendTo(".buttonGroup");
		}	
		///////////////////////////////////////////////
		$(".gifButton").on("click", function() {
			$(".gifs").empty();
			var word = $(this).html();
			//console.log(this);
			var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + word + "&api_key=dc6zaTOxFJmzC&trending&limit=10&rating=y&rating=g&rating=pg&rating=pg-13"
			console.log(word);
			$.ajax({
		      	url: queryURL,
		      	method: "GET"
		    }).done(function(response) {
		    	for (var i = 0; i < response.data.length; i++) {
		    		var gifDiv = $("<div>").addClass("gifBlock");
		    		var rating = $("<p>").text("Rating: " + response.data[i].rating);
		    		
		    		var stop = response.data[i].images.fixed_height_still.url;

	
		    		var gifImg = "<img id='"+ i + "' class ='gifState' src='" + stop + "'>";
			    	gifDiv.append(rating);
		      		gifDiv.append(gifImg);
		      		$(".gifs").append(gifDiv);

		    	}
		    	/////////////////////////////////////////////
		    	var moving = false;
    			$(".gifState").on("click", function() {
					
					if (moving === false) {
						$(this).attr("src", response.data[this.id].images.fixed_height.url);
						//$("img[src='" + stop + "']").attr("src", go);
						moving = true;
					} else {
						moving = false;
						$(this).attr("src", response.data[this.id].images.fixed_height_still.url);
					}
					
				});
				/////////////////////////////////////////////
			
			});
		});
		/////////////////////////////////////////////////////
		
	}


	createButton(topics);



	$("#newButton").on("click", function() {
		var userInput = $("#userInput").val();
		console.log(userInput);
		if (topics.indexOf(userInput) === -1 && userInput.length > 0) {
			newTopics.push(userInput);
			topics.push(userInput);
			createButton(newTopics);
			newTopics = [];
			//console.log(newTopics);
		}
		return false;
	});

	

});