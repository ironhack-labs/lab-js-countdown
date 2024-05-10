const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval


// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  remainingTime = DURATION;

  if (remainingTime === 10) {
    showToast("⏰ Final countdown! ⏰");
  }

  remainingTime--;
  // Your code goes here ...
  startButton.disabled = true;

  timer = setInterval(() => {
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startButton.disabled = false;
    }

    document.querySelector("#time").innerText = remainingTime;
    remainingTime--;
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  document.querySelector("#toast").classList.toggle("show");
  document.querySelector("#toast-message").innerText = message;
  setTimeout(() => {
    document.querySelector("#toast").classList.toggle("show");
  }, 3350);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeButton = document.querySelector("#close-toast");
  closeButton.addEventListener("click", () => {
    document.querySelector("#toast").classList.toggle("show");
  });

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
