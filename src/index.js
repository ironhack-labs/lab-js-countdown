const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimeout = null;

// ITERATION 1: Add event listener to the start button
const timeElm = document.querySelector("#time");
const startBtnElm = document.querySelector("#start-btn");
const toastElm = document.querySelector("#toast");
const closeToastBtn = document.querySelector("#close-toast");
const toastMsgElm = document.querySelector("#toast-message");

startBtnElm.addEventListener("click", startCountdown);
closeToastBtn.addEventListener("click", () => {
  clearTimeout(toastTimeout);
  toastElm.classList.remove("show");
});

// Your code goes here ...
timeElm.textContent = remainingTime;

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  clearInterval(timer);
  startBtnElm.disabled = true;

  // Your code goes here ...
  timer = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      return;
    }

    if (remainingTime === 10) showToast("⏰ Final countdown! ⏰");
    if (remainingTime === 5) showToast("Start the engines! 💥");

    remainingTime--;
    timeElm.textContent = remainingTime;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastElm.classList.add("show");
  toastTimeout = setTimeout(() => {
    toastElm.classList.remove("show");
  }, 3000);

  // Your code goes here ...
  toastMsgElm.textContent = message;
}
