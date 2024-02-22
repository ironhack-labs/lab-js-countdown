const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startB = document.getElementById("start-btn");
let timeElement = document.getElementById("time");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startB.addEventListener("click", () => {
  startCountdown();
  console.log("start button ready");
  startB.disabled = true;
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...

  remainingTime = DURATION;
  timeElement.innerHTML = remainingTime;

  timer = setInterval(() => {
    remainingTime--;

    timeElement.innerHTML = `${remainingTime}`;
    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast();
    }
  }, 1000);
}
// ITERATION 3: Show Toast
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  console.log("showToast called!");
  startB.disabled = false;
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON`

  // Your code goes here ...
}
