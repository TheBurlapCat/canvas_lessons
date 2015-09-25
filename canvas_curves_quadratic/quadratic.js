var canvas = document.getElementById('quadraticCanvas');
var contextElement = canvas.getContext('2d');

contextElement.beginPath();
contextElement.moveTo(188, 150);
contextElement.quadraticCurveTo(288, 0, 388, 150);
contextElement.lineWidth = 10;

// line color
contextElement.strokeStyle = 'white';
contextElement.stroke();
