const jquery = require('jquery');
console.log('index');
const preloader = require('../common/preloader.js');

//flip эффект
let autorizationButton = document.querySelector('.autorization-button');
let flipped = document.querySelector('.welcome__content');
let welcomeSection = document.querySelector('.welcome');
let mainPageBut = document.querySelector('.main-page');

function rotate(event) {
    flipped.classList.add('flipped');
    autorizationButton.style.opacity = '0';
    autorizationButton.style.cursor = 'default';
}

window.onclick = function(event) {
    let target = event.target;
    
    if (target == welcomeSection) {
        flipped.classList.remove('flipped'); 
        autorizationButton.style.opacity = '1';
        autorizationButton.style.cursor = 'pointer';
    }
};

mainPageBut.addEventListener('click', function() {
    flipped.classList.remove('flipped'); 
    autorizationButton.style.opacity = '1';
    autorizationButton.style.cursor = 'pointer';

});
autorizationButton.addEventListener('click', rotate);

preloader();