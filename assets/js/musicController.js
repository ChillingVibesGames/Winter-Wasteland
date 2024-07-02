function music(songNum) {
    const audio=new Audio('assets/Music/' + songNum + '.mp3');
    audio.loop=true;
    audio.play();
}