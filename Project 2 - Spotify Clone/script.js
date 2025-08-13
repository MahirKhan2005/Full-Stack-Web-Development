let currentSong = new Audio()
let currentSongIndex

// Timing in MM:SS format
function formatTime(seconds) {
     if (isNaN(seconds) || seconds === Infinity) return "0:00";
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) secs = "0" + secs;
    return `${mins}:${secs}`;
}
// Fetch the songs
async function fetchSongs() {
    let fetch_songs = await fetch('songs')
    let response = await fetch_songs.text()
    let div = document.createElement("div")
    let songs = []
    div.innerHTML = response
    let as = div.getElementsByTagName('a')
    for (let i = 0; i < as.length; i++) {
        const element = as[i].href;
        if (as[i].href.endsWith('.mp3')) {
            songs.push(element)
        }
    }
    currentSong.src = songs[0]
    currentSongIndex = 0
    return songs;
}

async function main() {

    // Displaying songs
    let songs = await fetchSongs()
    for (let i = 0; i < songs.length; i++) {
        const element = songs[i];
        let song = document.createElement('li')
        let songName = element.slice(element.indexOf('songs'), element.indexOf('.mp3'))
        songName = songName.replaceAll('songs/', '').replaceAll('%20', " ")
        song.innerHTML = `<div>
                            <img class="invert" src="img/music.svg" alt="music">
                            <div class="song-title">${songName}</div>
                        </div>
                        <div>
                            <div style="font-size:12px;white-space:nowrap;">Play Now</div>
                            <img class="invert" src="img/play-song.svg" alt="play-song">
                        </div>`
        document.body.querySelector('.songs').append(song)
        document.querySelector('.song-name').textContent = songs[0].slice(element.indexOf('songs'), element.indexOf('.mp3')).replaceAll('%20', " ").replace('.mp3', '').replace('songs/', '')
        // Click to play functionality
        song.addEventListener('click', async () => {
            currentSong.src = element
            currentSong.play()
            document.querySelector('.play').src = 'img/pause-stroke-rounded.svg'
            document.querySelector('.song-name').textContent = songName
            currentSongIndex = songs.indexOf(currentSong.src)
        })
    }
    // Play/Pause functionality
    document.querySelector('.play').addEventListener('click', async () => {
        if (currentSong.paused) {
            document.querySelector('.play').src = 'img/pause-stroke-rounded.svg'
            currentSong.play()
        }
        else {
            document.querySelector('.play').src = 'img/play-stroke-rounded.svg'
            currentSong.pause()
        }
    })
    // Next/Previous Functionality
    document.querySelector('.previous').addEventListener('click', () => {
        if (currentSongIndex > 0) {
            currentSongIndex -= 1
            currentSong.src = songs[currentSongIndex]
            currentSong.play()
            document.querySelector('.play').src = 'img/pause-stroke-rounded.svg'
            // Changes the name of the song the previous one
            document.querySelector('.song-name').textContent = songs[currentSongIndex].slice(songs[currentSongIndex].indexOf('songs'), songs[currentSongIndex].indexOf('.mp3')).replaceAll('%20', " ").replace('.mp3', '').replace('songs/', '')
        }
    })
    document.querySelector('.next').addEventListener('click', () => {
        if (currentSongIndex < songs.length - 1) {
            currentSongIndex += 1
            currentSong.src = songs[currentSongIndex]
            currentSong.play()
            document.querySelector('.play').src = 'img/pause-stroke-rounded.svg'
            // Changes the name of the song the previous one
            document.querySelector('.song-name').textContent = songs[currentSongIndex].slice(songs[currentSongIndex].indexOf('songs'), songs[currentSongIndex].indexOf('.mp3')).replaceAll('%20', " ").replace('.mp3', '').replace('songs/', '')
        }
    })
    
    // Song Timing
    currentSong.addEventListener('timeupdate',()=>{
        if(!isNaN(currentSong.duration)){
            document.querySelector('.seekbar').max = currentSong.duration;
            document.querySelector('.seekbar').value = currentSong.currentTime;
            document.querySelector('.song-timing').textContent = `${formatTime(currentSong.currentTime)} / ${formatTime(currentSong.duration)}`
        }
        })

    // Seekbar
        document.querySelector('.seekbar').addEventListener('input',(e)=>{
            currentSong.currentTime = e.target.value
        })

    // Hamburger Functionality
    document.querySelector('.hamburger').addEventListener('click',()=>{
        document.querySelector('.library').classList.toggle('open')
    })
}


main()