document.getElementById("startOrStopImg").onclick = function() {
    var audio = document.getElementById("audio_play");
    if (audio.paused) audio.play();
    else audio.pause();
};
