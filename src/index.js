const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const timerElm = document.querySelector("#time");
const startBtn = document.querySelector("#start-btn");
const toastMsg = document.querySelector("div#toast");
const closeMsg = document.querySelector("#close-toast");
const txtMsg = document.querySelector("#toast-message");

let count = 11;
let intervalId;
let timeRunning = false;

startBtn.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  timeRunning = true;
  startBtn.disabled = true;
  console.log("startCountdown called!");
  intervalId = setInterval(() => {
    count--;
    console.log(count);
    if (count === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (count === 5) {
      showToast("Start the engines! 💥");
    } else if (count === 0) {
      clearInterval(intervalId);
      showToast("Lift off! 🚀");
    }
    timerElm.innerText = count;
  }, 1000);
  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  txtMsg.innerText = message;
  toastMsg.classList.add("show");
  setTimeout(() => {
    toastMsg.classList.remove("show");
  }, 3000);
  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeMsg.addEventListener("click", () => {
    toastMsg.classList.remove("show");
  });
  // Your code goes here ...
}
