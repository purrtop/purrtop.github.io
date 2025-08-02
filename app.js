var audio1 = document.getElementById("audio");
var button1 = document.getElementById("button");

function playAudio1() {
	if (audio1) {
		audio1.play();
	}
}

if (button1 && audio1) {
	button1.addEventListener('mouseover', playAudio1);
}

var audio2 = document.getElementById("audio2");
var button2 = document.getElementById("button");

function playAudio2() {
	if (audio2) {
		audio2.play();
	}
}

if (button2 && audio2) {
	button2.addEventListener('mouseout', playAudio2);
}
