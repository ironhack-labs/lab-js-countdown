const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimeout = null;

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const timeContainer = document.getElementById('time');

const toast = document.getElementById('toast');

const toastMsg = document.querySelector("#toast-message")

let closeToast = document
  .querySelector('#close-toast')
  .addEventListener("click", () => {
    clearTimeout(toastTimeout);
    toast.classList.remove("show")
})

let startButton = document
  .getElementById('start-bn')
  .addEventListener('click', startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  timeContainer.innerHTML = `${remainingTime}`

  if (remainingTime === 10) {
    showToast("⏰ Final countdown! ⏰");
  }

  timer = setInterval(() => {
    remainingTime--
    timeContainer.innerHTML = `${remainingTime}`
    if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    }
    if (remainingTime <= 0) {
      showToast("Toast here!");
      remainingTime = DURATION;
      clearInterval(timer);
    }
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toast.classList.toggle('show');
  toastMsg.innerText = message;
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show')
  }, 3000)
}



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...