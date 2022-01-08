document.getElementById("startOrStopImg").onclick = function() {
    var audio = document.getElementById("audio_play");
    if (audio.paused) audio.play();
    else audio.pause();
};

document.getElementById("startOrStopImg2").onclick = function() {
    var audio = document.getElementById("audio_play2");
    if (audio.paused) audio.play();
    else audio.pause();
};
