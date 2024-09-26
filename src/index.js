const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
const divTime = document.getElementById("time");

function startCountdown() {
  console.log("startCountdown called!");
  timer = setInterval(count, 1000);
  startBtn.disabled = true;
}
function count() {
  remainingTime--;
  divTime.innerHTML = remainingTime;
  if (remainingTime > 0) {
  } 
  else {
    clearInterval(timer);
    timer = null
    showToast();
  }
}

// ITERATION 3: Show Toast
const toastCard = document.getElementById("toast");
const closeBtn = document.getElementById("close-toast");
closeBtn.addEventListener("click", closeToast);

function showToast() {
  console.log("showToast called!");
  toastCard.classList.add("show");
  closing = setTimeout(closeToast, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
let closing = null;

function closeToast() {
  clearTimeout(closing);
  closing = null;
  toastCard.classList.remove("show");
}