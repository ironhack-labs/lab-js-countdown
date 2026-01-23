
const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let end = 0;
const startBtn = document.getElementById("start-btn");
const toastCard = document.getElementById("toast"); // Toast card element

// ITERATION 1: Add event listener to the start button
startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  if (timer !== null) clearInterval(timer); // Stop previous timer
  remainingTime = DURATION; 
  document.getElementById("time").innerText = remainingTime;
  startBtn.disabled = true; // Disable start button
  toastCard.classList.remove("show"); // Hide toast at start

  timer = setInterval(() => {
    if (remainingTime === 0) { // Check before subtracting
      showToast("Time's up!");
      clearInterval(timer);
      timer = null;
      startBtn.disabled = false; // Enable start button
    } else {
      remainingTime -= 1;
      document.getElementById("time").innerText = remainingTime;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  toastCard.innerText = message; // Set toast text
  toastCard.classList.add("show"); // Show the toast card

  setTimeout(() => {
    toastCard.classList.remove("show"); // Hide toast after 3 seconds
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  // Your code goes here ...
}

