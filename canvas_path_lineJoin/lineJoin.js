var canvas = document.getElementById('lineJoinCanvas');
var contextElement = canvas.getContext('2d');

// set line width for all lines
contextElement.lineWidth = 25;

// miter line join (left)
contextElement.beginPath();
contextElement.moveTo(99, 150);
contextElement.lineTo(149, 50);
contextElement.lineTo(199, 150);
contextElement.lineJoin = 'miter';
contextElement.stroke();

// round line join (middle)
contextElement.beginPath();
contextElement.moveTo(239, 150);
contextElement.lineTo(289, 50);
contextElement.lineTo(339, 150);
contextElement.lineJoin = 'round';
contextElement.stroke();

// bevel line join (right)
contextElement.beginPath();
contextElement.moveTo(379, 150);
contextElement.lineTo(429, 50);
contextElement.lineTo(479, 150);
contextElement.lineJoin = 'bevel';
contextElement.stroke();
