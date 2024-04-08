const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const root = document.getElementById("start-btn");
console.log(root);
// ITERATION 1: Add event listener to the start button
root.addEventListener("click", () => {
  startCountdown();
  showToast("Start the Countdown 🚀");
});
// Your code goes here ...

// ITERATION 2: Start Countdown
function startCountdown() {
  let i = 10;
  const intervalId = setInterval(function () {
    console.log(i);
    document.getElementById("time").innerHTML = i;
    i--;
    if (i === 8) {
      removeToast();
    }
    if (i === 6) {
      showToast("Great Job 🚀");
    }
    if (i === 4) {
      removeToast();
    }
    if (i <= -1) {
      showToast("Lift off! 🚀");

      clearInterval(intervalId);
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  document.getElementById("toast-message").innerHTML = message;
  document.getElementById("toast").classList.add("show");
}
function removeToast() {
  document.getElementById("toast").classList.remove("show");
}
