const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
console.log(startButton);

startButton.addEventListener("click", startCountdown);

let visibleCounter = document.querySelector("#time");

let toastTime = document.querySelector("#toast");
console.log(toastTime);

let toastMessage = document.querySelector("#toast-message");

let intervalId;

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;
  // Your code goes here ...
  let intervalId = setInterval(() => {
    visibleCounter.textContent = remainingTime;
    // console.log(remainingTime);
    if (remainingTime === 0) {
      clearInterval(intervalId);
      showToast("Lift off! 🚀");
      return;
    } else if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    // visibleCounter.textContent--;
    remainingTime--;
  }, 1000);
}

let closeToast = document.querySelector("#close-toast");
closeToast.addEventListener("click", closeToastEvent);

// ITERATION 3: Show Toast

function showToast(message) {
  console.log("showToast called!");
  toastMessage.textContent = message;
  toastTime.classList.add("show");

  // Your code goes here ...
  let timeoutId = setTimeout(() => {
    // if (remainingTime === 0) {
    //   clearTimeout(timeoutId);
    //   clearInterval(intervalId);
    // }
    toastTime.classList.remove("show");
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...

function closeToastEvent() {
  toastTime.classList.remove("show");
}
