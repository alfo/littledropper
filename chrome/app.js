$(function() {

	$('#send').click(function() {
		send($('#text').val());
	});
});

function send(text) {
	$.ajax({
		type: "POST",
		url: "http://localhost:4567/post",
		data: {
			text: text
		},
		cache: false,
		complete: function(jqXHR, textStatus) {
			switch (jqXHR.status) {
				case 200:
					alert("Sent to Printer");
					break;
				default:
					alert("Something went wrong.");
			}
		}
	});
}