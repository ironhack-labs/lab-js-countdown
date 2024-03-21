const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const startBtn = document.getElementById("start-btn");

// ITERATION 1: Add event listener to the start button
startBtn.addEventListener("click", startCountdown);

// Your code goes here ...
const countDown = document.getElementById("time");
// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  timer = setInterval(() => {
    remainingTime--;
    document.querySelector("#time").textContent = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  }, 1000);
  startBtn.disabled = true;
}

// ITERATION 3: Show Toast
const showingBtn = document.querySelector("#toast");

function showToast(message) {
  console.log("showToast called!");
  showingBtn.classList.add("show");
  setTimeout(function () {
    showingBtn.classList.remove("show");
  }, 3000);
}
// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
const closeBtn = document.getElementById("close-toast");
closeBtn.addEventListener("click", () => {
  if (closeBtn) {
    showingBtn.classList.remove("show");
  }
});
