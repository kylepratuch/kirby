// Countdown Clock Script:
var clock = document.getElementById("countdown-holder")
  , targetDate = new Date(2017, 06, 15); // July 15, 2017;

clock.innerHTML = countdown(targetDate).toString();
setInterval(function(){
  clock.innerHTML = countdown(targetDate).toString();
}, 1000);
