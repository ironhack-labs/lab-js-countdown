const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
// Get the start button element
const strBtn = document.getElementById("start-btn");
strBtn.addEventListener("click",() =>{
  startCountdown();
});




// ITERATION 2: Start Countdown
let countdownInterval; // store the interval so we can clear it later
function startCountdown() {
  console.log("startCountdown called!");
  let remainingTime = 10; // countdown starts at 10 seconds
  const timeDisplay = document.getElementById("time");
  const startButton = document.getElementById("start-btn");

  // disable the button during countdown
  startButton.disabled = true;

  // display the initial time immediately
  timeDisplay.textContent = remainingTime;

  // start the countdown timer
  countdownInterval = setInterval(() => {
    remainingTime--;

    // update time on each tick
    timeDisplay.textContent = remainingTime;

    // when countdown reaches 0
    if (remainingTime === 0) {
      clearInterval(countdownInterval); // stop the timer
      showToast(); // will implement later
      startButton.disabled = false; // re-enable the button
    }
  }, 1000);
  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.getElementById("toast");

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
