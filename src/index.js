const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startElement = document.querySelector("#start-btn");
const countElement = document.querySelector("#time");
const visibleToast = document.querySelector("#toast");
const closingElement = document.querySelector("#close-toast");
startElement.addEventListener("click", startCountdown);
closingElement.addEventListener("click", closeToast);
// startElement.addEventListener("click", showToast);

// ITERATION 2: Start Countdown
function startCountdown() {
  startElement.disabled = true;
  timer = setInterval(() => {
    countElement.textContent = remainingTime;
    if (remainingTime <= 0) {
      clearInterval(timer);
      startElement.disabled = false;
      remainingTime = DURATION;
      countElement.textContent = remainingTime;
      showToast();
    }
    remainingTime--;
    // countElement.reset(remainingTime);
  }, 100);
  console.log("startCountdown called!");
}

// Your code goes here ...

// ITERATION 3: Show Toast
function showToast() {
  visibleToast.classList.add("show");
  console.log("showToast called!");
  setTimeout(() => {
    visibleToast.classList.remove("show");
  }, 3000);
}

// Your code goes here ...

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
function closeToast() {
  visibleToast.classList.remove("show");
}

// Your code goes here ...
