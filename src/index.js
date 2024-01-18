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
  document.getElementById("start-btn").disabled = true;

  timer = setInterval(() => {
    remainingTime--;
    document.getElementById("time").textContent = remainingTime;

    if (remainingTime === 9) {
      showToast("Final countdown!");
    } else if (remainingTime === 5) {
      showToast("Hurry!");
    } else if (remainingTime === 0) {
      showToast("Time's up!");
      clearInterval(timer);
      document.getElementById("start-btn").disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
// BONUS: ITERATION 4: TOAST CLOSE BUTTON
function showToast(message) {
  console.log("showToast called!");
  const toastCard = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  toastCard.classList.add("show");
  toastMsg.textContent = message;
  const timeOut = setTimeout(() => {
    toastCard.classList.remove("show");
  }, 3000);
  const closeBtn = document.getElementById("close-toast");
  deleteButton(closeBtn, toastCard);
}

function deleteButton(closeBtn, toastCard) {
  closeBtn.addEventListener("click", () => {
    clearTimeout();
    toastCard.classList.remove("show");
  });
}
