
function copyText(evevnt, elemId) {
	var success = function () {
		evevnt.toElement.textContent = 'copied!';
	}
	var error = function () {
		alert('error');
	}
	/* Get the text field */
	var copiedText = document.getElementById(elemId).innerText;
	Clipboard.copy(copiedText, success, error);
}
