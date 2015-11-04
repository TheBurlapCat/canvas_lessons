var canvas = document.getElementById('catIllustration');
var renderingContext = canvas.getContext('2d');

var drawCat = function(context, x, y, scale){
	context.save();
	context.translate(x, y);
	context.scale(scale, scale);
	context.translate(-400, -400);


	//cat eye right
	var centerX = 200;
	var centerY = 200;
	var radius = 15;

	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

	context.lineWidth = 5;
	context.strokeStyle = 'white';
	context.stroke();

	//cat eye left
	var centerX = 280;
	var centerY = 200;
	var radius = 15;

	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

	context.lineWidth = 5;
	context.stroke();

	//cat face
	var centerX = 240;
	var centerY = 220;
	var radius = 90;

	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	context.lineWidth = 5;
	context.stroke();

	//cat ear left
	context.beginPath();
	context.moveTo(160, 177);
	context.lineTo(170, 75);
	context.lineTo(230, 130);
	context.lineJoin = 'round';
	context.lineWidth = 5;
	context.stroke();

	//cat ear right
	context.beginPath();
	context.moveTo(250, 130);
	context.lineTo(310, 75);
	context.lineTo(320, 177);
	context.lineJoin = 'round';
	context.stroke();

	//cat nose
	context.beginPath();
	context.moveTo(220, 230);
	context.lineTo(260, 231);
	context.lineTo(240, 250);
	context.lineTo(220, 230);
	context.lineJoin = 'round';
	context.lineCap = 'round';
	context.stroke();

	//cat body top
	context.beginPath();
	context.moveTo(305, 282)
	context.bezierCurveTo(350, 280, 500, 200, 650, 500);
	context.lineWidth = 5;
	context.stroke();

	//cat body bottom
	context.beginPath();
	context.moveTo(185, 291);
	context.bezierCurveTo(180, 420, 180, 600, 650, 500);
	context.lineWidth = 5;
	context.stroke();

	//cat mouth
	context.beginPath();
	context.moveTo(240, 250);
	context.lineTo(210, 270);
	context.lineWidth = 5;
	context.stroke();
	//cat mouth
	context.beginPath();
	context.moveTo(240, 250);
	context.lineTo(270, 270);
	context.stroke();

	//Wiskers Left
	context.beginPath();
	context.moveTo(200, 240);
	context.lineTo(100, 200);
	context.lineWidth = 2;
	context.stroke();

	context.beginPath();
	context.moveTo(180, 250);
	context.lineTo(80, 250);
	context.stroke();

	context.beginPath();
	context.moveTo(200, 260);
	context.lineTo(100, 280);
	context.stroke();

	//Wiskers Right
	context.beginPath();
	context.moveTo(280, 240);
	context.lineTo(380, 200);
	context.stroke();

	context.beginPath();
	context.moveTo(300, 250);
	context.lineTo(400, 250);
	context.stroke();

	context.beginPath();
	context.moveTo(280, 260);
	context.lineTo(380, 280);
	context.stroke();

	//Tail
	context.beginPath();
	context.moveTo(649, 500);
	context.bezierCurveTo(790, 420, 650, 280, 780, 100);
	context.lineWidth = 5;
	context.lineCap = 'round';
	context.stroke();

	//Front Left Leg
	context.beginPath();
	context.moveTo(238, 480);
	context.bezierCurveTo(270, 550, 300, 600, 230, 680);
	context.lineWidth = 5;
	context.lineCap = 'round';
	context.stroke();

	//Front Right Leg
	context.beginPath();
	context.moveTo(310, 450);
	context.bezierCurveTo(342, 550, 362, 600, 302, 680);
	context.lineWidth = 5;
	context.lineCap = 'round';
	context.stroke();

	//Back Left Leg
	context.beginPath();
	context.moveTo(470, 527);
	context.bezierCurveTo(500, 550, 590, 600, 520, 680);
	context.lineWidth = 5;
	context.lineCap = 'round';
	context.stroke();

	//Back Right Leg
	context.beginPath();
	context.moveTo(500, 400);
	context.bezierCurveTo(400, 460, 662, 600, 600, 680);
	context.lineWidth = 5;
	context.lineCap = 'round';
	context.stroke();

	context.restore();

	console.log("MEOW");
};


drawCat(renderingContext, 100, 100, 0.25);
drawCat(renderingContext, 300, 300, 0.35);
drawCat(renderingContext, 500, 700, 0.45);
drawCat(renderingContext, 100, 500, 0.15);
drawCat(renderingContext, 300, 700, 0.05);
drawCat(renderingContext, 700, 100, 0.10);
drawCat(renderingContext, 650, 500, 0.40);

