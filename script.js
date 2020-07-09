var x = document.getElementById("hands");
var y = document.getElementById("animcon");

function closeye() {
    y.style.backgroundImage="url('img/monkey_pwd.gif')";
    x.style.marginTop="0%";
}

function openeye() {
  y.style.backgroundImage="url('img/monkey.gif')";
  x.style.marginTop="110%";
}
