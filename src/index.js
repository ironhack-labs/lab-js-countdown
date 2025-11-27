const startCountdownElement = document.getElementById("start-btn");
const timeElement = document.getElementById("time");
const toastElement = document.getElementById("toast");
const closeTostButtonElement = document.getElementById ("tost")
const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startCountdownElement.addEventListener("click", () => {
  startCountdown();
});



// ITERATION 2: Start Countdown
function startCountdown() {
  let remainingTime = DURATION;
  timeElement.innerText = remainingTime;
  console.log("startCountdown called!");
  timer = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime;
    startCountdownElement.disabled = true;
    if (remainingTime === 0) {
      setTimeout(() => {
        showToast();
      });
      clearInterval(timer);
      startCountdownElement.disabled = false;
    }
  }, 1000);

  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastElement.classList.add("show");
  let toastTimer = 3;
  const toast = setInterval(() => {
    toastTimer--;
    if (toastTimer <= 0) {
      clearInterval(toastTimer);
      toastElement.classList.remove("show");
    }
  }, 1000);
  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
closeTostButtonElement.addEventListener("click", () => {
  toastElement.classList.remove("show");  
 })
}
