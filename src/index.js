const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

let startButton = document.getElementById("start-btn");

// ITERATION 1: Add event listener to the start button
//
// Your code goes here ...
startButton.addEventListener("click", startCountdown);

let timeContainer = document.getElementById("time");
let toast = document.getElementById("toast");
let closeToast = document.getElementById("close-toast");
let toastMessage = document.getElementById("toast-message");


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  let remainingTime = DURATION;
  timeContainer.innerHTML = `${remainingTime}`;

  timer = setInterval(() => {
    timeContainer.innerHTML = `${remainingTime}`;

    if(remainingTime === 10){
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5){
      showToast("Start the engines! 💥");
    } else if (remainingTime <= 0){
      showToast("Lift off! 🚀");
      clearInterval(timer);
      remainingTime = DURATION;
      return;
    }
    remainingTime--;
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toast.classList.toggle("show");
  toastMessage.innerHTML = message;

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


// BONUS: ITERATION 4: TOAST CLOSE BUTTON

closeToast.addEventListener("click", () => {
  toast.classList.remove("show");
});
