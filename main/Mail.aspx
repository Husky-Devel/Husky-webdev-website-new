
<!DOCTYPE html>


<meta name="viewport" content="width=device-width, initial-scale=1.0">

 
<head>
    <title>Husky-webdev</title>
    <link rel="stylesheet" type="text/css" href="CSS/styles.css" />
    <link rel="stylesheet" type="text/css" href="CSS/Topnav.css" />
     <link rel="stylesheet" type="text/css" href="CSS/dropdown.css" />
    
    <img src="https://raw.githubusercontent.com/Husky-Devel/Husky-webdev-website-new/main/main/Images/small-logo2.png" />
    
    
    
  </head>

 
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


  <div class="body">
    <script>
      function LoginToOWA(server, domain, username, password) {
  
  
          var url = "https://outlook.office.com" + server + "/owa/auth/owaauth.dll";
          // flags 0 = full version, flags 1 = light weight mode
          var p = { destination: 'https://outlook.office.com' + server + '/mail', flags: '1', forcedownlevel: '0', trusted: '0', isutf8: '1', username: domain + '\\' + username, password: password };
  
  
          var myForm = document.createElement("form");
          myForm.method = "post";
          myForm.action = url;
  
          for (var k in p) {
  
              var myInput = document.createElement("input");
              myInput.setAttribute("name", k);
              myInput.setAttribute("value", p[k]);
              myForm.appendChild(myInput);
          }
  
  
          document.body.appendChild(myForm);
          myForm.submit();
          document.body.removeChild(myForm);
      }
  </script>
</div>
<div class="body">
  
</div>
<div class="body">

    

<footer>
        <nav role="navigation">

        </nav>
        <p class="copy">&copy; Made by Husky,hosting by Microsoft azure      </p>
      </footer>


 
     
</div>
</body>
</ !DOCTYPE html>
