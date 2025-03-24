let watcher = document.querySelector(".watch")
let sec = 0
let hour = 0
let min = 0
let interval



function start(){
watch()
   interval = setInterval(watch, 1000)

}

function pause(){
    clearInterval(interval)
}

function clearAll(){
    clearInterval(interval)
    sec = 0
    min = 0
    hour = 0

    watcher.innerHTML = "00:00:00"
}


function watch(){
    
    
    sec++

    if(sec === 60){
        sec = 0
        min++
    }

    if(min === 60){
        min = 0
        hour++
    }


    watcher.innerHTML = format(hour) + ":"+ format(min) + ":" + format(sec)
}


function format(digit){
    if(digit < 10){
        return "0" + digit
    } else{
        return digit
    }
}