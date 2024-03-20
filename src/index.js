const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const messages = ["⏰ Final countdown! ⏰", "Start the engines! 💥", "Lift off! 🚀"];

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
const counter = document.getElementById("time");
const toast = document.getElementById("toast");
const closeToast = document.getElementById("close-toast");
const toastMessage = toast.querySelector("#toast-message");

startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown(messages) {
  // Your code goes here ...
  console.log("startCountdown called!");

  checkTimeToShowToast();

  timer = setInterval(decreaseCounter, 1000);
  startButton.disabled = true;
}

function decreaseCounter() {
  counter.textContent = --remainingTime;

  checkTimeToShowToast();

  if (remainingTime <= 0) {
    clearInterval(timer);
    return;
  }
}

function checkTimeToShowToast() {
  if (remainingTime % 5 === 0) {
    const messageIndex = Math.floor(remainingTime / 5);
    showToast(messages[messageIndex]);
  } 
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastMessage.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  closeToast.addEventListener("click", () => {
    toast.classList.remove("show");
  });
}