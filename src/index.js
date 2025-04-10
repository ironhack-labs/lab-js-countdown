const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval


// ITERATION 1:
document.getElementById("startButton").addEventListener("click", startCountdown);
console.log(window.document.title);

//ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  remainingTime = DURATION;
  const timeDisplay = document.getElementById("time");
  const startBtn = document.getElementById("startButton");

  startBtn.disabled = true;
  timeDisplay.textContent = remainingTime;

  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.textContent = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startBtn.disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
document.getElementById("close-toast").addEventListener("click", () => {
  document.getElementById("toast").classList.remove("show");
});












      