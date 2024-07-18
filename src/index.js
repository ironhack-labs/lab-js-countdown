const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", startCountdown);
// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  document.querySelector("#start-btn").disabled = true;

  const countdownTimer = setInterval(function () {
    remainingTime--;

    let timeCountdown = document.getElementById("time");
    timeCountdown.textContent = remainingTime;
    if (remainingTime > 0) {
      return remainingTime;
    } else {
      showToast();
      clearInterval(countdownTimer);
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastMessage = document.getElementById("toast");
  const list = toast.classList;
  list.add("show");
  const timeout = setTimeout(() => {
    list.remove("show");
  }, 3000);

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
