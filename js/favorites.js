
let starButtons = document.querySelectorAll('.star-btn');

starButtons.forEach(function(starButton) {
    starButton.addEventListener('click', function() {
        let currentstar = starButton.style.backgroundImage;

        if (currentstar.includes('lightstar.png')) {
            starButton.style.backgroundImage = 'url(../img/darkstar.png)';
        } else {
            starButton.style.backgroundImage = 'url(../lightstar.png)';
        }
    });
});