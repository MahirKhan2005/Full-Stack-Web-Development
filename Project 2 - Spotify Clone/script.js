let currentSong = new Audio()

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
    // currentSong.src = songs[0]
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
                            <div style="font-size:12px;">Play Now</div>
                            <img class="invert" src="img/play-song.svg" alt="play-song">
                        </div>`
        document.body.querySelector('.songs').append(song)
        document.querySelector('.song-name').textContent = songs[0].slice(element.indexOf('songs'), element.indexOf('.mp3')).replaceAll('%20', " ").replace('.mp3','').replace('songs/','')
        // Click to play functionality
        song.addEventListener('click',async () => {
            currentSong.src = element
            currentSong.play()
            document.querySelector('.play').src = 'img/pause-stroke-rounded.svg'
            document.querySelector('.song-name').textContent = songName
        })
    }
    // Play/Pause functionality
    document.querySelector('.play').addEventListener('click',async ()=>{
        if (currentSong.paused){
            document.querySelector('.play').src = 'img/pause-stroke-rounded.svg'
            currentSong.play()
        }
        else{
            document.querySelector('.play').src = 'img/play-stroke-rounded.svg'
            currentSong.pause()
        }
    })
}


main()