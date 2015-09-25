var canvas = document.getElementById('customShapesCanvas');
var contextElement = canvas.getContext('2d');

// begin custom shape
contextElement.beginPath();
contextElement.moveTo(170, 80);
contextElement.bezierCurveTo(130, 100, 130, 150, 230, 150);
contextElement.bezierCurveTo(250, 180, 320, 180, 340, 150);
contextElement.bezierCurveTo(420, 150, 420, 120, 390, 100);
contextElement.bezierCurveTo(430, 40, 370, 30, 340, 50);
contextElement.bezierCurveTo(320, 5, 250, 20, 250, 50);
contextElement.bezierCurveTo(200, 5, 150, 20, 170, 80);

// complete custom shape
contextElement.closePath();
contextElement.lineWidth = 5;
contextElement.strokeStyle = 'red';
contextElement.stroke();







