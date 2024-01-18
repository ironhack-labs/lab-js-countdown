const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.querySelector("#start-btn").addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  // Your code goes here ...
  console.log("timer: " + timer);
  console.log("remaining time: " + remainingTime);
  startButton = document.getElementById("start-btn");

  const intervalId = setInterval(() => {
    remainingTime--;
    startButton.disabled = true;
    timer = remainingTime;

    document.querySelector("#time").innerHTML = timer;
    if (remainingTime <= 0) {
      clearInterval(intervalId);
      showToast();
      startButton.disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastClass = document.querySelector(".toast");
  toastClass.classList.add("show");
  // toastClass.innerHTML = message;

  setTimeout(() => {
    toastClass.classList.remove("show");
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
