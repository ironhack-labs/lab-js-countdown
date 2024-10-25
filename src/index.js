const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// Conectar el remaining time al DOM

const timeRemainingContainer = document.querySelector('#time')
timeRemainingContainer.innerHTML = remainingTime



// ITERATION 1: Add event listener to the start button


document.querySelector('button').onclick = () => {
  startCountdown()
  document.querySelector('button').disabled = true
}



// ITERATION 2: Start Countdown

function startCountdown() {

  showToast('⏰ Final countdown! ⏰')

  timer = setInterval(() => {

    if(remainingTime > 0){

      remainingTime --
      timeRemainingContainer.innerHTML = remainingTime

    }

    if( remainingTime === 0){
      clearInterval(timer)
      showToast('Lift off! 🚀')
      console.log('Este es el tiempo', remainingTime)
      //document.querySelector('button').disabled = false
    }

    if( remainingTime === 5){
      showToast('Start the engines! 💥')
    }

  }, 1000)
  
}





// ITERATION 3: Show Toast
function showToast(message) {

  document.querySelector('.toast').classList.add('show')

  document.querySelector('#toast-message').innerText = message
  
  document.querySelector('#close-toast').onclick = () => {
  
    document.querySelector('.toast').classList.remove('show')
  
  }

  const toasdTimeout = setTimeout(() => {
    document.querySelector('.toast').classList.remove('show')

}, 3000)


}

