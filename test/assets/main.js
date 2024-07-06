let song = new Audio(null);

function buttonAudio(type) {
    if (type === 'select') {
        var audio = new Audio('assets/audio/sfx/buttonSelect.wav');
        audio.play();
    }
    if (type === 'hover') {
        var audio = new Audio('assets/audio/sfx/buttonHover.wav');
        audio.play();
    }
}

function music(songID) {
    if (song.loop === true) {
        song.pause();
    }
    if (songID === 1) {
        song = new Audio('assets/audio/music/WinterWasteland.mp3');
    } if (songID === 2) {
        song = new Audio('assets/audio/music/Battle.mp3');
    }
    song.play()
    song.loop = true;
}
