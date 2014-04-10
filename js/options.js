document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);


function save_options() {
	localStorage["content_script_js"] = document.getElementById("content_script_js").value;

	var status = document.getElementById("status");
	status.innerHTML = "saving...";
	setTimeout(function() {
		status.innerHTML = "";
	}, 750);
}


function restore_options() {
	var content_script_js = localStorage["content_script_js"];
	document.getElementById("content_script_js").value = content_script_js;
}

