var canvasElement = document.getElementById('circleCanvas');
var renderingContext = canvasElement.getContext('2d');
console.dir(renderingContext);

renderingContext.strokeStyle = '#ffffff';
renderingContext.beginPath();
renderingContext.moveTo(100, 150);
renderingContext.lineTo(450, 50);
renderingContext.stroke();

