const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const toast = document.getElementById("toast");
const toastList = toast.classList;


// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", function (e) {
  return startCountdown();
});


// ITERATION 2: Start Countdown
const timerDisplay = document.getElementById("time")
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  timer = setInterval(() => {
    if (remainingTime <= 0) {
      remainingTime = 10
      clearInterval(timer); // Stop the interval when the countdown ends
      showToast();
      console.log("Countdown complete!");
      return;
    }
    remainingTime--;
    console.log(remainingTime) // Decrement the duration
    timerDisplay.innerHTML = remainingTime; // Update the display
  }, 1000);
}



// ITERATION 3: Show Toast
function showToast(message) { 
  console.log("showToast called!");

  // Your code goes here ...
  toastList.add("show");
  toast.style.display = 'block';
}


// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
const closeBtn = document.getElementById("close-toast");
closeBtn.addEventListener("click", hideToast);

function hideToast(message) {
  toastList.remove("show");
  toast.style.display = 'hidden';
}

