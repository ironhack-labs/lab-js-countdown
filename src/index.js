// ITERATION 1: Add event listener to the start button


const startElement = document.getElementById("start-btn")
const button = document.querySelector('button')
button.addEventListener('click', startCountdown);

const timerDiv = document.getElementById('time');

let timer = null; // Variable to store the interval
const DURATION = 10; // 10 seconds

// ITERATION 2: Start Countdown
function startCountdown() {
  let remainingTime = DURATION; // Countdown starting from 10
  startElement.disabled = true;

  timer = setInterval (() => {
  if (remainingTime > 0){
    remainingTime--;
    timerDiv.innerHTML = remainingTime;
  }
  if (remainingTime === 0) {
    clearInterval(timer)
    startElement.disabled = false;
  }
  console.log(remainingTime)
}, 1000);

}





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
