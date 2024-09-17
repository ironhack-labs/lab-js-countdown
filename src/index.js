const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  const timer = setInterval(function () {
    if (remainingTime >= 0) {
      startButton.disabled = true;
      if (remainingTime === 9) {
        showToast("⏰ Final countdown! ⏰");
      } else if (remainingTime === 5) {
        showToast("Start the engines! 💥");
      } else if (remainingTime === 0) {
        showToast("Lift off! 🚀");
      }
    } else {
      clearInterval(timer);

      startButton.disabled = false;
      remainingTime = 10;
    }
    const displayTime = document.querySelector("#time");
    displayTime.innerText = remainingTime;
    remainingTime--;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  const toastDiv = document.querySelector("#toast");
  toastDiv.classList.add("show");
  const toastMessage = document.querySelector("#toast-message");
  toastMessage.innerText = message;

  setTimeout(() => {
    toastDiv.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const closeButton = document.querySelector("#close-toast");
  closeButton.addEventListener("click", function () {
    toastDiv.classList.remove("show");
  });
}
