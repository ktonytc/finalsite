	function changeImage(){
	var image = document.getElementById("image");
	
	if (image.getAttribute('src')=="1.JPG") {
        image.src = "2.JPG";
	} else if (image.getAttribute('src')=="2.JPG") {
        image.src = "3.JPG";
	} else if (image.getAttribute('src')=="3.JPG") {
        image.src = "4.JPG";
	} else if (image.getAttribute('src')=="4.JPG") {
        image.src = "5.JPG";
	} else if (image.getAttribute('src')=="5.JPG") {
        image.src = "6.JPG";
	} else if (image.getAttribute('src')=="6.JPG") {
        image.src = "7.JPG";
	} else if (image.getAttribute('src')=="7.JPG") {
        image.src = "8.JPG";
	} else if (image.getAttribute('src')=="8.JPG") {
        image.src = "9.JPG";
	} else if (image.getAttribute('src')=="9.JPG") {
        image.src = "10.JPG";
	} else {
		image.src = "1.JPG";
	}
}