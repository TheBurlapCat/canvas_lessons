var canvasElement = document.getElementById('lineCanvas');
var renderingContext = canvasElement.getContext('2d');

var render = function() {

	renderingContext.strokeStyle = '#ffffff';
	renderingContext.beginPath();
	renderingContext.moveTo(100, 150);
	renderingContext.lineTo(450, 50);
	renderingContext.stroke();
};

render();
