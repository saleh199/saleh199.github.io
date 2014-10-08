$(document).ready(function() {
    
    /* **** Startanimation **** */
    $('#start h3').animate({
         'opacity' : '1',
         'top' : '+=20px'
    }, { duration: 1200, easing: 'easeOutSine' });
    $('#start h2').delay(300).animate({
         'opacity' : '1',
         'top' : '+=20px'
    }, { duration: 1000, easing: 'easeOutSine' });
    $('#start h1').delay(500).animate({
         'opacity' : '1'
    }, { duration: 1000, easing: 'easeInCirc' });
    $('#start ul').delay(1200).animate({
         'opacity' : '1'
    }, { duration: 1000, easing: 'easeInCirc' });
   
});

