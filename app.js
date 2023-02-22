let song = document.getElementById("song");

let songTime = document.getElementById("songTime");

let skipButton = document.getElementById("skipButton");

let resetSong = document.getElementById("reset");

let playPause = document.getElementById("playPause")

let songCoverArt = document.getElementById("image")


//Play Stop Button - IT WORKS ALI
function playStop(){

    if(playButtonStopButton.classList.contains("fa-pause")){
        song.pause();
        playButtonStopButton.classList.remove("fa-pause");
        playButtonStopButton.classList.add("fa-play");
    }
    else{
        song.play();
        playButtonStopButton.classList.add("fa-pause");
        playButtonStopButton.classList.remove("fa-play");
    }
}

window.addEventListener('keydown', function(event){
    if (event.key === ' '){
        playStop();
    }
});

// Resets Song to Beginning / goes backwards
function reset() {
    song.currentTime = 0;
    
    
}

// Skips to next song (Not working yet)
// function skipSkip(){
//     alert("You Hit Skip");
// }
// skipButton.addEventListener("click", skipSkip);

// Keeps moving slider up to move with the song
if(song.play()){
    setInterval(()=> {
        songTime.value = song.currentTime;
    }, 650);
};

// Changes Play Button to Pause Button Etc
songTime.onchange = function(){
    
    song.play();
    song.currentTime = songTime.value;
    playButtonStopButton.classList.add("fa-pause");
    playButtonStopButton.classList.remove("fa-play")
    
    
}

// Change Duration via the slider
song.onloadedmetadata = function(){
    song.pause();
    songTime.max = song.duration;
    songTime.value = song.current;
    
    // if it's reset, set songTime to 0
    if(reset){
        songTime.value = song.current;
    }


}