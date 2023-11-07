var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});



document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("It works");

});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("It works even more");

});

document.querySelector("#slower").addEventListener("click", function() {
	var currentPlayback = video.playbackRate;
	video.playbackRate = currentPlayback - 0.1;
	console.log("sloww");
});

document.querySelector("#faster").addEventListener("click", function() {
	var currentPlayback = video.playbackRate;
	video.playbackRate = currentPlayback + 0.1;
	console.log("faast");
});

document.querySelector("#skip").addEventListener("click", function() {
	var currentTime = video.currentTime;
	console.log(currentTime);

	if(currentTime + 10 < video.duration){
		currentTime += 10;
	} else {
		currentTime = 0;
	}
	video.currentTime = currentTime;

	console.log(video.currentTime);
	console.log("skip to my loo");
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	} else{
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

