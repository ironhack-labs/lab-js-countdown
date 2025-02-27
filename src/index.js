const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtnElement = document.getElementById("start-btn");
const timeElement = document.getElementById("time");

timeElement.innerHTML = remainingTime;

startBtnElement.addEventListener("click", e => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  if(remainingTime == 10){
    showToast("⏰ Final countdown! ⏰");
  }
  startBtnElement.disabled = true;
  // Your code goes here ...
  timer = setInterval(() => {
    if (remainingTime > 0) {
      if(remainingTime == 6){
        showToast("Start the engines! 💥");
      }
      timeElement.innerText = remainingTime-1;
      remainingTime--;
    } else {
      showToast("Lift off! 🚀");
      clearInterval(timer);
      startBtnElement.disabled = false;
    }
  }, 1000);

}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...
  const toastMessageElement = document.getElementById("toast-message");
  toastMessageElement.innerText = message;
  
  const showToastElement = document.getElementById("toast");
  showToastElement.classList.add("show");
  setTimeout(() => {
    showToastElement.classList.remove("show");
    // remainingTime = DURATION;
    // timeElement.innerText = remainingTime;
    if(remainingTime <= 0 ){
      remainingTime = DURATION;
      timeElement.innerText = remainingTime;
    }
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeToastElement = document.getElementById("close-toast");
  closeToastElement.addEventListener("click", () => {
    showToastElement.classList.remove("show");
    if(remainingTime <= 0 ){
      remainingTime = DURATION;
      timeElement.innerText = remainingTime;
    }
  });
}
