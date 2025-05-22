const audioElement = document.querySelector('audio')
const timeElement = document.querySelector('#time')
function playHandler(){
    audioElement.play()
    setInterval(function(){
        timeElement.innerHTML = '00:' + '0' + audioElement.currentTime
    }, 1000)
}

// audioElement.pause()
// audioElement.playbackRate = 2
// audioElement.duration