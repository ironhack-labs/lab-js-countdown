const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  startBtn.setAttribute("disabled", "true");
  startCountdown();
})

// ITERATION 2: Start Countdown

// Your code goes here ...

const timeCounter = document.getElementById("time");
function startCountdown() {

  console.log("startCountdown called!");
  timer = setInterval(function () {
    remainingTime--;
    console.log(remainingTime);
    timeCounter.innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast();
    }
  }, 1000);

}



// ITERATION 3: Show Toast
const toastCard = document.getElementById("toast");
// Your code goes here ...
function showToast(message) {
  console.log("showToast called!");
  toastCard.classList.toggle("show");
  setTimeout(function () {
    toastCard.classList.remove("show")
  }, 3000);
}



// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
const closeBtn = document.getElementById("close-toast");
closeBtn.addEventListener("click", () => {
  toastCard.classList.remove("show");
})

