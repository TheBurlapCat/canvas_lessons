var canvas = document.getElementById('rectangleCanvas');
var contextElement = canvas.getContext('2d');

contextElement.beginPath();
contextElement.rect(188, 50, 200, 100);
contextElement.fillStyle = 'orange';
contextElement.fill();
contextElement.lineWidth = 7;
contextElement.strokeStyle = 'blue';
contextElement.stroke();
