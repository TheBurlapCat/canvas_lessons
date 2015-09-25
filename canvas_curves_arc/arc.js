var canvas = document.getElementById('arcCanvas');
var contextElement = canvas.getContext('2d');

var x = arcCanvas.width / 2;
var y = arcCanvas.height / 2;
var radius = 75;
var startAngle = 1.1 * Math.PI;
var endAngle = 1.9 * Math.PI;
var counterCLockwise = false;

contextElement.beginPath();
contextElement.arc(x, y, radius, startAngle, endAngle, counterCLockwise);
contextElement.lineWidth = 15;

// line color
contextElement.strokeStyle = 'white';
contextElement.stroke();
