const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

let startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  startButton.disabled = true;

  const intervalId = setInterval(function () {
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      showToast("Lift off! 🚀");
      clearInterval(intervalId);
    }

    if (remainingTime !== timer) {
      let timerDiv = document.getElementById("time");
      timerDiv.innerText = `${remainingTime}`;
    }

    remainingTime--;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  let toastCard = document.getElementById("toast");
  toastCard.classList.toggle("show");

  let toastMessage = document.getElementById("toast-message");
  toastMessage.innerText = message;

  setTimeout(() => {
    toastCard.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  let closeToastCard = document.getElementById("close-toast");

  closeToastCard.onclick = () => {
    toastCard.classList.remove("show");
  };
}
