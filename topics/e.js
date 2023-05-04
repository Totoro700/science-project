//icon
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = '../resc/icon.webp';

let nb_stops = 10; // 10 color stops should be enough
let dir = "left"; // left, right, top, bottom

function SetupRainbow() {
	var rainbowStr = GetRainbowString(nb_stops, 80, 50);
	var oppositeDir = (dir==="left"?"right":(dir==="right"?"left":(dir==="top"?"bottom":"top")));
	var css = '#title {\
	background-clip: text;\
	color: transparent;\
	-webkit-background-clip: text;\
	-webkit-text-fill-color: transparent;\
	background-image: -webkit-linear-gradient(' + dir + ',' + rainbowStr + '); \
	background-image: linear-gradient(to ' + oppositeDir + ',' + rainbowStr + ') \
	}'

	var style = document.createElement("style");
	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	document.head.appendChild(style);
}

// function that generate the rainbow string

function GetRainbowString(nbStops, saturation, luminosity) {
	let gap = 360 / nbStops,
	colors = [];
	for (let i = 0; i < nbStops; i++) {
		colors.push("hsl(" + (i * gap) + "," + saturation + "%," + luminosity + "%)");
	}
	return colors.join();
}

//var css = '#home {animation-name:test; animation-duration:4s; animation-iteration-count:infinite; } @keyframes test{ 0%{color:#ff0000} 20%{color:#00ff00} 40%{color:#ffff00} 60%{color:#0000ff} 80%{color:#00ffff} 100%{color:#ff0000}', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); style.type = 'text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style);

window.addEventListener("load", function() {
	SetupRainbow();
});