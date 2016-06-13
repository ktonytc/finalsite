	function changeImage(){
	var image = document.getElementById("image");
	
	if(image.src.match("1")){
		image.src = "2.jpg";
		
	} else if(image.src.match("2")){
		image.src = "3.jpg";
	} else if( image.src.match("3")){
		image.src = "4.jpg";
	} else if( image.src.match("4")){
		image.src = "5.jpg";
	} else if( image.src.match("5")){
		image.src = "6.jpg";
	} else if( image.src.match("6")){
		image.src = "7.jpg";
	} else if( image.src.match("7")){
		image.src = "8.jpg";
	} else if( image.src.match("8")){
		image.src = "9.jpg";
	} else if( image.src.match("9")){
		image.src = "10.jpg";
	} else {
		image.src = "1.jpg";
	}
}