$(document).ready(function () {
    
    // One page scroll
    $('.allPages').onepage_scroll({
        easing: 'ease-in-out',
        loop: false,
        animationTime: 700
    });

    // Falling squares

    var fallingSquares = {
        'hero': document.getElementById('hero-squares')
    };

/*
    var fallingSquaresHero = new FallingSquares({ 
        canvas: fallingSquares.hero,
        size: 40,
        numberOfColumns: 1
    });
*/
});