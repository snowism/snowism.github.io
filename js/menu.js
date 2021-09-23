function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " mobilemenu";
      
    } else {
      x.className = "topnav";
    }
  }