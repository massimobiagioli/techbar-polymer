$(function() {
	var element = new HelloElement('valore iniziale');
	$('#placeholder').append(element);
	element.dummy = "nuovo valore";
	$('#placeholder').empty();
});