$('#action').on('animationstart mozanimationstart webkitAnimationStart msanimationstart oAnimationStart',function() {
	$('p').html('animation started');
});

// animation paused
$('#action').on('mouseover',function() {
	$('p').html('animation paused');
});
// animation re-started
$('#action').on('mouseout',function() {
	$('p').html('animation re-started');
});
$('#action').on('animationEnd mozanimationEnd webkitAnimationEnd msanimationEnd oAnimationEnd',function() {
	$('p').html('animation ended');
});
var i = 0;
$('#action').on('animationiteration mozanimationiteration webkitAnimationIteration msanimationiteration oAnimationIteration',function() {
	i++;
	$('p').html('animation iteration='+ 1);
});

// Drag and Drop

function dropItem(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev){
	ev.preventDefault();
	var abc = ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(abc));
}

// canvas #1
function drawRectangle(){
	var canvas = document.getElementById('boxContainer1');
	var context =canvas.getContext('2d');
	context.fillstyle = "rgb(200,0,0)";
	context.fillRect (90,90,190,190);
	context.clearRect(130,130,110,110);
	context.strokeRect(150,150,70,70);
}
  
//canvas#2
function drawArc(){
	var canvas = document.getElementById('boxContainer2');
	var context =canvas.getContext('2d');
	context.beginPath();
	context.arc (75,75,50,0, Math.PI*2, true);
	context.moveTo (110,75);
	context.arc (75,75,35,0, Math.PI*2, false);
	context.stroke();
	context.fill();
}
//canvas#3
function drawGradient(){
	var canvas = document.getElementById('boxContainer3');
	var context =canvas.getContext('2d');
	var linGrad = context.createLinearGradient(0,0,100,0);
	linGrad.addColorStop(0, "orange");
	linGrad.addColorStop(0.5, "navy");
	linGrad.addColorStop(1, "lime");
    context.fillStyle = linGrad;
	context.fillRect(10,10,160,200);
}


function transDemo()  {
var canvas = document.getElementById('boxContainer4');
	var context =canvas.getContext('2d');
	context.fillStyle = "silver";
	context.fillRect(30,30,150,100);
	context.translate(50,25);
	context.fillStyle = "navy";
	context.fillRect(30,30,200,100);
}

function rotateDemo() {
	var canvas = document.getElementById('boxContainer5');
	var context =canvas.getContext('2d');
	context.strokeRect(10,10,120,120);
	context.rotate((Math.PI/180) * 25);
	context.fillStyle = "silver";
	context.fillRect(10,10,50,50);
}

function scaleDemo() {
	var canvas = document.getElementById('boxContainer6');
	var context =canvas.getContext('2d');
	context.fillStyle = "silver";
	context.fillRect(10,10,50,90);
	context.scale(3,3);
	context.fillStyle = "navy";
	context.fillRect(10,10,50,90);
}

var x = 0;
var y = 15;
var z = 5;

 function demoAnimation() {
 	animationMethod = window.mozRequestAnimationFrame ||
 	window.webkitRequestAnimationFrame ||
 	window.msRequestAnimationFrame ||
 	window.oRequestAnimationFrame;

 	animationMethod(demoAnimation);

 	x = (x + z);
 	if (x <= 0 || x >= 370 ) {
 		z = -z;
 	}
 	draw();
	}
 	function draw() {
 	var canvas = document.getElementById("boxContainer7");
	var context =canvas.getContext('2d');

	context.clearRect(0, 0, 500, 170);
	context.strokeStyle = "black";
	context.strokeRect(x, y,25,25);
 	}
 	demoAnimation();












