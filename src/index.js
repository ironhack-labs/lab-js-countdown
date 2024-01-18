const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector('#start-btn')
const timeElement = document.querySelector('#time');
const toastCard = document.querySelector('#toast');
const closeBtn = document.querySelector('#close-toast');
const toastMessage = document.querySelector('#toast-message');
startBtn.addEventListener('click', () => {
  startCountdown()
});


// ITERATION 2: Start Countdown
function startCountdown() {
  let counter = 10
  startBtn.disabled = true
  const timer = setInterval(() => {
    if (counter === 10) {
      showToast("⏰ Final countdown! ⏰")
    }
    if (counter === 5) {
      showToast("Start the engines! 💥")
    }
    if (!counter) {
      showToast()
      clearInterval(timer);
    }
    else {
      counter--;
      timeElement.innerHTML = counter;
    }
  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message = "Lift off! 🚀") {
  toastCard.classList.add('show')
  toastMessage.innerHTML = message
  const timer = setTimeout(() => {
    toastCard.classList.remove('show')
    clearTimeout(timer)
  }, 1000 * 3)


  closeBtn.addEventListener('click', () => {
    toastCard.classList.remove('show')
  })
}
