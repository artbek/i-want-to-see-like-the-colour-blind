function iWantToSeeLikeTheColourBlind(svg_data) {

	var s = document.getElementById('colourblind-styling');
	var x = document.getElementById('colourblind-filters');

	if (!s) {
		s = document.createElement('style');
		s.setAttribute('id', 'colourblind-styling');
		document.body.appendChild(s);
	}
	if (!x) {
		x = document.createElement('div');
		x.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
		x.setAttribute('id', 'colourblind-filters');
		x.innerHTML = svg_data;
		document.body.appendChild(x);
	}

	var l = [
		"normal",
		"protanopia",
		"protanomaly",
		"deuteranopia",
		"deuteranomaly",
		"tritanopia",
		"tritanomaly",
		"achromatopsia",
		"achromatomaly"
	];

	var p = '';
	for (var i in l) {
		p += '<button style="margin: 3px; padding: 5px" id="mode_' + i + '">' + l[i] + '</button><br />';
	}

	var prompt_div = document.createElement('div');
	prompt_div.setAttribute('id', 'color-blind-mode-switcher');
	prompt_div.setAttribute(
		'style',
		'position: fixed; top: 20px; right: 20px; z-index: 99999;' +
			'padding: 10px; background: #f9f9f9; border: 1px solid #bbbbbb'
	);
	prompt_div.innerHTML = p;
	document.body.appendChild(prompt_div);

	prompt_div.addEventListener("click", function(e) {
		e.stopPropagation();
		mode_name = e.srcElement.innerText;
		var s = document.getElementById('colourblind-styling');
		if (document.getElementById(mode_name)) {
			var html = 'body{-webkit-filter:!!;-moz-filter:!!;-ms-filter:!!;-o-filter:!!;filter:!!;}'
			s.innerHTML = html.replace(/!!/g,'url(#' + mode_name + ')');
		} else {
			s.innerHTML = 'body{-webkit-filter:none;-moz-filter:none;-ms-filter:none;-o-filter:none;filter:none;}';
		}
	});

	document.body.addEventListener("click", function() {
		var switcher = document.getElementById("color-blind-mode-switcher");
		if (switcher) {
			switcher.parentNode.removeChild(switcher);
		}
	});

}

