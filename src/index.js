const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timeout = null; // Variable to store the timeout for the toast

//### CONSTANTS ###
const toastCloseButton = document.getElementById("close-toast");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

//### EVENT LISTENERS ###
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
});
toastCloseButton.addEventListener("click", () => {
  clearTimeout(timeout);
  toast.classList.remove("show");
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  timer = setInterval(() => {
    startButton.disabled = true;

    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    remainingTime--; //needs to come below the first if statement as otherwise it's not shown
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime === 0) {
      showToast("Lift off! 🚀");
      clearInterval(timer);
      startButton.disabled = false;
      remainingTime = DURATION;
    }
    document.getElementById("time").innerText = remainingTime;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  //Set message
  toastMessage.innerText = message;

  //clear previous timeout
  if (timeout) {
    clearTimeout(timeout);
  }

  toast.classList.add("show");
  timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
