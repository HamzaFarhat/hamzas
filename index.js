// var dvd = document.getElementById("hamza");
// var x = 0;
// var y = 0;
// var xSpeed = 5;
// var ySpeed = 5;

// function animate() {
//   x += xSpeed;
//   y += ySpeed;

//   if (x + 100 > window.innerWidth || x < 0) {
//     xSpeed = -xSpeed;
//   }

//   if (y + 100 > window.innerHeight || y < 0) {
//     ySpeed = -ySpeed;
//   }

//   dvd.style.left = x + "px";
//   dvd.style.top = y + "px";

//   requestAnimationFrame(animate);
// }

// animate();

var dvd = document.getElementById("hamza");
var x = 0;
var y = 0;
var xSpeed = 5;
var ySpeed = 5;

setInterval(function() {
  x += xSpeed;
  y += ySpeed;

  if (x + 100 > window.innerWidth || x < 0) {
    xSpeed = -xSpeed;
  }

  if (y + 100 > window.innerHeight || y < 0) {
    ySpeed = -ySpeed;
  }

  dvd.style.left = x + "px";
  dvd.style.top = y + "px";
}, 1000);
