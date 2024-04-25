const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () => {
  startCountdown(10);
  console.log("startCountdown");
});

// ITERATION 2: Start Countdown
function startCountdown(seconds) {
  let divtimer = document.querySelector("#time");
  let counter = seconds;
  const timer = setInterval(() => {
    startButton.disabled = true;
    divtimer.innerText--;
    counter--;
    if (counter === 0) clearInterval(timer);
    showToast();
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  let toastCard = document.queryselector(".toast");
  toastCard.classlist.add("show");
  setTimeout(() => {
    toastCard.classlist.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
