chrome.contextMenus.create({
	title: "I want to see like the colour blind",
	contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function onClickHandler(info, tab) {
	chrome.tabs.executeScript(tab.id, {file: "js/content_script.js"});
});

