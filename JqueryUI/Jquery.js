/*
For instance, remember when we lamented that jQuery didn't include a .blowUp() effect for 
our planet Krypton? Well, that's still true.
But jQuery UI has an .effect() effect, 
and we are totally going to give it the input 'explode'

*/
$(document).ready(function(){
    $('div').click(function(){
        $('div').effect('explode');
    });

});
