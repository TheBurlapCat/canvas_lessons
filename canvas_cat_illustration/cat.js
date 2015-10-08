var canvas = document.getElementById('catIllustration');
var contextElement = canvas.getContext('2d');

//cat eye right
var centerX = 200;
var centerY = 200;
var radius = 15;

contextElement.beginPath();
contextElement.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

contextElement.lineWidth = 5;
contextElement.strokeStyle = 'white';
contextElement.stroke();

//cat eye left
var centerX = 280;
var centerY = 200;
var radius = 15;

contextElement.beginPath();
contextElement.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

contextElement.lineWidth = 5;
contextElement.stroke();

//cat face
var centerX = 240;
var centerY = 220;
var radius = 90;

contextElement.beginPath();
contextElement.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
contextElement.lineWidth = 5;
contextElement.stroke();

//cat ear left
contextElement.beginPath();
contextElement.moveTo(160, 177);
contextElement.lineTo(170, 75);
contextElement.lineTo(230, 130);
contextElement.lineJoin = 'round';
contextElement.lineWidth = 5;
contextElement.stroke();

//cat ear right
contextElement.beginPath();
contextElement.moveTo(250, 130);
contextElement.lineTo(310, 75);
contextElement.lineTo(320, 177);
contextElement.lineJoin = 'round';
contextElement.stroke();

//cat nose
contextElement.beginPath();
contextElement.moveTo(220, 230);
contextElement.lineTo(260, 231);
contextElement.lineTo(240, 250);
contextElement.lineTo(220, 230);
contextElement.lineJoin = 'round';
contextElement.lineCap = 'round';
contextElement.stroke();

//cat body top
contextElement.beginPath();
contextElement.moveTo(305, 282)
contextElement.bezierCurveTo(350, 280, 500, 200, 650, 500);
contextElement.lineWidth = 5;
contextElement.stroke();

//cat body bottom
contextElement.beginPath();
contextElement.moveTo(185, 291);
contextElement.bezierCurveTo(180, 420, 180, 600, 650, 500);
contextElement.lineWidth = 5;
contextElement.stroke();

//cat mouth
contextElement.beginPath();
contextElement.moveTo(240, 250);
contextElement.lineTo(210, 270);
contextElement.lineWidth = 5;
contextElement.stroke();
//cat mouth
contextElement.beginPath();
contextElement.moveTo(240, 250);
contextElement.lineTo(270, 270);
contextElement.stroke();

//Wiskers Left
contextElement.beginPath();
contextElement.moveTo(200, 240);
contextElement.lineTo(100, 200);
contextElement.lineWidth = 2;
contextElement.stroke();

contextElement.beginPath();
contextElement.moveTo(180, 250);
contextElement.lineTo(80, 250);
contextElement.stroke();

contextElement.beginPath();
contextElement.moveTo(200, 260);
contextElement.lineTo(100, 280);
contextElement.stroke();

//Wiskers Right
contextElement.beginPath();
contextElement.moveTo(280, 240);
contextElement.lineTo(380, 200);
contextElement.stroke();

contextElement.beginPath();
contextElement.moveTo(300, 250);
contextElement.lineTo(400, 250);
contextElement.stroke();

contextElement.beginPath();
contextElement.moveTo(280, 260);
contextElement.lineTo(380, 280);
contextElement.stroke();

//Tail
contextElement.beginPath();
contextElement.moveTo(649, 500);
contextElement.bezierCurveTo(790, 420, 650, 280, 780, 100);
contextElement.lineWidth = 5;
contextElement.lineCap = 'round';
contextElement.stroke();

//Front Left Leg
contextElement.beginPath();
contextElement.moveTo(238, 480);
contextElement.bezierCurveTo(270, 550, 300, 600, 230, 680);
contextElement.lineWidth = 5;
contextElement.lineCap = 'round';
contextElement.stroke();

//Front Right Leg
contextElement.beginPath();
contextElement.moveTo(310, 450);
contextElement.bezierCurveTo(342, 550, 362, 600, 302, 680);
contextElement.lineWidth = 5;
contextElement.lineCap = 'round';
contextElement.stroke();

//Back Left Leg
contextElement.beginPath();
contextElement.moveTo(470, 527);
contextElement.bezierCurveTo(500, 550, 590, 600, 520, 680);
contextElement.lineWidth = 5;
contextElement.lineCap = 'round';
contextElement.stroke();

//Back Right Leg
contextElement.beginPath();
contextElement.moveTo(500, 400);
contextElement.bezierCurveTo(400, 460, 662, 600, 600, 680);
contextElement.lineWidth = 5;
contextElement.lineCap = 'round';
contextElement.stroke();
