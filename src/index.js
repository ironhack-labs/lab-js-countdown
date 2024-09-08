const DURATION = 10 // 10 seconds
let remainingTime = DURATION // Countdown starting from 10
let timer = null // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const botonStart = document.querySelector('#start-btn')
const numeroContador = document.querySelector('#time')
const toastNodo = document.querySelector('#toast')
const mensajeNodo = document.querySelector('#toast-message')
const botonDeCierre = document.querySelector('#close-toast')
// ITERATION 2: Start Countdown

botonStart.addEventListener('click', () => {
  empezarcCountador()
  botonStart.disabled = true
  showToast()
})
function empezarcCountador() {
  console.log('startCountdown called!')
  // Your code goes here ...
  timer = setInterval(() => {
    remainingTime--
    if (remainingTime >= 0) {
      numeroContador.textContent = remainingTime
    }

    if (remainingTime === 10) {
      showToast('⏰ Final countdown! ⏰')
    } else if (remainingTime === 5) {
      showToast('Start the engines! 💥')
    } else if (remainingTime === 0) {
      showToast('Lift off! 🚀')
      clearInterval(timer)
    }
  }, 1000)
}

// ITERATION 3: Show Toast
function showToast(message) {
  if (message) {
    mensajeNodo.textContent = message
  }
  toastNodo.classList.add('show')
  setTimeout(() => {
    toastNodo.classList.remove('show')
  }, 3000)

  // Your code goes here ...
  botonDeCierre.addEventListener('click', () => {
    toastNodo.classList.remove('show')
  })
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
