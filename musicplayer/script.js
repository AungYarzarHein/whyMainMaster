
const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");


// song title
const songs = ["Hum_Dum","pushpa","stay"];
let currentSongIndex = 2;

loadSong(songs[currentSongIndex]);

function loadSong(song){
    title.innerHTML = song;
    cover.src = `images/${song}.png`;
    audio.src = `musicAudio/${song}.mp3`;
}

function playSong(){
  musicContainer.classList.add("play");
  playBtn.innerHTML = "//";

  audio.play();

}

function pauseSong(){
    musicContainer.classList.remove("play");
    playBtn.innerHTML = "||";
    audio.pause();
}

function prevSong(){
 currentSongIndex-- ;
 if(currentSongIndex < 0){
    currentSongIndex = songs.length -1 ;
 }
 loadSong(songs[currentSongIndex]);
 playSong();
};

function nextSong(){
currentSongIndex++ ;
if(currentSongIndex > songs.length-1){
    currentSongIndex = 0;
}
loadSong(songs[currentSongIndex]);
playSong();
};

function updateProgress(e){
 const {duration,currentTime} = e.srcElement ;
 const progressPersent = (currentTime/duration) * 100 ;
 progress.style.width =    `${progressPersent}%` ;
}

function setProgress(e){
    const width = this.clientWidth ;
    const clickX = e.offsetX ;
    const duration = audio.duration ;
    audio.currentTime = (clickX/width) * duration ;
}

// event
playBtn.addEventListener("click",()=>{
    const isPlaying = musicContainer.classList.contains("play");
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
});

prevBtn.addEventListener("click",prevSong);
nextBtn.addEventListener("click",nextSong);

audio.addEventListener("timeupdate",updateProgress);
progressContainer.addEventListener("click",setProgress);
audio.addEventListener("ended",nextSong)
