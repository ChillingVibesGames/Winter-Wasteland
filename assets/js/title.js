document.getElementById('start').onclick = function () {
    console.log('clicked!')
    document.querySelector('#start').hidden = true;
    document.querySelector('#title-center').hidden = true;
    start = 1;
    let visible = document.querySelector('#textbox')
    visible.hidden = false;
    music(0);
};

function animate () {
    let title = document.querySelector('#title-center');
    let button = document.querySelector('#start');
    setTimeout(loop, 30);
    function loop () {
        x = x + 1/3
        sin = Math.sin(x);
        cosin = Math.cos(x);
    }
    title.style = 'top:' + (sin*2+20) + 'vh;';
    
}
let x = 0;
let sin = 0;
let start = 0;