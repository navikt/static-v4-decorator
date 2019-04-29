var navno = navno || {};
var navnoUrlScript = document.getElementById('navnoScr');
navno.loginUrl = navnoUrlScript.getAttribute('loginurl');
navno.logoutUrl = navnoUrlScript.getAttribute('logouturl');
navno.authServiceUrl = navnoUrlScript.getAttribute('authserviceurl');
