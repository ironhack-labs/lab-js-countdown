const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timerId = null;
// ITERATION 1: Add event listener to the start button
const startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
const counterElement = document.querySelector("div#time");

function startCountdown() {
  console.log("startCountdown called!");
  timer = counterElement.innerText;
  showToast("⏰ Final countdown! ⏰");

  timerId = setInterval(() => {
    timer--;
    counterElement.innerText = timer;
    startButton.disabled = true;

    if (timer === 5) {
      showToast("Start the engines! 💥");
    }

    if (timer === 0) {
      clearInterval(timerId);
      console.log("Timer finished !");
      showToast("Lift off! 🚀");
      // let the user restart the counter
      timer = 10;
      counterElement.innerText = timer;
      startButton.disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
const toastContainer = document.querySelector("div#toast");
const closeButton = document.querySelector("span#close-toast");
const textToast = document.querySelector("span#toast-message");

function showToast(message) {
  console.log("showToast called!");
  textToast.innerText = message;
  // Your code goes here ...
  toastContainer.classList.add("show");
  setTimeout(() => {
    toastContainer.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeButton.addEventListener("click", () => {
    toastContainer.classList.remove("show");
  });
}
