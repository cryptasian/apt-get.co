# Welcome to apt-get.co
 _a collection of code projects by [resonova](https://www.resonova.com)_
<br>
_home url: [apt-get.co](http://www.apt-get.co)_
<br>
<br>

## EXPLORE PROJECT PAGES

[Waves Platform Data](http://www.apt-get.co/waves.html)

[crypto-scriptor](http://www.apt-get.co/crypto-scriptor.html)

[Crypto Icons](http://www.apt-get.co/docs/assets/crypto-icons/index.html)

[Time Fetch](http://www.apt-get.co/time-fetch.html)

[Flex Web](http://www.apt-get.co/flexweb.html)

[Matrix Rain](http://www.apt-get.co/matrix.html)

[Disruptive: An Introduction to Blockchain and Cryptocurrency](http://disruptive.resonova.com)

[Blockchain Technology in Healthcare](http://www.apt-get.co/medical-blockchain.html)

[Additional Resources Located Here: sudo.apt-get](http://sudo.apt-get.co)

<br>
<hr>
<br>

## HANDY CODE SNIPS

<br>

### 1) FULL PAGE IFRAME

<br>

```
<!DOCTYPE html>
<html>
<body>
	<iframe 
    src="http://www.apt-get.co" 
    security="restricted" 
    sandbox 
    style="position:fixed; 
    top:0px; left:0px; 
    bottom:0px; 
    right:0px; 
    width:100%; 
    height:100%; 
    border:none; 
    margin:0; 
    padding:0; 
    overflow:hidden; 
    z-index:999999;">
  	<a href="http://www.apt-get.co"> 
    Proceed to the apt-get project page.
      </a>
	</iframe>
	</body>
</html>
```

<br>

### 2) TIME-STAMP FETCHER BUTTON
Live Example: [Time Fetch](http://www.apt-get.co/time-fetch.html)
(Code Compressed by [TextFixer.com](http://www.textfixer.com/html/compress-html-compression.php))

<br>

```
<!DOCTYPE html><html><head><title>TIME FETCH</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="description" content="Live code example of basic styled buttons which fetch the current time"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="keywords" content="html, css, js, javascript, buttons, fetch current time, onclick"><link href="https://fonts.googleapis.com/css?family=Didact+Gothic|Roboto|Ubuntu" rel="stylesheet"><style>p {font-family: 'Didact Gothic', sans-serif;}h1 {font-family: 'Didact Gothic', sans-serif;}h2 {font-family: 'Didact Gothic', sans-serif;}h3 {font-family: 'Didact Gothic', sans-serif;}.btn { border: none; color: "white"; padding: 12px 26px;margin: 5px; font-size: 16px; cursor: pointer; box-sizing: border-box; box-shadow: 2px 3px 4px #888888;}.success {background-color: #4CAF50;} /* Green */.success:hover {background-color: #46a049;}.info {background-color: #2196F3;} /* Blue */.info:hover {background: #0b7dda;}.default {background-color: #e7e7e7; color: "black";} /* Gray */ .default:hover {background: #ddd;}</style></head><body> <h2>Click the "GET TIME" buttons to display the current time.</h2><input class="btn default" type="button" onclick="location.href='http://www.apt-get.co';" value="VIEW GITHUB PAGE"> <br><hr><br><h2>Time-Fetch Button 1</h2> <input class="btn success" type="button" value="GET TIME" onclick="getElementById('timeOUTPUT1').innerHTML=Date()"> <p id="timeOUTPUT1">RESULT 1</p> <hr><br><h2>Time-Fetch Button 2</h2> <input class="btn info" type="button" value="GET TIME" onClick="getElementById('timeOUTPUT2').innerHTML=Date()"> <p id="timeOUTPUT2">RESULT 2</p> <hr><br></body></html>
```

<br>

### 3) BASIC RESPONSIVE WEBSITE
Live Example: [FlexWeb](http://www.apt-get.co/flexweb.html)
(Code Compressed by [TextFixer.com](http://www.textfixer.com/html/compress-html-compression.php))

<br>

```
<!DOCTYPE html><html><head><title>FlexWeb</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="description" content="Live example of a basic static website with dynamic, flexible styling"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="keywords" content="html, css, js, javascript, buttons, website template, responsive site"> <link rel="apple-touch-icon" sizes="57x57" href="http://get-rekt.pw/assets/media/apple-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="http://get-rekt.pw/assets/media/apple-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="http://get-rekt.pw/assets/media/apple-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="http://get-rekt.pw/assets/media/apple-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="http://get-rekt.pw/assets/media/apple-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="http://get-rekt.pw/assets/media/apple-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="http://get-rekt.pw/assets/media/apple-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="http://get-rekt.pw/assets/media/apple-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="http://get-rekt.pw/assets/media/apple-icon-180x180.png"><link rel="icon" type="image/png" sizes="192x192" href="http://get-rekt.pw/assets/media/android-icon-192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="http://get-rekt.pw/assets/media/favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="http://get-rekt.pw/assets/media/favicon-96x96.png"><link rel="icon" type="image/png" sizes="16x16" href="http://get-rekt.pw/assets/media/favicon-16x16.png"><link rel="manifest" href=""><meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-TileImage" content="http://get-rekt.pw/assets/media/ms-icon-144x144.png"><meta name="theme-color" content="#ffffff"><link href="https://fonts.googleapis.com/css?family=Didact+Gothic|Roboto|Ubuntu" rel="stylesheet"><style> p {font-family: 'Didact Gothic', sans-serif;} .p2 {font-family: 'Didact Gothic', sans-serif; font-size: 18px; color: #ffffff; margin: 0; text-align: center;} h1 {font-family: 'Didact Gothic', sans-serif; color: #ffffff;}h2 {font-family: 'Didact Gothic', sans-serif; color: #000000;}h3 {font-family: 'Didact Gothic', sans-serif;}* {box-sizing: border-box;}.header {background-color: #4CAF50; color: #000000; padding: 15px;} .footer {background-color: #4CAF50; color: #000000; padding: 15px; font-color: #ffffff;}.column {float: left; padding: 15px;}.clearfix::after {content: ""; clear: both; display: table;}.menu {width: 28%; font-family: 'Didact Gothic', sans-serif;}.content {width: 70%;} .menu ul {list-style-type: none; margin: 0; padding: 0;}.menu li { border: none; color: #ffffff; padding: 8px 8px; margin: 8px; width: 95%; font-size: 16px; cursor: pointer; box-sizing: border-box; box-shadow: 2px 3px 4px #000000; background-color: #f44336; text-align: center; }.menu li:hover {background-color: #da190b;} .btn { border: none; color: #ffffff; padding: 8px 8px;margin: 8px; width: 95%; font-size: 16px; cursor: pointer; box-sizing: border-box; box-shadow: 2px 3px 4px #000000;}.success {background-color: #4CAF50;} /* Green */.success:hover {background-color: #46a049;}.info {background-color: #2196F3;} /* Blue */.info:hover {background: #0b7dda;} .warning {background-color: #ff9800;} /* Orange */.warning:hover {background: #e68a00;}.danger {background-color: #f44336;} /* Red */ .danger:hover {background: #da190b;}.default {background-color: #e7e7e7; color: "black";} /* Gray */ .default:hover {background: #ddd;}</style> </head><body><div class="header"> <h1>The Flexible Website</h1></div><div class="clearfix"> <div class="column menu"> <input class="btn info" type="button" onclick="location.href='http://www.apt-get.co';" value="HOME"> <ul> <li>Option 1</li> <li>Option 2</li> <li>Option 3</li> <li>Option 4</li> </ul> </div> <div class="column content"> <h2>Some Flexible Content</h2> <p>This is an epic paragraph on an epic auto-resizing "responsive" website template layout. Check out how well this thing resizes by viewing this page with alternate resolutions.</p> <p>Expect great things. Do great things.</p> </div></div><div class="footer" > <p class="p2">&copy; &copy; &copy; &copy; &copy; &copy; &copy;</p> <p class="p2">($) ¯\_(ツ)_/¯ (฿)</p> <p class="p2">&copy; &copy; &copy; &copy; &copy; &copy; &copy;</p></div></body></html>
```
<br>

### 4) USEFUL BUTTONS
Live Example: [Time Fetch](http://www.apt-get.co/time-fetch.html)

First of all, be sure to make use of the following CSS code either in an external style sheet or in the "style" tag of your HTML document:


```
.btn {
    		border: none;
    		color: white;
    		padding: 12px 26px;
		margin: 5px;
    		font-size: 16px;
    		cursor: pointer;
    		box-sizing: border-box;
      		box-shadow: 2px 3px 4px #888888;
		}
		.success {background-color: #4CAF50;} /* Green */
		.success:hover {background-color: #46a049;}
		.info {background-color: #2196F3;} /* Blue */
		.info:hover {background: #0b7dda;}
		.warning {background-color: #ff9800;} /* Orange */
		.warning:hover {background: #e68a00;}
		.danger {background-color: #f44336;} /* Red */ 
		.danger:hover {background: #da190b;}
		.default {background-color: #e7e7e7; color: black;} /* Gray */ 
		.default:hover {background: #ddd;}
```

<br>

After you have set up the CSS above, you can successfully implement the following buttons anywhere in your website. Please note that, if you would like to change the color type of your button, simply alter the "class" tag to one of the classes defined in the CSS code above. Those class types are as follows:

- class="btn success" (A green button)
- class="btn info" (A blue button)
- class="btn warning" (A red button)
- class="btn danger" (A yellow button)
- class="btn default" (A gray button)

Here is a "REFRESH" button which refreshes the page when clicked by the viewer:

<br>

```
<input class="btn danger" 
    type="button" 
    value="REFRESH PAGE" 
    onClick="history.go(0)">  
```

<br>

Here is a "BACK" button which sends the user back to whatever page they were on before arriving at the current page:

<br>

```
<input class="btn success" 
    type="button" 
    value="BACK" 
    onClick="history.go(-1)">  
```

<br>

Here is an IP Check button which sends the user to the Google IP checking page:

<br>

```
<input class="btn info" 
    type="button" 
    onclick="location.href='https://domains.google.com/checkip';" 
    value="CHECK YOUR IP">
```

<br>

<hr>
<br>
