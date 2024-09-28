let DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const displayTimer = document.getElementById("time");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  timer = setInterval(() => {
    DURATION--;
    displayTimer.innerText = DURATION;
    console.log(DURATION);
    if (DURATION === 0) {
      clearInterval(timer);
    }
  }, 1000);

  // Your code goes here ...

  // ITERATION 3: Show Toast
  function showToast(message) {
    console.log("showToast called!");
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);

    const startButton = document.getElementById("toast-btn");
    startButton.addEventListener("click", startCountdown);

    // Your code goes here ...

    // BONUS: ITERATION 4: TOAST CLOSE BUTTON

    // Your code goes here ...
  }
}
