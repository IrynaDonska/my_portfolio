const jquery = require('jquery');

(function() {
    let hamburgerButs = document.querySelectorAll('.hamburger__button');
    let hiddenMenu = document.querySelector('.hidden-menu');
    let hiddenMenuLink = document.querySelector('.hidden-menu__link');
    const wrapper = document.querySelector('.wrapper');

    for (var i = hamburgerButs.length - 1; i >= 0; i--) {
        var hamburgerBut = hamburgerButs[i];
        hamburgerHandler(hamburgerBut);
    }
   
    function hamburgerHandler(hamburgerBut) {
        hamburgerBut.addEventListener('click', function (e) {
            e.preventDefault();
            if (!this.classList.contains('active') === true) { 
                this.classList.add('active')
                hiddenMenu.style.display = 'flex';
                wrapper.style.overflow = 'hidden';    
            } else {
                this.classList.remove('active');
                hiddenMenu.style.display = 'none';
                wrapper.style.overflow = 'initial';  

            }
        });
    }

    hiddenMenuLink.addEventListener('click', function() {
        hamburgerBut.classList.remove('active');
        hiddenMenu.style.display = 'none';
        wrapper.style.overflow = 'initial';
    })

})();
