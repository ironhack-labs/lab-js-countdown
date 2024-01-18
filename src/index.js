const DURATION = 2; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const countdownButton = document.getElementById("start-btn");
const time = document.getElementById("time");
const toast = document.getElementById("toast");
const clearToast = document.getElementById("close-toast");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
countdownButton.addEventListener("click", () => {
  console.log("click");
  startCountdown();
  countdownButton.disabled = true;
});
// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  const interval = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      time.innerHTML = remainingTime;
    } else {
      showToast();
      clearInterval(interval);
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toast.classList.toggle("show");
  clearToast.innerHTML = `<div><button> Close toast </button></div>`;
  clearToast.style.position = "relative";
  clearToast.addEventListener("click", () => {
    toast.classList.toggle("show");
  });
  // Your code goes here ...
  const toastOff = setTimeout(() => {
    toast.classList.toggle("show");
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
