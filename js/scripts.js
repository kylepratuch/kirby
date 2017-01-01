// Countdown Clock Script:
var clock = document.getElementById("countdown-holder")
  , targetDate = new Date(2017, 05, 17); // June 17, 2017;

clock.innerHTML = countdown(targetDate).toString();
setInterval(function(){
  clock.innerHTML = countdown(targetDate).toString();
}, 1000);
