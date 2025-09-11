const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const startBtn = document.getElementById("start-btn");
const timeDiv = document.getElementById("time");
const toastDiv = document.getElementById("toast");
const closeToastSpan = document.getElementById("close-toast");
const toastMessageSpan = document.getElementById("toast-message");

// ITERATION 1: Add event listener to the start button
startBtn.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  startBtn.disabled = true;
  remainingTime = DURATION;
  const timerId = setInterval(() => {
    switch (remainingTime) {
      case 10:
        showToast("⏰ Final countdown! ⏰");
        break;
      case 5:
        showToast("Start the engines! 💥");
        break;
      case 0:
        clearInterval(timerId);
        startBtn.disabled = false;
        remainingTime = DURATION;
        showToast("Lift off! 🚀");
        break;
    }
    timeDiv.innerText = remainingTime;
    remainingTime--;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  toastMessageSpan.innerText = message;

  toastDiv.style.display = "block";
  toastDiv.classList.add("show");

  const toastTimoutId = setTimeout(() => {
    toastDiv.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeToastSpan.addEventListener("click", () => {
    toastDiv.classList.remove("show");
    clearTimeout(toastTimoutId);
  });
}
