function resize(body, fontSize) {
	if (fontSize >= 2.0) if (body.scrollHeight > body.clientHeight) {
		fontSize -= 0.1;
		body.style.fontSize = fontSize + "vh";
		setTimeout(resize, 0, body, fontSize);
	}
}
function start() {
	var current = document.body.firstElementChild;
	if (location.hash) {
		current = document.getElementById(location.hash.substr(1));
	}
	current.classList.remove("hidden");
	for (var i = 0; i < current.children.length; ++i) {
		var child = current.children[i];
		console.log(child);
		if (child.classList.contains("body")) {
			setTimeout(resize, 0, child, 3.0);
		}
	}
	document.body.addEventListener("keydown", function(event) {
		var target;
		if (event.keyCode === 39) {
			target = current.nextElementSibling;
		} else if (event.keyCode === 37) {
			target = current.previousElementSibling;
		}
		if (target) {
			current.classList.add("hidden");
			target.classList.remove("hidden");
			current = target;
			location.hash = current.id;
			for (var i = 0; i < current.children.length; ++i) {
				var child = current.children[i];
				if (child.classList.contains("body")) {
					setTimeout(resize, 0, child, 3.0);
				}
			}
		}
	});
}
setTimeout(start, 0);
