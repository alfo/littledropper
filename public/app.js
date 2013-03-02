$(function() {

	$('#dropzone').click(function() {
		send('hello');
	});
});

function send(text) {
	$.ajax({
	  type: "POST",
	  url: "/post",
	  html: text
	});
}