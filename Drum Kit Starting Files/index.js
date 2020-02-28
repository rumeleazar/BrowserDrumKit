
//CRASH 
$(".w").css("background-image","url('images/crash.png')");
$(".w").on('click', function(){
	var crash = new Audio("sounds/crash.mp3");
	crash.play();
	$(".w").animate({opacity:0.5}).animate({opacity:1});
})

//KICK 
$(".a").css("background-image","url('images/kick.png')");
$(".a").on('click', function(){
	var kick = new Audio("sounds/kick-bass.mp3");
	kick.play();
	$(".a").animate({opacity:0.5}).animate({opacity:1});
})

//SNARE
$(".s").css("background-image","url('images/snare.png')");
$(".s").on('click', function(){
	var snare = new Audio("sounds/snare.mp3");
	snare.play();
	$(".s").animate({opacity:0.5}).animate({opacity:1});
})

//TOM1
$(".d").css("background-image","url('images/tom1.png')");
$(".d").on('click', function(){
	var tom1 = new Audio("sounds/tom-1.mp3");
	tom1.play();
	$(".d").animate({opacity:0.5}).animate({opacity:1});
})


//TOM2
$(".j").css("background-image","url('images/tom2.png')");
$(".j").on('click', function(){
	var tom2 = new Audio("sounds/tom-2.mp3");
	tom2.play();
	$(".j").animate({opacity:0.5}).animate({opacity:1});
})



//TOM3
$(".k").css("background-image","url('images/tom3.png')");
$(".k").on('click', function(){
	var tom3 = new Audio("sounds/tom-3.mp3");
	tom3.play();
	$(".k").animate({opacity:0.5}).animate({opacity:1});
})


//TOM4
$(".l").css("background-image","url('images/tom4.png')");
$(".l").on('click', function(){
	var tom4 = new Audio("sounds/tom-4.mp3");
	tom4.play();
	$(".l").animate({opacity:0.5}).animate({opacity:1});
})







//DOCUMENT
$(".drum").css("background-position", "center");
$(".drum").css("background-size", "130px 120px");
$(".drum").css("background-repeat", "no-repeat");


$(document).keypress(function(event) {
	if( event.key == 'w') {
		var crash = new Audio("sounds/crash.mp3");
		crash.play();
		$(".w").animate({opacity:0.5}).animate({opacity:1});
	}
	if( event.key == 'a') {
		var crash = new Audio("sounds/kick-bass.mp3");
		crash.play();
		$(".a").animate({opacity:0.5}).animate({opacity:1});
	}

	if( event.key == 's') {
		var crash = new Audio("sounds/snare.mp3");
		crash.play();
		$(".s").animate({opacity:0.5}).animate({opacity:1});
	}

	if( event.key == 'd') {
		var crash = new Audio("sounds/tom-1.mp3");
		crash.play();
		$(".d").animate({opacity:0.5}).animate({opacity:1});
	}

	if( event.key == 'j') {
		var crash = new Audio("sounds/tom-2.mp3");
		crash.play();
		$(".j").animate({opacity:0.5}).animate({opacity:1});
	}
	if( event.key == 'k') {
		var crash = new Audio("sounds/tom-3.mp3");
		crash.play();
		$(".k").animate({opacity:0.5}).animate({opacity:1});
	}
	if( event.key == 'l') {
		var crash = new Audio("sounds/tom-4.mp3");
		crash.play();
		$(".l").animate({opacity:0.5}).animate({opacity:1});
	}




});

