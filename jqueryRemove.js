Adding elements to our HTML documents is great, 
but without the ability to remove them, 
our pages can quickly become cluttered.
Thankfully, we have two jQuery functions, .empty() and .remove(), 
that help us delete content from our pages.

.empty() deletes an element's content and all its descendants.
For instance, if you .empty() an 'ol', you'll also remove all its 'li's and their text.

.remove(), not only deletes an element's content, but deletes the element itself.

Instructions
Go ahead and .remove() your <p> tag from the HTML document.









<!DOCTYPE html>
<html>
	<head>
		<title>Result</title>
        <script type='text/javascript' src='script.js'></script>
	</head>
	<body>
        <div class="container">
            <h2>Greetings</h2>
            <div id="one">Div #1</div>
            <div id="two">Div #2</div>
        </div>   
	</body>
</html>


$(document).ready(function(){
    $("#one").after('<p>I am joy!</p>');
    $("#two").after($("p"));
    $('p').remove();
});
