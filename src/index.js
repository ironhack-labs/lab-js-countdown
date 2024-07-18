const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startCountdownButton = document.querySelector("#start-btn");
startCountdownButton.addEventListener("click", () => {
  startCountdown();
});
// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  const timerContainer = document.getElementById("time");
  const intervalId = setInterval(function () {
    showToast;
    if (remainingTime > 0) {
      if (remainingTime === 10) {
        showToast("⏰ Final countdown! ⏰");
      }
      remainingTime--;
      timerContainer.innerText = `${remainingTime}`;
      if (remainingTime === 5) {
        showToast("Start the engines! 💥");
      }
    } else {
      clearInterval(intervalId);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  let toastMessage = document.querySelector("span#toast-message");
  toastMessage.innerText = message;
  const toastContainer = document.querySelector("div#toast");
  toastContainer.classList.add("show");
  const intervalId = setInterval(function () {
    toastContainer.classList.remove("show");
  }, 3000);

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeButton = document.querySelector("#close-toast");
  closeButton.addEventListener("click", () => {
    toastContainer.classList.remove("show");
  });

  // Your code goes here ...
}
