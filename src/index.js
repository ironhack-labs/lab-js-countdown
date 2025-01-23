const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const starButton = document.getElementById("start-btn");
starButton.addEventListener("click", startCountdown);





// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  const timeDisplay = document.getElementById("time");
  const startButton = document.getElementById("start-btn");
  startButton.disabled = true;

  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.innerText = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startButton.disabled = false;
      remainingTime = DURATION;
    }
  },1000);

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  
  toastMessage.innerText=message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


