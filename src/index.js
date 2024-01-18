const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  let remainingTime = DURATION;
  document.getElementById("time").textContent = remainingTime;
  document.getElementById("start-btn").disabled = true;
  let timerId = setInterval(() => {
    remainingTime--;
    document.getElementById("time").textContent = remainingTime;
    if (remainingTime === 10) {
      showToast("Final countdown!");
    } else if (remainingTime === 5) {
      showToast("Hurry up!");
    } else if (remainingTime === 0) {
      clearInterval(timerId);
      showToast("That's it. Times up.");
      document.getElementById("start-btn").disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  const toastCard = document.getElementById("toast");
  toastCard.classList.add("show");
  toastCard.textContent = message;
  const toastID = setTimeout(() => {
    toastCard.classList.remove("show");
  }, 3000);
  const closeBtn = document.getElementById("close-toast");
  closeBtn.addEventListener("click", () => {
    clearTimeout(toastID);
    toastCard.classList.remove("show");
  });
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
