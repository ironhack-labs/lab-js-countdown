const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const messageText = document.getElementById("toast-message"); 

// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown)

// ITERATION 2: Start Countdown
const secondsLeft = document.getElementById("time");

function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;

  // Your code goes here ...
  const id = setInterval(() => {
    remainingTime--;
    secondsLeft.innerText = remainingTime;
    
    if(remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } 
    else if (remainingTime <= 0) {
      showToast("Lift off! 🚀"),
      clearInterval(id)
    }}
  ,1000);


// ITERATION 3: Show Toast

function showToast(message) {
  console.log("showToast called!");
  
  const toaster = document.getElementById("toast"); 
  toaster.style.display = "block";
  toaster.classList.add("show");
  messageText.innerText = message;
  
  setTimeout(() => {
    toaster.classList.remove("show");
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeButton = document.getElementById("close-toast");
  closeButton.addEventListener("click", () => {
    toaster.classList.remove("show");
    clearInterval(id)
  })
}}
