const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimeout = null;

// ITERATION 1: Add event listener to the start button

const button = document.querySelector("#start-btn");
button.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  if (timer !== null) return;

  const timerDisplay = document.querySelector("#time");
  remainingTime = DURATION;
  button.disabled = true;
  timerDisplay.textContent = remainingTime;

  showToast("⏰ Final countdown! ⏰");

  timer = setInterval(() => {
    remainingTime--;
    timerDisplay.textContent = remainingTime;

    if (remainingTime === 5) {
      showToast("start the engines! 💥");
    }

    if (remainingTime === 0) {
      clearInterval(timer);
      timer = null;
      button.disabled = false;
      showToast("Lift off 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.querySelector("#toast");
  const toastMessage = document.querySelector("#toast-message");

  toastMessage.textContent = message;
  toast.classList.add("show");

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeBtn = document.querySelector("#close-toast");
  closeBtn.onclick = () => {
    clearTimeout(toastTimeout);
    toast.classList.remove("show");
  };
}
