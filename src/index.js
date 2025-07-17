const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
const btn = document.querySelector("#start-btn");
btn.addEventListener("click", (e) => {
  let timeoutInterval = setInterval(
    () => startCountdown(timeoutInterval),
    1000
  );
});

// ITERATION 2: Start Countdown
function startCountdown(timeoutInterval) {
  const timeElement = document.querySelector("#time");
  if (remainingTime <= 0) {
    clearInterval(timeoutInterval);
    remainingTime = DURATION;
    timeElement.innerText = remainingTime;
    showToast("Lift off! 🚀");
    return;
  }

  if (remainingTime === 10) {
    showToast("⏰ Final countdown! ⏰");
  } else if (remainingTime === 5) {
    showToast("Start the engines! 💥");
  }

  remainingTime--;

  timeElement.innerText = remainingTime;
}

// ITERATION 3: Show Toast
function showToast(message) {
  let toastId = document.querySelector("#toast");
  let toastMsg = document.querySelector("#toast-message");
  toastMsg.innerText = "";
  toastMsg.innerText = message;

  toastId.classList.add("show");
  const timeoutId = setTimeout(() => {
    toastId.classList.remove("show");
  }, 2000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  let toastCloseButton = document.querySelector("#close-toast");
  toastCloseButton.addEventListener("click", () => {
    toastId.classList.remove("show");
    clearTimeout(timeoutId);
  });
}
