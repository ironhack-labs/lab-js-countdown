const startCountdownElement = document.getElementById("start-btn");
const timeElement = document.getElementById("time");
const toastElement = document.getElementById("toast");
const closeToastButtonElement = document.getElementById("close-toast");
const toastMessageElement = document.getElementById("toast-message");
const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

startCountdownElement.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  let remainingTime = DURATION;
  timeElement.innerText = remainingTime;
  console.log("startCountdown called!");
  if (remainingTime === 10) {
    showToast("⏰ Final countdown! ⏰");
  }
  timer = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime;
    startCountdownElement.disabled = true;
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    if (remainingTime === 0) {
      setTimeout(() => {
        showToast("Lift off! 🚀");
      });
      clearInterval(timer);
      startCountdownElement.disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastMessageElement.innerText = message;
  toastElement.classList.add("show");
  let toastTimer = 3;
  const toast = setInterval(() => {
    toastTimer--;
    if (toastTimer <= 0) {
      clearInterval(toastTimer);
      toastElement.classList.remove("show");
    }
  }, 1000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeToastButtonElement.addEventListener("click", () => {
    toastElement.classList.remove("show");
  });
}
