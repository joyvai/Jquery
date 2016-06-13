<!DOCTYPE html>
<html>
	<head>
		<title>Result</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
	</head>
	<body>
        <div></div>   
	</body>
</html>

div {
    height: 50px;
    width: 300px;
    border-radius:0;
    background-color: #2C7CC3;
}

$("div").css("height","200px");
$("div").css("width","200px");
$("div").css("border-radius","10px");


What if we want to fine-tune individual CSS property values, though? 
Remember style="height:300px; width:300px;"? jQuery makes it a snap!

Because resizing elements is so common,
jQuery has specific .height() and .width() functions
that can be used to change the heights and widths of HTML elements.
For instance:

    $("div").height("100px");
    $("div").width("50px");
would give all <div>s on the page a height of 100 pixels and a width of 50 pixels.

jQuery also includes a general-purpose.
css() function that takes two inputs: the first is the CSS element to alter,
and the second is the value to set it to. For example:

$("div").css("background-color","#008800");
would give all <div>s on the page a green background color.
You can modify any element's CSS attributes this way.












