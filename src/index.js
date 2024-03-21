const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  startBtn.disabled = true;
  const finalCountdown = setInterval(() => {
    remainingTime--;
    document.getElementById("time").innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(finalCountdown);
      startBtn.disabled = false;
      remainingTime = 10;
      showToast();
    }
  }, 1000);
}

// Your code goes here ...

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const cheers = document.querySelector("div#toast");
  cheers.classList.toggle("show");
  let toastTimer = 3;
  const toastAway = setInterval(() => {
    toastTimer--;
    if (toastTimer === 0) {
      cheers.classList.toggle("show");
    }
  }, 1000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
