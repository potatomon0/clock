const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

document.documentElement.onload = function(){
    // document.getElementById("loader").style.display="block"
    
}
window.onload= function(){
    // document.getElementById("loader").style.display="none"
    setDate()
}
function setDate(){
    const now = new Date()
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds/60)*360)+90
    const min = now.getMinutes()
    const minDegrees = ((min/60)*360)+90

    const hour = now.getHours()
    const hourDegrees = ((hour/12)*360) +90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minHand.style.transform = `rotate(${minDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}
setInterval(setDate,1000)