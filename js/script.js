chrome.contextMenus.create({
	title: "I want to see like the colour blind",
	contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function onClickHandler(info, tab) {

	if (! localStorage["content_script_js"]) {

		chrome.tabs.executeScript(tab.id, {
			file:	"js/content_script.js"
		});

	} else {

		var xhr = new XMLHttpRequest();
		xhr.open("GET", localStorage["content_script_js"], true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				var content_script_code = xhr.responseText;
				content_script_code = content_script_code.replace(/^javascript:/, "");
				chrome.tabs.executeScript(tab.id, {
					code: content_script_code
				});
			}
		}
		xhr.send();

	}

});

