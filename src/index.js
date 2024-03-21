const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.querySelector(`#start-btn`);
startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  remainingTime = DURATION;
  const IntervalID = setInterval(() => {
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    const bigNumber = document.querySelector("#time");
    bigNumber.innerHTML = `${remainingTime}`;

    if (remainingTime === 0) {
      showToast("Lift off! 🚀");
      clearInterval(IntervalID);
      startBtn.disabled = false;
    } else {
      remainingTime -= 1;
    }
  }, 1000);
  startBtn.disabled = true;
}

// ITERATION 3: Show Toast
function showToast(message) {
  const toastElement = document.querySelector("#toast");
  toastElement.classList.add("show");
  const timeOutID = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);

  const toastMessage = document.querySelector("#toast-message");
  toastMessage.innerHTML = message;

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeBtn = document.querySelector("#close-toast");
  closeBtn.addEventListener("click", () => {
    toastElement.classList.remove("show");
    clearTimeout(timeOutID);
  });
}
