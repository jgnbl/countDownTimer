let countDownDate = new Date("Jan 01, 2021 15:37:25").getTime();
let dateGenerator = setInterval(function() {
  let today = new Date().getTime();
  let difference = countDownDate - today;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("printDate").innerHTML = days + " Days " + hours + " Hours "
  + minutes + " Minutes " + seconds + " Seconds ";

document.getElementById("printDate").style.fontSize = "2.5em";


//timout to new year wishes
  if (difference == 0 || difference < 0) {
    clearInterval(difference);
    document.getElementById("printDate").innerHTML = "Happy New Year!";
  }
}, 1 * 2000);
