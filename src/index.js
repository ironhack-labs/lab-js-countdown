const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
const startingBtn = document.getElementById("start-btn");
startingBtn.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
let i = 10;
const myTime = document.getElementById("time");

function startCountdown() {
  console.log("startCountdown called!");
  const timeoutId = setInterval(() => {
    console.log(i);
    myTime.innerHTML = i;

    i--;

    if (i < 0) {
      clearInterval(timeoutId);
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
let myToast = document.getElementById("toast");

function showToast(message) {
  console.log("showToast called!");

  myToast.classList.add("show");

  const intervalToast = setInterval(() => {
    if (myToast.classList.contains("show")) myToast.classList.remove("show");
  }, 3000);
}
// Your code goes here ...

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...

//
