const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);





// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startButton.disabled = true;
  const timeElement = document.getElementById("time");
  timeElement.innerText = remainingTime;

  
  timer = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime;
if (remainingTime === 10) {
      showToast("Final countdown!");
    }

    if (remainingTime === 5) {
      showToast("Start the engines!");
    }

    
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! ");
      startButton.disabled = false;
      remainingTime = DURATION; 
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  const closeButton = document.getElementById("close-toast");

  toastMessage.innerText = message;
toast.classList.add("show");

  
  setTimeout(() => {

  }, 3000);

  closeButton.addEventListener("click", () => {
    toast.classList.remove("show");
  });
}
