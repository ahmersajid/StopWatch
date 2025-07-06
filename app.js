const getHor = document.querySelectorAll('h3')[0];
const getMin = document.querySelectorAll('h3')[1];
const getSec = document.querySelectorAll('h3')[2];
const getMinSec = document.querySelectorAll('h3')[3];
const startBtn = document.querySelector('#btn');

let Hor = 0, Min = 0, Sec = 0, MinSec = 0;
let interval;

function start() {
  interval = setInterval(() => {
    MinSec++;
    getMinSec.innerHTML = MinSec;
    
    if (MinSec >= 100) {
      Sec++;
      getSec.innerHTML = Sec;
      MinSec = 0;
    }
    if (Sec >= 60) {
      Min++;
      getMin.innerHTML = Min;
      Sec = 0;
    }
    if (Min >= 60) {
      Hor++;
      getHor.innerHTML = Hor;
      Min = 0;
    }
  }, 10); 
  startBtn.disabled = true;
}

function stop() {
  clearInterval(interval);
  startBtn.disabled = false;
}

function reset() {
  Hor = Min = Sec = MinSec = 0;
  getHor.innerHTML = Hor;
  getMin.innerHTML = Min;
  getSec.innerHTML = Sec;
  getMinSec.innerHTML = MinSec;
  clearInterval(interval);
  startBtn.disabled = false;
}