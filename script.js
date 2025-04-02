let watcher = document.querySelector(".watch")
let sec = 0
let hour = 0
let min = 0
let interval
let starded = false



function start(){

    if(starded == false){
        starded = true
         watch()
             interval = setInterval(watch, 1000)
    }
}

function pause(){

    clearInterval(interval)
    starded = false
}

function clearAll(){
    clearInterval(interval)
    sec = 0
    min = 0
    hour = 0
    starded = false

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