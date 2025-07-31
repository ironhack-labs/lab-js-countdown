const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timeRemaining = document.querySelector("div#time");
timeRemaining.innerText = DURATION;

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startBtn.disabled = true;
  let seconds = DURATION;
  timer = setInterval(() => {
    switch (seconds) {
      case 10:
        showToast(`⏰ Final countdown! ⏰`);
        break;
      case 5:
        showToast("Start the engines! 💥");
        break;
      case 0:
        showToast("Lift off! 🚀");
        break;
    }
    timeRemaining.innerText = seconds;
    if (seconds === 0) {
      clearInterval(timer);
      startBtn.disabled = false;
      setTimeout(() => {
        timeRemaining.innerText = DURATION;
      }, 1000);
    }
    seconds--;
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  // console.log("showToast called!");

  // Your code goes here ...
  let toastCard = document.querySelector("div#toast");
  let messageInCard = document.querySelector("#toast-message");
  messageInCard.innerText = message;
  toastCard.classList.toggle("show");
  let timeout = setTimeout(() => {
    toastCard.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  let closeToastMsg = document.querySelector("#close-toast");
  closeToastMsg.addEventListener("click", () => {
    toastCard.classList.remove("show");
    clearTimeout(timeout);
  });
}
