const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval


// ELEMENTS
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("start-btn");
const toastEl = document.getElementById("toast");
const toastMsgEl = document.getElementById("toast-message");
const closeToastBtn = document.getElementById("close-toast");


// ITERATION 1: Add event listener to the start button

// Your code goes here ...


startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
 // Disable start button
  startBtn.disabled = true;

  // Reset values in case user starts again later
  remainingTime = DURATION;
  timeEl.textContent = remainingTime;

  // Set interval (1 second)
  timer = setInterval(() => {
    remainingTime--;
    timeEl.textContent = remainingTime;

    // ITERATION 5 — Trigger toast messages
    if (remainingTime === 10) showToast("⏰ Final countdown! ⏰");
    if (remainingTime === 5) showToast("Start the engines! 💥");

    // When countdown reaches 0
    if (remainingTime === 0) {
      clearInterval(timer); 
      showToast("Lift off! 🚀");
      startBtn.disabled = false; // Re-enable button
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
 // Set dynamic message
  toastMsgEl.textContent = message;

  // Show toast
  toastEl.classList.add("show");

  // Auto-hide after 3 seconds
  const autoHide = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 3000);




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

closeToastBtn.onclick = () => {
    toastEl.classList.remove("show");
    clearTimeout(autoHide);
  };
}
