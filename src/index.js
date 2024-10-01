const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startingCountdown = document.querySelector("#start-btn");
startingCountdown.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  startingCountdown.disabled = true;
  console.log("startCountdown called!");

  let timer = 10;

  const timeDisplay = document.getElementById("time");
  timeDisplay.textContent = timer;
  const intervalId = setInterval(() => {
    timer--;

    timeDisplay.textContent = timer;

    if (timer === 9) {
      showToast();
    } else if (timer === 5) {
      showToast();
    } else if (timer === 0) {
      clearInterval(intervalId);
      showToast();
    }
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  const toastElem = document.querySelector("#toast");

  toastElem.classList.add("show");
  setTimeout(() => {
    toastElem.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  const toastClose = document.querySelector("#close-toast");
  toastClose.addEventListener("click", () => {
    toastElem.classList.remove("show");
  });
}
