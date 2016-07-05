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
