'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var traduccion = str;
	//Termina en AR, se le quitan las dos letras
	if (str.toLowerCase().endsWith('ar')) {
		traduccion = str.slice(0, -2);
	}
	//Empieza con Z, se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		traduccion += 'pe';
	}
	//>= 10 letras, se divide la palabra en dos con un "-" en medio
	var length = traduccion.length;
	if (length >= 10) {
		var firstHalf = traduccion.slice(0, Math.round(length / 2));
		var secondHalf = traduccion.slice(Math.round(length / 2));
		traduccion = firstHalf + '-' + secondHalf;
	}
	//Palindromo, se escribe alternando mayus y minus
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var length = str.length;
		var traduccion = '';
		var capitalize = true;

		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			traduccion += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return traduccion;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}
	return traduccion;
}