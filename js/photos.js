	function changeImage(){
	var image = document.getElementById("image");
	
	if(image.src.match("1")){
		image.src = "7.JPG";
		
	} else if(image.src.match("2")){
		image.src = "3.JPG";
	} else if( image.src.match("3")){
		image.src = "4.JPG";
	} else if( image.src.match("4")){
		image.src = "5.JPG";
	} else if( image.src.match("5")){
		image.src = "6.JPG";
	} else if( image.src.match("6")){
		image.src = "7.JPG";
	} else if( image.src.match("7")){
		image.src = "9.JPG";
	} else if( image.src.match("9")){
		image.src = "10.JPG";
	} else {
		image.src = "1.JPG";
	}
}