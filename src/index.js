const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector('#start-btn');
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  document.getElementById("start-btn").innerHTML;
  document.getElementById("start-btn").disabled = true;
  console.log("startCountdown called!");

  // Your code goes here ...
const timerCount = document.getElementById("time");
timer = setInterval(() => {
  if(remainingTime >= 0){
    timerCount.textContent = remainingTime;
    remainingTime--;
  } else {
    clearInterval(timer);
    showToast(" Lift off! 🚀");
  }},1000);
 
  };


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...
  const toastElement = document.getElementById("toast");
  toastElement.classList.add("show");
  setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  // Your code goes here ...
  const closeToast = document.querySelector("#close-toast");
  closeToast.addEventListener("click", () => {
    toastElement.classList.remove("show");
    clearTimeout(timeout);
  });

}
