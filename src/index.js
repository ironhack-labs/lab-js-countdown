const DURATION = 10;
let remainingTime = DURATION;
let timer = null;

// ITERATION 1
document.getElementById("start-btn").addEventListener("click", startCountdown);

// ITERATION 2
function startCountdown() {
  console.log("startCountdown called!");

  const timeElement = document.getElementById("time");
  const startButton = document.getElementById("start-btn");

  remainingTime = DURATION;
  timeElement.textContent = remainingTime;
  startButton.disabled = true;

  timer = setInterval(() => {
    remainingTime--;
    timeElement.textContent = remainingTime;

    if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startButton.disabled = false;
    }
  }, 1000);
}

// ITERATION 3
function showToast(message) {
  console.log("showToast called!");

  const toastElement = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  const closeToast = document.getElementById("close-toast");

  toastMessage.textContent = message;
  toastElement.classList.add("show");

  const toastTimeout = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4
  closeToast.addEventListener("click", () => {
    clearTimeout(toastTimeout);
    toastElement.classList.remove("show");
  });
}
