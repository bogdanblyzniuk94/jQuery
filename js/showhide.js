function hideComments() {
	$("#comments-1").hide(1000, function(){ /* Справочник эффекты jQuery*/
		$("#hide").hide();
		$("#show").show();
	});
}

function showComments() {
	$("#comments-1").show(1000, function(){
		$("#hide").show();
		$("#show").hide();
	});
}

$(document).ready(function () {
	$("#hide").bind("click", hideComments);
	$("#show").bind("click", showComments);
});