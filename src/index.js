const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
// Your code goes here ...
let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
let time = document.getElementById("time");
time.innerText = DURATION;

function startCountdown() {
  startButton.disabled = true;
  // Your code goes here ...
  let timer = setInterval(() => {
    time.innerText = remainingTime;
    if (remainingTime <= 0) {
      clearInterval(timer);
    }

    if (remainingTime == 10) showToast("⏰ Final countdown! ⏰");
    if (remainingTime == 5) showToast("Start the engines! 💥");
    if (remainingTime == 0) showToast("Lift off! 🚀");
    remainingTime--;
  }, 1000);
}

// ITERATION 3: Show Toast
let toastDiv = document.querySelector("div#toast");
let toastMessage = document.getElementById("toast-message");

function showToast(message) {
  // Your code goes here ...
  toastMessage.innerText = message;
  toastDiv.classList.add("show");

  setInterval(() => {
    toastDiv.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  let x = document.getElementById("close-toast");
  x.addEventListener("click", () => {
    toastDiv.classList.remove("show");
  });
  // Your code goes here ...
}
