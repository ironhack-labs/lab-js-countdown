const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const finalCountdown = "⏰ Final countdown! ⏰";
const startTheEngines = "Start the engines! 💥";
const liftOff = "Lift off! 🚀";

// ITERATION 1: Add event listener to the start button
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", (e) => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  const time = document.querySelector("#time");
  intervalId = setInterval(() => {
    time.textContent = remainingTime;
    if (remainingTime === 10) {
      showToast(finalCountdown);
    } else if (remainingTime === 5) {
      showToast(startTheEngines);
    } else if (remainingTime === 0) {
      clearInterval(intervalId);
      showToast(liftOff);
    }
    remainingTime--;
    startButton.disabled = true;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  const toastMessage = document.querySelector("#toast-message");
  toastMessage.textContent = message;
  toast = document.querySelector(".toast");
  toast.classList.add("show");

  timeOut = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeButton = document.querySelector("#close-toast");
  closeButton.addEventListener("click", (e) => {
    toast.classList.remove("show");
  });
}
