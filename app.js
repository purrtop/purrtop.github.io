var audio = document.getElementById("audio");
var img = document.getElementById("button");

function play() {
	if (audio) {
		audio.play();
	}
}

if (img && audio) {
	img.addEventListener('click', play);
	img.addEventListener('mouseover', play);
}
