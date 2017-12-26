const jquery = require('jquery');

(function() {
    var hamburgerButs = document.querySelectorAll('.hamburger__button');
   
    for (var i = hamburgerButs.length - 1; i >= 0; i--) {
        var hamburgerBut = hamburgerButs[i];
        hamburgerHandler(hamburgerBut);
    }
   
    function hamburgerHandler(hamburgerBut) {
        hamburgerBut.addEventListener('click', function (e) {
            e.preventDefault();
            (this.classList.contains('active') === true) ? this.classList.remove('active') : this.classList.add('active');
        });
    }
})();