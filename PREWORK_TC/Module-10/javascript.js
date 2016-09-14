
//This button should grow the box when clicked.
$("#box").click(function(){
	$("#button1").height("250px");
});

//This button should change the color of the box.
$("#box").click(function(){
	$("#button2").css("color", "blue");
});

//This button should fade the box when clicked.
$("#box").click(function(){
	$("#button3").fadeTo( "slow", 0.5, function() {

	});
});

//This button should reset the box to normal when clicked.
$("#box").click(function(){
	$("#button4").height("150px");
});