
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
var score = 0;


//adicionar a class na imagem do mario
const jump = () => {
    mario.classList.add('jump');
    score = score + 1;
    setTimeout(() => {
        mario.classList.remove('jump');
    },500);
}



const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const cloudsPosition = clouds.offsetLeft;
    

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
 
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        document.getElementById('score').innerHTML = `${score}`;

        clearInterval(loop);
    }
}, 10)



// Evento para adicionar a ação de pulo do Mario
document.addEventListener('keydown', jump);