const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const buttonStart = document.getElementById("start-btn");
const numberText = document.getElementById("time");
buttonStart.onclick = startCountdown


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  if (timer) {
    clearInterval(timer);
  } 
  remainingTime = DURATION;
  numberText.textContent = remainingTime;
  timer = setInterval(() => {
    remainingTime--;
    numberText.textContent = remainingTime; 
    buttonStart.disabled = true;
    if (remainingTime <= 0) {
      clearInterval(timer);
      numberText.textContent = DURATION;
      remainingTime = DURATION;
      buttonStart.disabled = false;
      showToast("Time's up!");
    }
  }, 1000);

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // Hide the toast after 3 seconds

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
