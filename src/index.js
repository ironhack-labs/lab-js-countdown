// --- VARIABLES ---
let remainingTime = 10; // The countdown starts at 10
let timer = null; // Variable to store the interval


// --- ELEMENTS ---
const startBtn = document.getElementById("start-btn");
const timeDisplay = document.getElementById("time");
const toastElement = document.getElementById("toast");
const closeToastBtn = document.getElementById("close-toast");


// --- ITERATION 1: Start Button ---
startBtn.addEventListener("click", () => {
  startCountdown();
});


// --- ITERATION 2: Start the Countdown 
function startCountdown() {
  console.log("startCountdown called!");

  // Disable the button so it can't be clicked during countdown
  startBtn.disabled = true;

  // Reset time in case the user runs it again
  remainingTime = 10;
  timeDisplay.innerText = remainingTime;

  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.innerText = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast();
      // Re-enable button after countdown is over
      startBtn.disabled = false;
    }
  }, 1000);
}


// --- ITERATION 3: Show Toast ---
function showToast() {
  // Add the "show" class to make the toast visible
  toastElement.classList.add("show");

  // Automatically hide the toast after 3 seconds
  const toastTimeout = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);

  // --- BONUS: Iteration 4 | Toast Close Button ---
  closeToastBtn.addEventListener("click", () => {
    clearTimeout(toastTimeout); // Stop the 3s timer if user closes manually
    toastElement.classList.remove("show");
  });
}