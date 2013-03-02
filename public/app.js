$(function() {

	$('#dropzone').click(function() {
		text = prompt("Send to printer:", "");
		if (text !== "") send(text);
	});
});

function send(text) {
		$.ajax({
			type: "POST",
			url: "/post",
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