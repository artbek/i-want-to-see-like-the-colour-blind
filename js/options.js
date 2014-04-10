document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);


function save_options() {
	localStorage["svg_data_file"] = document.getElementById("svg_data_file").value;

	var status = document.getElementById("status");
	status.innerHTML = "saving...";
	setTimeout(function() {
		status.innerHTML = "";
	}, 750);
}


function restore_options() {
	var svg_data_file = '';
	if (localStorage["svg_data_file"]) {
		var svg_data_file = localStorage["svg_data_file"];
	}
	document.getElementById("svg_data_file").value = svg_data_file;
}

