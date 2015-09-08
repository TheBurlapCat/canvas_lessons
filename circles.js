var canvasElement = document.getElementById('circleCanvas');
var renderingContext = canvasElement.getContext('2d');
console.dir(renderingContext);

var position = {
	x: 0,
	y: 200
};

var render = function() {

	window.requestAnimationFrame( render );

	renderingContext.clearRect(0,0,800,400);
	position.x += 10;
	renderingContext.strokeStyle = '#ffffff';
	renderingContext.beginPath();
	renderingContext.moveTo(100, 150);
	renderingContext.lineTo(position.x, position.y);
	renderingContext.stroke();
};

render();
