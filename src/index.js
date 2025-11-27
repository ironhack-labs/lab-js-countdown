const DURATION = 3; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startCountdownBtn = document.getElementById("start-btn");
const timeElement = document.getElementById("time");
const toast = document.getElementById("toast");
// ITERATION 1: Add event listener to the start button

startCountdownBtn.addEventListener("click", () => {
  startCountdown();
  remainingTime = 10;
  timeElement.innerText = remainingTime;
});

// ITERATION 2: Start Countdown
function startCountdown() {
  timer = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime;
    startCountdownBtn.disabled = true;

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast();
      startCountdownBtn.disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast() {
  console.log("showToast called!");
  // Mostrar el toast
  toast.classList.add("show");

  // Ocultarlo después de 3s
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
