getTime();

setInterval(() => {
  getTime();
}, 1000);

let year = new Date().getFullYear();
document.getElementById("copyrightYear").innerHTML = year;

function getTime() {
  let d = new Date();

  let hours = d.getHours().toString();
  if (hours.length === 1) {
    hours = "0" + hours;
  }

  let min = d.getMinutes().toString();
  if (min.length === 1) {
    min = "0" + min;
  }

  let sec = d.getSeconds().toString();
  if (sec.length === 1) {
    sec = "0" + sec;
  }

  let time = `${hours}:${min}:${sec}`;
  document.getElementById("clock").innerHTML = time;
}
