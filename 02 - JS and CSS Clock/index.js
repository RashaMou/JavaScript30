// create function called setDate that runs every second
// to majke it run every second, we run the setInterval method
// setInterval takes in two arguments (a //function that gets executed every //delay)

const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() { // gets invoked every second
  const now = new Date()
  const seconds = now.getSeconds()
  console.log(seconds)
  const secondsDegrees = ((seconds/60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const minutes = now.getMinutes()
  const minDegrees = ((minutes/60) * 360) + 90
  minHand.style.transform = `rotate(${minDegrees}deg)`

  const hour = now.getMinutes()
  const hourDegrees = ((mins/12) * 360) + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
}


setInterval(setDate, 1000)