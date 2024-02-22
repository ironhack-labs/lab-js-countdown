const DURATION = 3; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById('start-btn');
const textTime = document.getElementById('time')
startButton.addEventListener("click", () => {
  startCountdown()
});

textTime.textContent = remainingTime
// ITERATION 2: Start Countdown
function startCountdown() {
  document.getElementById("start-btn").disabled = true;

  let timeDisplay = document.getElementById("time");

  let countdown = setInterval(() => {
    remainingTime--;

    timeDisplay.textContent = remainingTime;

    if (remainingTime === 0) {
      clearInterval(countdown);
      showToast();
      document.getElementById("start-btn").disabled = false;
    }
  }, 1000);
  // Your code goes here ...
  
}
let toastElement = document.getElementById("toast");


toastElement.addEventListener("click", ()=> toastElement.classList.remove("show"))

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  
  // Add the "show" class to display the toast
  toastElement.classList.add("show");


  setInterval(() => {
    toastElement.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
