var request = new XMLHttpRequest();

request.onload = function(event) {
	if (this.status == 200) {
		var lines = this.responseText
		if (lines.length > 0) {
			lines = lines.split("\n");
		} else {
			lines = [];
		}
		console.debug(lines);
		if (lines.length > 0) {
			var element = document.createElement("div");
			element.setAttribute("class", "notice");
			for (var i = 0; i < lines.length; ++i) {
				element.appendChild(document.createTextNode(lines[i]));
				element.appendChild(document.createElement("br"));
			}
			document.body.appendChild(element);
		}
		console.debug(this.responseText);
	}
}

request.open("GET", "API.log", true);
request.send();
