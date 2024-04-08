let DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const time = document.getElementById("time");
const toast = document.getElementById("toast");
const closeLiftOffButton = document.getElementById("close-toast");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  document.getElementById("start-btn").disabled = true;
  const intervalId = setInterval(function () {
    console.log(DURATION);
    DURATION--;
    time.innerHTML = `${DURATION}`;
    if (DURATION <= 0) {
      clearInterval(intervalId);
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const list = toast.classList;
  list.add("show");

  setTimeout(() => {
    list.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeLiftOffButton.addEventListener("click", () => {
    list.remove("show");
  });
}
