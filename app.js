let getHor = document.querySelectorAll('.h3')[0]
let getMin = document.querySelectorAll('h3')[1];
let getSec = document.querySelectorAll('h3')[2];
let getMinSec = document.querySelectorAll('h3')[3];

let Hor = 0;
let Min = 0;
let Sec = 0;
let MinSec = 0;
let interval;

function start() {
  interval = setInterval(function(){
    MinSec++
    getMinSec.innerHTML = MinSec
    
    if(MinSec >= 100){
        Sec++
        getSec.innerHTML = Sec
        MinSec = 0
    }
    else if (Sec >= 60) {
        Min++
        getMin.innerHTML = Min
        Sec = 0
    }
    else if (Min >= 60){
        Hor++
        getHor.innerHTML = Hor
        Min = 0
    }
  },100)
  document.querySelector("#btn").disabled = true
}

function stop() {
 clearInterval(interval)
 document.querySelector('#btn').disabled = false
}

function reset() {
    Hor = 0
    Min = 0
   Sec = 0
   MinSec = 0
   getMin.innerHTML = Hor
   getMin.innerHTML = Min
   getSec.innerHTML = Sec
   getMinSec.innerHTML = MinSec
   clearInterval(interval)
   document.querySelector('#btn').disabled = false
}

