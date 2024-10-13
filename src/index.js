const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  startButton.disabled = true;
  const counterElement = document.querySelector("#time");
  const timer = setInterval(() => {
    counterElement.innerText = remainingTime;
    remainingTime--;
    if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰");
    }
    if (remainingTime === 4) {
      showToast("Start the engines! 💥");
    }
    if (remainingTime === -2) {
      showToast("Lift off! 🚀");
      clearInterval(timer);

      startButton.disabled = false;

      remainingTime = DURATION;
      counterElement.innerText = DURATION;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastMessage = document.querySelector("#toast-message");
  toastMessage.innerText = message;

  const cardToast = document.querySelector("#toast");
  cardToast.classList.add("show");
  setTimeout(() => {
    cardToast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeShowToast = document.querySelector("#close-toast");

  closeShowToast.addEventListener("click", () => {
    cardToast.classList.remove("show");
    console.log("Card toast closed");
  });
}
