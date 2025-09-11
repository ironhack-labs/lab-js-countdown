const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

let timeText = document.getElementById("time");

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  startBtn.disabled = true;

  timer = setInterval(function () {
    if (remainingTime >= 0) {
      timeText.innerHTML = remainingTime;
      remainingTime -= 1;
    } else {
      clearInterval(timer);
      startBtn.disabled = false;
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const closeToastBtn = document.getElementById("close-toast");
  closeToastBtn.addEventListener("click", getRidOfToast);

  function getRidOfToast() {
    toast.classList.remove("show");
  }

  // Your code goes here ...
}
