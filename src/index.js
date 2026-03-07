const DURATION = 10;
let remainingTime = DURATION;
let timer = null;

// ITERATION 1 | Start Button

const startBtn = document.querySelector("#start-btn");

startBtn.addEventListener("click", startCountdown);

// ITERATION 2 | Start Countdown

function startCountdown() {
  console.log("startCountdown called!");

  const timeDiv = document.querySelector("#time");
  const startBtn = document.querySelector("#start-btn");

  startBtn.disabled = true;
  timer = setInterval(function () {
    timeDiv.innerText = remainingTime;
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(timer);

      remainingTime = DURATION;
      timeDiv.innerText = remainingTime;
      showToast("Lift off! 🚀");
      startBtn.disabled = false;
      let toastTimeOut = null;
    }
  }, 2000);
}

// ITERATION 3 | Show Toast

function showToast(message) {
  const toast = document.querySelector("#toast");
  const toastMessage = document.querySelector("#toast-message");

  toastMessage.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
