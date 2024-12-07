const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTimeDisplay = document.getElementById('currTime');
const durTimeDisplay = document.getElementById('durTime');
const songListContainer = document.getElementById('song-list');

// List of songs (Title, Filename, Image Filename)
const songs = [
  { title: 'Ukulele', file: 'itns.mp3', image: 'ukulele.jpg' },
  { title: 'Summer', file: 'summer.mp3', image: 'summer.jpg' },
  { title: 'Hey', file: 'hey.mp3', image: 'hey.jpg' }
];

let songIndex = 0;
let isPlaying = false;

// Load a song
function loadSong(song) {
  title.innerText = song.title;
  audio.src = `music/${song.file}`; // Ensure correct relative path to audio file
  console.log('Audio source set to:', audio.src); // Debugging line
  cover.src = `images/${song.image}`;
  updateTimeDisplay();
}

// Play the song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  audio.play();
  isPlaying = true;
}

// Pause the song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  audio.pause();
  isPlaying = false;
}

// Next song
function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

// Previous song
function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  // Update current time
  let min = Math.floor(currentTime / 60);
  let sec = Math.floor(currentTime % 60);
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;
  currTimeDisplay.innerText = `${min}:${sec}`;

  // Update total time
  let durMin = Math.floor(duration / 60);
  let durSec = Math.floor(duration % 60);
  durMin = durMin < 10 ? '0' + durMin : durMin;
  durSec = durSec < 10 ? '0' + durSec : durSec;
  durTimeDisplay.innerText = `${durMin}:${durSec}`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Create dynamic song list
function createSongList() {
  songs.forEach((song, index) => {
    const songItem = document.createElement('div');
    songItem.classList.add('song-item');
    songItem.innerHTML = `<p>${song.title}</p>`;
    songItem.addEventListener('click', () => {
      songIndex = index;
      loadSong(song);
      playSong();
    });
    songListContainer.appendChild(songItem);
  });
}

// Initialize song list and load the first song
createSongList();
loadSong(songs[songIndex]);

// Event Listeners
playBtn.addEventListener('click', () => isPlaying ? pauseSong() : playSong());
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);
