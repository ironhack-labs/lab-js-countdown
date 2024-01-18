const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
});

let display = document.getElementById("time");

// ITERATION 2: Start Countdown
function startCountdown() {
  startButton.disabled = true;
  let i = remainingTime;
  const intervalID = setInterval(function () {
    display.innerHTML = i;
    i--;
    if (i < 0) {
      clearInterval(intervalID);
      showToast();
      closeToast();
      startButton.disabled = false;
    }
  }, 1000);
}

const toast = document.getElementById("toast");

// ITERATION 3: Show Toast
function showToast(message) {
  toast.classList.add("show");
  console.log("showToast called!");
  setTimeout(function () {
    toast.classList.remove("show");
    console.log("has been closed!");
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
function closeToast() {
  let toastCloseButton = document.getElementById("close-toast");
  toastCloseButton.addEventListener(
    "click",
    () => {
      toast.classList.remove("show");
      console.log("has been closed!");
    },
    100
  );
}
