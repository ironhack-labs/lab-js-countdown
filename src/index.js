const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

let btnCounter = document.querySelector("#start-btn");
btnCounter.addEventListener("click", startCountdown);







// Your code goes here ...




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...

  const timeDiv = document.querySelector("#time");
  const startBtn = document.querySelector("#start-btn");

  // Disable the start button to prevent multiple clicks
  startBtn.disabled = true;
  timer = setInterval(function () {

  timeDiv.innerText = remainingTime;
  remainingTime--;

  if (remainingTime < 0) {
    clearInterval(timer);

    remainingTime = DURATION; // Reset remaining time
    timeDiv.innerText = remainingTime;
    showToast("Lift off! 🚀"); // Show toast message
    startBtn.disabled = false; // Re-enable the start button
    let toastTimeOut = null;
}
}, 1000);

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.querySelector("#toast");
  const toastMessage = document.querySelector("#toast-message");

  toastMessage.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
