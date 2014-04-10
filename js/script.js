chrome.contextMenus.create({
	title: "I want to see like the colour blind",
	contexts: ["all"]
});


chrome.contextMenus.onClicked.addListener(function onClickHandler(info, tab) {

	if (localStorage["svg_data_file"]) {

		var xhr = new XMLHttpRequest();
		xhr.open("GET", localStorage["svg_data_file"], true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				// strip all the headers, we want only content starting with "<svg ..."
				svg_data = xhr.responseText.match(/<svg[\s\S]*/);
				if (svg_data) {
					// no new lines, please
					svg_data = svg_data[0].replace(/[\r\n]/g, " ");
					chrome.tabs.executeScript(tab.id, { file:	"js/content_script.js" }, function() {
						chrome.tabs.executeScript(tab.id, {
							code:	"iWantToSeeLikeTheColourBlind('" + svg_data + "')"
						});
					});
				}
			}
		}
		xhr.send();

	} else {

		var svg_data = '<svg id="colorblind-filters" width="0" height="0"> <defs> <filter id="protanopia"> <feColorMatrix type="matrix" values="0.567,0.433,0,0,0  0.558,0.442,0,0,0  0 0.242,0.758,0,0  0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="protanomaly"> <feColorMatrix type="matrix" values="0.817,0.183,0,0,0  0.333,0.667,0,0,0  0,0.125,0.875,0,0  0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="deuteranopia"> <feColorMatrix type="matrix" values="0.625,0.375,0,0,0  0.7,0.3,0,0,0  0,0.3,0.7,0,0  0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="deuteranomaly"> <feColorMatrix type="matrix" values="0.8,0.2,0,0,0  0.258,0.742,0,0,0  0,0.142,0.858,0,0  0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="tritanopia"> <feColorMatrix type="matrix" values="0.95,0.05,0,0,0  0,0.433,0.567,0,0  0,0.475,0.525,0,0  0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="tritanomaly"> <feColorMatrix type="matrix" values="0.967,0.033,0,0,0  0,0.733,0.267,0,0  0,0.183,0.817,0,0  0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="achromatopsia"> <feColorMatrix type="matrix" values="0.299,0.587,0.114,0,0  0.299,0.587,0.114,0,0  0.299,0.587,0.114,0,0  0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="achromatomaly"> <feColorMatrix type="matrix" values="0.618,0.320,0.062,0,0  0.163,0.775,0.062,0,0  0.163,0.320,0.516,0,0  0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';

		chrome.tabs.executeScript(tab.id, { file:	"js/content_script.js" }, function() {
			chrome.tabs.executeScript(tab.id, {
				code:	"iWantToSeeLikeTheColourBlind('" + svg_data + "')"
			});
		});

	}

});

