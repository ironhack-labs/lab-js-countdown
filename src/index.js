const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const button = document.querySelector("#start-btn");
button.addEventListener("click", () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  const number = document.getElementById("time");
  let timeLeft = +number.innerHTML;
  timer = setInterval(() => {
    remainingTime -= 1;
    if (timeLeft > 0) {
      timeLeft--;
      number.innerHTML = timeLeft;
    }
    if (remainingTime === 0) {
      showToast();
      return;
    }
  }, 1000);
  console.log("startCountdown called!");

  // Your code goes here ...
}

// ITERATION 3: Show Toast
const show = document.getElementById("toast");
function showToast(message) {
  show.classList.add("show");
  if (remainingTime === 0) {
    setTimeout(() => {
      show.classList.remove("show");
    }, 3000);
  }
  console.log("showToast called!");
}
// Your code goes here ...

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
const close = document.getElementById("close-toast");
const closeButton = document.querySelector("#close-toast");
closeButton.addEventListener("click", () => {
  close.classList.remove("show");
  clearTimeout(show.classList.remove("show"), 3000);
});
// document.getElementById("myBtn").disabled = true;
