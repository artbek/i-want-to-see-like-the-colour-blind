function iWantToSeeLikeTheColourBlind(svg_data) {
	var s = document.getElementById('colourblind-styling');
	var x = document.getElementById('colourblind-filters');

	if (!s) {
		s = document.createElement('style');
		document.body.appendChild(s);
	}
	if (!x) {
		x = document.createElement('div');
		x.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
		x.innerHTML = svg_data;
		document.body.appendChild(x);
	}

	var l = [ "protanopia", "protanomaly", "deuteranopia", "deuteranomaly", "tritanopia", "tritanomaly", "achromatopsia", "achromatomaly" ];
	var p = '';
	for (var i in l)
		p += (parseInt(i)+1) + ': ' + l[i] + '; ';

	var c = parseInt(prompt('0: off; ' + p)) - 1;
	if (isNaN(c)) return;
	if (c >= l.length) return;
	if (c == -1) {
		s.innerHTML = 'body{-webkit-filter:none;-moz-filter:none;-ms-filter:none;-o-filter:none;filter:none;}';
		return;
	}
	c = l[c];
	if (document.getElementById(c))
		s.innerHTML = 'body{-webkit-filter:!!;-moz-filter:!!;-ms-filter:!!;-o-filter:!!;filter:!!;}'.replace(/!!/g,'url(#'+c+')');
	else
		s.innerHTML = 'body{-webkit-filter:none;-moz-filter:none;-ms-filter:none;-o-filter:none;filter:none;}';
}

