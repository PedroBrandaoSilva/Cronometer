let sec = 0
let hour = 0
let min = 0
let cron

function start(){
    let cronSec = document.querySelector(".second")
    let cronMin = document.querySelector(".minute")
    let cronHour = document.querySelector(".hour")

    cron = setInterval(() => {
        sec++
        cronSec.innerHTML = sec
        if(sec == "60"){
            sec = 1
            cronSec.innerHTML = sec
            min++
            cronMin.innerHTML = min
            if(min == "60"){
                min = 0
                cronMin.innerHTML = min
                hour++
                cronHour.innerHTML = hour
            }
        }





    }, 1000);

   

}

