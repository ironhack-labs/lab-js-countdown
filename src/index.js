const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
// Your code goes here ...
const startButton = document.querySelector('#start-btn')
startButton.addEventListener('click', startCountdown)



// ITERATION 2: Start Countdown
// Your code goes here ...
function startCountdown() {
  startButton.disabled = true;
  timer = setInterval(() => {
    remainingTime--
    document.querySelector('#time').innerText = remainingTime
    if (remainingTime === 0) {
      clearInterval(timer) // Aquí quiero parar el contador.⏰
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  const toastMessage = document.querySelector('#toast-message')
  const toast = document.querySelector('#toast')

  // Your code goes here ...
  toast.classList.add('show')
  setTimeout(() => {
    toast.classList.remove('show')
    startButton.disabled = false
  }, 3000)

  setTimeout()



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}


