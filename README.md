# Welcome to apt-get.co
 _a collection of code projects by [resonova](https://www.resonova.com)_
<br>
_live link: [apt-get.co](http://www.apt-get.co)_
<br>
<br>

## EXPLORE PROJECT PAGES

[Matrix Rain](http://www.apt-get.co/matrix.html)

[Waves Platform Data](http://www.apt-get.co/waves.html)

[Blockchain Technology in Healthcare](http://www.apt-get.co/medical-blockchain.html)

[sudo.apt-get Resources](http://sudo.apt-get.co)

[crypto-scriptor](http://www.apt-get.co/crypto-scriptor.html)

[Crypto Icons](http://www.apt-get.co/docs/assets/crypto-icons/index.html)

<br>
<hr>
<br>

## HANDY CODE SNIPS

<br>

### 1) FULL PAGE IFRAME

<br>

```
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
```

<br>

### 2) TIME-STAMP FETCHER BUTTON

<br>

```
<!DOCTYPE html>
<html>
    <body>
        <p>Click the button to display the time.
        </p>
        <button 
            onclick="getElementById('timeOUTPUT').innerHTML=Date()">
            CURRENT TIME
        </button>
        <p id="timeOUTPUT">
            </p>
    </body>
</html>
```

Here's how the button code functions when implemented properly:

<div>
<html>
  <body>
      <p>Click the button to display the time.
      </p>
      <button 
        onclick="getElementById('timeOUTPUT').innerHTML=Date()">
        CURRENT TIME
      </button>
      <p id="timeOUTPUT">
        </p>
  </body>
</html>
</div>

<br><br>
<br>
<hr>

<br>

### 3) BASIC RESPONSIVE WEBSITE

<br>

```
<!DOCTYPE html>
<html>
<head>
<style>
* {
    box-sizing: border-box;
}
.header, .footer {
    background-color: grey;
    color: white;
    padding: 15px;
}
.column {
    float: left;
    padding: 15px;
}
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
.menu {
    width: 25%;
}
.content {
    width: 75%;
}
.menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.menu li {
    padding: 8px;
    margin-bottom: 8px;
    background-color: #33b5e5;
    color: #ffffff;
}
.menu li:hover {
    background-color: #0099cc;
}
</style>
</head>
<body>

<div class="header">
  <h1>The Flexible Website</h1>
</div>

<div class="clearfix">
  <div class="column menu">
    <ul>
      <li>Option 1</li>
      <li>Option 2</li>
      <li>Option 3</li>
      <li>Option 4</li>
    </ul>
  </div>

  <div class="column content">
    <h1>Some Flexible Content</h1>
    <p>This is an epic paragraph on an epic auto-resizing "responsive" website template layout. Check out how well this thing resizes by viewing this page with alternate resolutions.</p>
    <p>Expect great things. Do great things.</p>
  </div>
</div>

<div class="footer">
  <p>($) ¯\_(ツ)_/¯ (฿)</p>
</div>

</body>
</html>
```
<br>
<br>
<hr>
<br>
