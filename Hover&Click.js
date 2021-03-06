<!DOCTYPE html>
<html>
    <head>
		<title>Kapow!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
	</head>
	<body>
        <div></div>   
	</body>
</html>

=========================================
css
========================================

body {
    background-image: url('http://bit.ly/UpQgJ6');
    repeat: no-repeat;
}

div {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: #008800;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#003500), to(#008800));
    background-image: -webkit-linear-gradient(left, #003500, #008800); 
    background-image:    -moz-linear-gradient(left, #003500, #008800);
    background-image:     -ms-linear-gradient(left, #003500, #008800);
    background-image:      -o-linear-gradient(left, #003500, #008800);
}

.red {
    background-color: #CC0000;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#330000), to(#CC0000));
    background-image: -webkit-linear-gradient(left, #330000, #CC0000); 
    background-image:    -moz-linear-gradient(left, #330000, #CC0000);
    background-image:     -ms-linear-gradient(left, #330000, #CC0000);
    background-image:      -o-linear-gradient(left, #330000, #CC0000);
}

===============================
===============================
            JS
==============================


$(document).ready(function(){
    $('div').click(function(){
        $('div').fadeOut('fast');    
    });
    $('div').hover(function(){
        $('div').addClass('red');
    });
});
