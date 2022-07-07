
const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand")
const secondsHand = document.getElementById("second-hand")
const digitalHour = document.getElementById("hour")
const digitalMinute = document.getElementById("minute")
const digitalSecond = document.getElementById("seconds")
const digitalAp = document.getElementById("tim")

const setClock = () => {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds();
    const minuteRatio = currentDate.getMinutes();
    const hourRatio =  currentDate.getHours();
    
    hourRotation = 30 * hourRatio + minuteRatio / 2
    minuteRotation = 6 * minuteRatio;
    secondRotation = 6 * secondRatio;

    hourHand.style.transform = `rotate(${hourRotation}deg)`
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`
    secondsHand.style.transform = `rotate(${secondRotation}deg)`
}

const setDigital = () => {
    const digitalDate = new Date();
    const digitalSec = digitalDate.getSeconds();
    const digitalMin= digitalDate.getMinutes();
    const digitalHr = digitalDate.getHours();
    const session = "AM"


    let hrDay =  digitalDate.getHours();
    let period = "AM"
    if(hrDay > 12) {
        hrDay -= 12
        period = "PM"
        digitalAp.innerHTML = period;
    }else if(hrDay == 0) {
        hrDay = 12;
        session  ="AM"
        digitalAp.innerHTML = period;
        
    }

    digitalHour.innerHTML = digitalHr + ":";
    digitalMinute.innerHTML = digitalMin + ":";
    digitalSecond.innerHTML = digitalSec;
}

setInterval(setClock, 1000);
setInterval(setDigital, 1000);
setClock()
setDigital()

const dates = new Date();
console.log(dates);