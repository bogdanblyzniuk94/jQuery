$(document).ready(function () {
	$("#img").bind("click", function (event) {
		$(event.target).parent().css("text-align", "center");
		$(event.target).animate({
			width: $(event.target).width() * 4,
			height: $(event.target).height() * 4,
		}, 3000);
	});
});