function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function createCookie(){
  let username = document.getElementById("username");
  let pwd = document.getElementById("password");


  today = new Date();
  var expire = new Date();
  expire.setTime(today.getTime() + 3600000*24*15);
 

  document.cookie = "name="+username.value+";path=/" + ";expires="+expire.toUTCString();
  document.cookie = "password="+encodeURI(pwd.value)+";path=/" + ";expires="+expire.toUTCString();
} 