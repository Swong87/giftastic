var topics = [ 
	"Pizza", 
	"Burgers", 
	"Nachos", 
	"Fried Chicken", 
	"Sushi", 
	"Ramen", 
	"Soup", 
	"Tacos",
	"BBQ",
	"Sandwiches",
	"Burritos",
	"Cake"];

var newTopics = [];

function createButton(arr) {
	for (var i = 0; i < arr.length; i++) {
		var newButton = $("<button>").addClass("gifButton btn btn-danger");
		newButton.append(arr[i]).appendTo(".buttonGroup");
	}
}

createButton(topics);

$(".gifButton").on("click", function() {
	var word = $(this).html();
	console.log(word);
});

$("#newButton").on("click", function() {
	var userInput = $("#userInput").val();
	console.log(userInput);
	if (topics.indexOf(userInput) === -1 && userInput.length > 0) {
		newTopics.push(userInput);
		topics.push(userInput);
		createButton(newTopics);
		newTopics = [];
		console.log(newTopics);
	}
});
