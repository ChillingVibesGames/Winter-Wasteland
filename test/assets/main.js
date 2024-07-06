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