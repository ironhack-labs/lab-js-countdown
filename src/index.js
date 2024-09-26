let DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let intervalID;


// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn") 
startButton.addEventListener("click", () => startCountdown());
timer = document.getElementById("time");
// ITERATION 2: Start Countdown
function startCountdown() {
  console.log ("startCountdown called!")
  intervalID = setInterval(function () {
  if (DURATION >= 0) {
  timer.innerHTML = DURATION;
  document.getElementById("start-btn").disabled = true;
  DURATION--;
} else {
  showToast();
}
}, 1000);
}
// ITERATION 3: Show Toast
let toastElement = document.querySelector("div#toast");
function showToast(message) {
  console.log("show Toast called!");
  toastElement.classList.add("show");
  setTimeout(() => {
  toastElement.classList.remove("show");
}, 3000);
}
