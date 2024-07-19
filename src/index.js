let DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startButton.disabled = true;

  const intervalId = setInterval(function () {
    const timeRemainingId = document.querySelector("#time");
    if (DURATION >= 0) {
      console.log(DURATION);
      timeRemainingId.textContent = DURATION;

      if (DURATION === 10) {
        showToast("⏰ Final countdown! ⏰");
      } else if (DURATION === 5) {
        showToast("Start the engines! 💥");
      }

      DURATION--;
    } else {
      clearInterval(intervalId);
      showToast("Lift off! 🚀");
      startButton.disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.getElementById("toast");
  const toastMessage = document.querySelector("#toast-message");

  toastMessage.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
const toastButton = document.querySelector("#close-toast");
toastButton.addEventListener("click", () => {
  clearTimeout(toast);
  toastButton.classList.remove("show");
});
