<!DOCTYPE html>
<!-- Pulls in Css files and displays logo befor nav -->
<head>
    <title>Husky-webdev</title>
    <link rel="stylesheet" type="text/css" href="CSS/styles.css" />
    <link rel="stylesheet" type="text/css" href="CSS/Topnav.css" />
     <link rel="stylesheet" type="text/css" href="CSS/dropdown.css" />
    
    <img src="https://raw.githubusercontent.com/Husky-Devel/Husky-webdev-website-new/main/main/Images/small-logo2.png" />
    
    
    
  </head>

 <!-- Top Nav  -->
  <div class="topnav">
        <a class="active" href="index.aspx">Home</a>
        <a href="contact.aspx">Contact</a>
        <a href="http://blog.husky-webdev.codes">Blog</a>
        <a href="About.aspx">About </a> 
        <a href="https://azureb2chuskywebdev.b2clogin.com/azureb2chuskywebdev.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_Husky_webdev&client_id=f322b4f3-38cb-40ca-9395-dd378de8d198&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fweb.husky-webdev.codes%2Fmain&scope=openid&response_type=code&prompt=login">Sign up</a>
        <a href="https://azureb2chuskywebdev.b2clogin.com/azureb2chuskywebdev.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_Husky_webdev&client_id=f322b4f3-38cb-40ca-9395-dd378de8d198&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fweb.husky-webdev.codes%2Fmain&scope=openid&response_type=code&prompt=login">Sign In</a>
        <a href="mailto:husky@husky-webdev.codes">Email me</a>
        <a href="bt.aspx">Boot strap website</a>
        <a href="mail.aspx">Mail</a>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
   
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
 $(document).ready(function(){     
    var _dockPanel;
    var content = document.createElement('div');
    content.innerHTML = "";
    var liststart = document.createElement('ul');
    var listelement1 = document.createElement('li');
    var listelement2 = document.createElement('li');
    listelement1.innerHTML = '<a href="#tabs-1">One</a>';
    listelement2.innerHTML = '<a href="#tabs-2">Two</a>';
    liststart.appendChild(listelement1);
    liststart.appendChild(listelement2);
    var t1 = document.createElement('div');
    var t2 = document.createElement('div');

    t1.id = "tabs-1";
    t2.id = "tabs-2";

    t1.innerHTML = "Tab 1";
    t2.innerHTML = "Tab 2";

    content.appendChild(liststart);
    content.appendChild(t1);
    content.appendChild(t2);
    var html = [
      '<div>',
      '<nav class="navbar navbar-default">',

      '<ul class="nav navbar-nav">',
      '<li class="active"><a href="#">Home</a></li>',
      ' <li><a href="#">Page 1</a></li>',
      '<li><a href="#">Page 2</a></li>',
      '</ul>',

      '</nav>',
      '</div>'
    ].join('\n');
    $("#navbar1").append(html);
    $("#navbar2").append(content);
});
</script>
  </script>
<!-- Body / content -->
  <div class="body">
 Welcome to my website click on one of the links above. Note this website is in Develment!!! Thing's will change!!!!!
</div>
<div class="body">
  
</div>
<div class="body">

    
<!-- Bottem of page -->
<footer>
        <nav role="navigation">

        </nav>
        <p class="copy">&copy; Made by Husky,hosting on Microsoft azure      </p>
      </footer>


 
     
</div>
</body>
</ !DOCTYPE html>
