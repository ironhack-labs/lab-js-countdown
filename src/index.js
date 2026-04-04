const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", () => {
  startCountdown();
});

const htmlTimeElement = document.getElementById("time");

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  timer = setInterval(() => {
    if (remainingTime > 0) {
      startButton.disabled = true;
      if( remainingTime === 10){
        showToast("⏰ Final countdown! ⏰")
      } 
      if (remainingTime === 5){
        showToast("Start the engines! 💥")
      }
      remainingTime--;
      htmlTimeElement.innerText = remainingTime;
    } else if (remainingTime == 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀")
      startButton.disabled = false;
    }
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toast = document.getElementById("toast")
  toast.innerText = message;
  toast.classList.add("show")
  setTimeout(() => {
    toast.classList.remove("show")
  },3000)

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
