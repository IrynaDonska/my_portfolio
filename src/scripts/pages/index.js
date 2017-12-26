const jquery = require('jquery');
console.log('index');

//flip эффект

(function () {
    var welcomeBlocks = document.querySelectorAll('.welcome__content');
    var autorization = document.querySelector('.autorization-button');
    var welcomePage = document.querySelector('.welcome'); 
    //var body = document.querySelector('body');

    for ( var i = 0, len = welcomeBlocks.length; i < len; i++ ) {
        var welcomeBlock = welcomeBlocks[i];
    };
    autorization.addEventListener( 'click', function(e) {
        var checkClassWelcome = welcomeBlock.classList;
        checkClassWelcome.add('flipped'); 
        //c.contains('flipped') === true ? c.remove('flipped') : c.add('flipped');
        autorization.style.opacity='0';
    });
    document.addEventListener('click', function() {
        var checkClassWelcome = welcomeBlock.classList;
        
        if (!checkClassWelcome.contains('flipped')) {
            checkClassWelcome.add('flipped')
        } else {
            checkClassWelcome.remove('flipped')        
        }
    });

    welcomeBlock.addEventListener('click', function(e) {
        e.stopPropagation()
    });
})();