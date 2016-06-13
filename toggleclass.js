What if we want to toggle a class back and forth, though? 
That is, what if we want jQuery to automatically check to see whether our #text is .
highlighted, so that when we click on it, it adds the class if it isn't there and removes it if it is?

As you probably guessed, jQuery includes a .toggleClass() function that does exactly this.
If the element it's called on has the class it receives as an input, .toggleClass() removes that class;
if the target element doesn't have that class, .toggleClass() adds it.

$(document).ready(function(){
    $('#text').click(function(){
        $(this).toggleClass('highlighted');
    });
});
