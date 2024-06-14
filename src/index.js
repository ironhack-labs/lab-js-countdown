const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const timeLeft = document.querySelector("#time");
const toast = document.querySelector(".toast");
let show = document.querySelector(".show");

// ITERATION 1: Add event listener to the start button
// Your code goes here ...
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  const intervalID = setInterval(() => {
    if (remainingTime > 0) {
      console.log("THIS IS THE COUNTDOWN HAPPENING");
      remainingTime--;
      timeLeft.innerText = remainingTime;
      startBtn.disabled = true;
    } else if (remainingTime === 0) {
      showToast();
      clearInterval(intervalID);
    }
  }, 1000);
}

// ITERATION 3: Show Toast

function showToast(message) {
  console.log("showToast called!");

  toast.classList.toggle("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
