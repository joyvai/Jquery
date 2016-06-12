$(document).ready(function(){
    $('div').mouseenter(function(){
        $('div').fadout('fast',.25);
    });
    $('div').mouseleave(function(){
        $('div').fadeTo('fast',0.5);
    });
    
});
