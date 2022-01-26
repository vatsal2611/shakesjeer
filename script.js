function myFunction() {
    var txt;
    if (confirm("We will get back to you!")) {
      txt = "We will get back to you!";
    } else {
      txt = "Something broke";
    }
    document.getElementById("demo").innerHTML = txt;
  }