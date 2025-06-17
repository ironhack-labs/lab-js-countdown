const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimeout = null;


// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.getElementById("start-btn");
const timeDiv = document.getElementById("time");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
const closeToastBtn = document.getElementById("close-toast");

startBtn.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startBtn.disabled = true;
  remainingTime = DURATION;
  timeDiv.innerText = remainingTime;

  timer = setInterval(() => {
    remainingTime--;


  // Your code goes here ...

  if (remainingTime === 10) {
      showToast(" Final countdown! ");
    } else if (remainingTime === 5) {
      showToast("Start the engines! ");
    } else if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! ");
      startBtn.disabled = false;
    }

    timeDiv.innerText = remainingTime;
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toast.classList.add("show");
  toastMessage.innerText = message;

  // BONUS: Iteration 4 - allow closing early
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  closeToastBtn.addEventListener("click", () => {
  toast.classList.remove("show");
  clearTimeout(toastTimeout);
});


