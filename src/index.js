const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let intervalId;




// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  const timeElement = document.querySelector("#time");
  const button = document.querySelector("#start-btn");
 button.disabled = true;

  timer = setInterval(() => {
    timeElement.textContent = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }

  //Bonus
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    remainingTime--;
  }, 1000);
  
}




// ITERATION 3: Show Toast
function showToast(message) {
 

  // Your code goes here ...
  const toastElement = document.querySelector("#toast");
  
  const toastMessage = document.querySelector("#toast-message");

  toastElement.classList.add("show");
  toastMessage.textContent = message;

  const timeOut = setTimeout(() => {
    toastElement.classList.remove(show);

  }, 3000);

  console.log("showToast called!");



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  
}