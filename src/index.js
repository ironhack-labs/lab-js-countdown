const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
// Your code goes here ...
const startButtonElement = document.getElementById("start-btn");

startButtonElement.addEventListener("click", () => {
  if (startButtonElement.innerText === "Start Countdown") {
    startCountdown();
  }
});

// ITERATION 2: Start Countdown
// Your code goes here ...
function startCountdown() {
  startButtonElement.disabled = true;
  console.log("startCountdown called!");
  remainingTime = DURATION;
  const timeElement = document.getElementById("time");
  timeElement.innerText = remainingTime;

  timer = setInterval(() => {
    console.log("Remaining Time:", remainingTime, "Seconds.");
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startButtonElement.disabled = false;
    }

    timeElement.innerText = remainingTime;
    remainingTime--;
  }, 1000);
}

// ITERATION 3: Show Toast
const closeToastElement = document.getElementById("close-toast");
const toastElement = document.getElementById("toast");

function showToast(message) {
  console.log("showToast called!");
  const toastMessageElement = document.getElementById("toast-message");
  toastMessageElement.innerText = message;
  // Your code goes here ...
  toastElement.classList.add("show");
  setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  // Your code goes here ...
}
closeToastElement.addEventListener("click", () => {
  toastElement.classList.remove("show");
});