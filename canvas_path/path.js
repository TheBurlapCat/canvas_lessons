var canvas = document.getElementById('pathCanvas');
var contextElement = canvas.getContext('2d');

contextElement.beginPath();
contextElement.moveTo(100, 200);

//line 1
contextElement.lineTo(200, 160);

//quadratic curve
contextElement.quadraticCurveTo(230, 200, 250, 120);

//bezier curve
contextElement.bezierCurveTo(290, -40, 300, 200, 400, 150);

//line two
contextElement.lineTo(500, 90);

contextElement.lineWidth = 5;
contextElement.strokeStyle = 'blue';
contextElement.stroke();
