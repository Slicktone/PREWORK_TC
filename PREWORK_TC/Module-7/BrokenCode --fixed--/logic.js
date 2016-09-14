//when button is clicked run random math function
$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})
//array holding all of the facts, each fact separated by quotes
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

//the following 3 functions will run the .css call when the corresponding id's are clicked.
//hope that made sense?
$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

//this function will grow the box
$("#boxGrow").on("click", function() {
	//increase/decrease the paramaters
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})