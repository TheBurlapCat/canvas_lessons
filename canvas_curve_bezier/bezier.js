var canvas = document.getElementById('bezierCanvas');
var contextElement = canvas.getContext('2d');

contextElement.beginPath();
contextElement.moveTo(188, 130);
contextElement.bezierCurveTo(140, 10, 388, 10, 388, 170);
contextElement.lineWidth = 10;

// line color
contextElement.strokeStyle = 'white';
contextElement.stroke();
