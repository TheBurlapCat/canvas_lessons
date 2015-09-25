var canvasElement = document.getElementById('lineCapCanvas');
var renderingContext = canvasElement.getContext('2d');


var render = function() {

		//butt line cap (top line)
	renderingContext.beginPath();
	renderingContext.moveTo(200, canvasElement.height / 2 - 50);
	renderingContext.lineTo(canvasElement.width - 200, canvasElement.height / 2 -50);
	renderingContext.lineWidth = 20;
	renderingContext.strokeStyle = '#0000ff';
	renderingContext.lineCap = 'butt';
	renderingContext.stroke();

		//round line cap (middle line)
	renderingContext.beginPath();
	renderingContext.moveTo(200, canvasElement.height / 2);
	renderingContext.lineTo(canvasElement.width - 200, canvasElement.height / 2);
	renderingContext.lineWidth = 20;
	renderingContext.strokeStyle = '#0000ff';
	renderingContext.lineCap = 'round';
	renderingContext.stroke();

		//square line cap (bottom line)
	renderingContext.beginPath();
	renderingContext.moveTo(200, canvasElement.height / 2 + 50);
	renderingContext.lineTo(canvasElement.width - 200, canvasElement.height / 2 +50);
	renderingContext.lineWidth = 20;
	renderingContext.strokeStyle = '#0000ff';
	renderingContext.lineCap = 'square';
	renderingContext.stroke();

};

render();