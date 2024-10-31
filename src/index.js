const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtn = document.querySelector("#start-btn");
const timeIndex = document.querySelector("#time");
const toastDisplayed = document.querySelector("#toast");
const closeToast = document.querySelector("#close-toast");
const showMessage = document.querySelector("#toast-message");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtn.addEventListener("click", () => {
  console.log("button clicked!");
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  let remainingTime = DURATION + 1;
  startBtn.disabled = true;
  timer = setInterval(() => {
    remainingTime--;
    timeIndex.innerText = remainingTime;
    switch (remainingTime) {
      case 10:
        showToast("⏰ Final countdown! ⏰");
        break;
      case 5:
        showToast("Start the engines! 💥");
        break;
      case 0:
        showToast('"Lift off! 🚀"');
        startBtn.disabled = false;
        clearInterval(timer);
        startBtn.innerText = "Restart";
    }
  }, 1000);
  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  showMessage.innerText = message;
  toastDisplayed.classList.add("show");
  setTimeout(() => {
    toastDisplayed.classList.remove("show");
  }, 3000);

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  closeToast.addEventListener("click", () => {
    toastDisplayed.classList.remove("show");
  });
}
