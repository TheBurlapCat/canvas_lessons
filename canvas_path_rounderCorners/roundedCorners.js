var canvas = document.getElementById('roundedCornerPaths');
var contextElement = canvas.getContext('2d');

var rectWidth = 200;
var rectHeight = 100;
var rectX = 189;
var rectY = 50;
var cornerRadius = 50;

contextElement.beginPath();
contextElement.moveTo(rectX, rectY);
contextElement.lineTo(rectX + rectWidth - cornerRadius, rectY);
contextElement.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + cornerRadius, cornerRadius);
contextElement.lineTo(rectX + rectWidth, rectY + rectHeight);
contextElement.lineWidth = 5;
contextElement.stroke();
