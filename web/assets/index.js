import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/Autoplay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('.movie')
const buttonPlay = document.getElementById('playButton')
const buttonMute = document.getElementById('muteButton')

const player = new MediaPlayer({ 
    video,
    plugins: [ new AutoPlay(video),
        new AutoPause({video: video, threshold: 0.25, visibilityChange: true })
    ]
 })



buttonPlay.addEventListener('click', ()=>{

    player.tooglePlayPause();
})


buttonMute.addEventListener('click', ()=>{

    player.toogleMuteUnmute();
})
