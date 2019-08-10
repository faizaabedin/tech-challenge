var h = new Object();

var attempt = 3; // Variable to count number of attempts.

function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ( h[username] == password){
  alert ("Login successfully");
  window.location = "success.html"; // Redirecting to other page.
  return false;

  }
  else{
  attempt --;// Decrementing by one.
  alert("You have left "+attempt+" attempt;");
  // Disabling fields after 3 attempts.
  if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("login").disabled = true;
    return false;
  }
  }
}


//
//
// }
// Below function Executes on click of login button.
function signUp(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  h[username] = password;

// show the values stored
for (var k in h) {
    // use hasOwnProperty to filter out keys from the Object.prototype
    if (h.hasOwnProperty(k)) {
        alert('key is: ' + k + ', value is: ' + h[k]);
    }
}
alert ("Welcome " + username);
return true;
}

function display(){
  fetch('https://via.placeholder.com/600/92c952')
    .then(response => response.json())
    .then(json => console.log(json))
}
