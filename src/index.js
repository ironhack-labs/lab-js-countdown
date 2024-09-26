const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  startButton.disabled = true;
  const displayTimer = document.getElementById("time");

  // Start countdown timer
  timer = setInterval(() => {
    remainingTime--;
    displayTimer.innerText = remainingTime;

    if (remainingTime === 10) return showToast("⏰ Final countdown! ⏰");
    if (remainingTime === 5) return showToast("Start the engines! 💥");
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.innerText = message;
  toast.classList.add("show");

  // Hide the toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeButton = document.querySelector("#close-toast");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      toast.classList.remove("show");
    });
  }
}
