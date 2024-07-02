document.getElementById('start').onclick = function () {
    let visible = document.querySelector('#textbox')
    console.log('clicked!')
    start = 1;
    document.querySelector('#start').hidden = true;
    document.querySelector('#title-center').hidden = true;
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

//setInterval(animate, 50);