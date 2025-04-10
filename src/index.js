const DURATION = 10;
let remainingTime = DURATION;
let timer = null;
let toastTimeout = null;

// ITERATION 1: Add event listener to the start button
document.getElementById("start-btn").addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  remainingTime = DURATION;

  document.getElementById("time").textContent = remainingTime;

  document.getElementById("start-btn").disabled = true;

  showToast("⏰ Final countdown! ⏰");

  timer = setInterval(() => {
    remainingTime--;

    document.getElementById("time").textContent = remainingTime;

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime <= 0) {
      clearInterval(timer);

      showToast("Lift off! 🚀");

      document.getElementById("start-btn").disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.textContent = message;

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toast.classList.add("show");

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  document.getElementById("close-toast").addEventListener("click", () => {
    clearTimeout(toastTimeout);

    toast.classList.remove("show");
  });
}
