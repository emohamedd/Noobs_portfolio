
var greeting = document.getElementById("greeting");

var currentHour = new Date().getHours();
if (currentHour < 12) {
  greeting.innerHTML = "Good morning";
} else if (currentHour < 18) {
  greeting.innerHTML = "Good afternoon";
} else {
  greeting.innerHTML = "Good evening";
}
