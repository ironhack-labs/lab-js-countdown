const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);
const timeDisplay = document.getElementById("time");
const toastMessage = "Lift off! 🚀"; 



// ITERATION 2: Start Countdown
function startCountdown() {

  console.log("startCountdown called!");

  startButton.disabled = true;
  timer = setInterval(() => {
    timeDisplay.innerText = remainingTime--;
    if (remainingTime < 0) {
      clearInterval(timer);
      startButton.disabled = false;
      showToast(toastMessage); 
    }
  }, 1000);
}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  toast.innerText = message;
  toast.classList.add("show");
  console.log("Added 'show' class");

  setTimeout(() => {
    toast.classList.remove("show");
    console.log("Removed 'show' class");
  }, 3000);
}


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

