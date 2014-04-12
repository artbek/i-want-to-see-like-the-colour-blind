function iWantToSeeLikeTheColourBlind(svg_data) {

	/* SVG SETUP */

	if (! document.getElementById('colourblind-styling')) {
		var s = document.createElement('style');
		s.setAttribute('id', 'colourblind-styling');
		document.body.appendChild(s);
	}

	if (! document.getElementById('colourblind-filters')) {
		var x = document.createElement('div');
		x.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
		x.setAttribute('id', 'colourblind-filters');
		x.innerHTML = svg_data;
		document.body.appendChild(x);
	}


	/* POPUP CSS */

	var popup_css = '' +
		' .colour_blind_popup_button { ' +
		'    margin: 3px; ' +
		'    padding: 5px; ' +
		' } ' +

		' #color_blind_popup { ' +
		'   position: fixed; ' +
		'   top: 20px; ' +
		'   right: 20px; ' +
		'   z-index: 99999; ' +
		'   padding: 10px; ' +
		'   background: #f9f9f9; ' +
		'   border: 1px solid #bbbbbb; ' +
		' } ';

	if (! document.getElementById('colourblind-popup-styling')) {
		colour_blind_popup_css = document.createElement('style');
		colour_blind_popup_css.type = 'text/css';
		colour_blind_popup_css.setAttribute('id', 'colourblind-popup-styling');
		colour_blind_popup_css.innerText = popup_css;
		document.head.appendChild(colour_blind_popup_css);
	}


	/* POPUP HTML */

	var colour_perception_modes = [
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

	if (! document.getElementById('color_blind_popup')) {
		var popup_html = '';

		for (var i in colour_perception_modes) {
			popup_html += '<button class="colour_blind_popup_button" id="mode_' + i + '">';
			popup_html += colour_perception_modes[i];
			popup_html += '</button><br />';
		}

		var prompt_div = document.createElement('div');
		prompt_div.setAttribute('id', 'color_blind_popup');
		prompt_div.innerHTML = popup_html;
		document.body.appendChild(prompt_div);
	}


	/* BUTTON CLICK - SWITCH MODE */

	var normal_mode_css = '' +
		' body{ ' +
		'   -webkit-filter:none; ' +
		'   -moz-filter:none; ' +
		'   -ms-filter:none; ' +
		'   -o-filter:none; ' +
		'   filter:none; ' +
		' } ';

	var svg_css_template = '' +
		' body{ ' +
		'   -webkit-filter:!!; ' +
		'   -moz-filter:!!; ' +
		'   -ms-filter:!!; ' +
		'   -o-filter:!!; ' +
		'   filter:!!; ' +
		' } ';

	prompt_div.addEventListener("click", function(e) {
		e.stopPropagation();
		var mode_name = e.srcElement.innerText;
		var s = document.getElementById('colourblind-styling');
		if (document.getElementById(mode_name)) {
			var html = svg_css_template;
			s.innerHTML = html.replace(/!!/g,'url(#' + mode_name + ')');
		} else {
			s.innerHTML = normal_mode_css;
		}
	});


	/* HIDE POPUP */

	document.body.addEventListener("click", function() {
		var switcher = document.getElementById("color_blind_popup");
		if (switcher) {
			switcher.parentNode.removeChild(switcher);
		}
	});

}

