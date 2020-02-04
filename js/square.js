function incSize(event){
	var width = Number(event.target.style.width.substring(0, event.target.style.width.length - 2));
	event.target.style.width = (width + 5) + "px";
	
	$("<p>Mouse coordinates on click: x -  " + event.screenX + ", y - " + event.screenY + "</p>").insertAfter("div:last");
}

$(document).ready(function () {
	$(".square").bind("click", incSize);
	$(document).on("click", "p", function() {
		
	});
});