const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startbtnNode = document.querySelector("#start-btn");
const timeNode = document.querySelector("#time");
startbtnNode.addEventListener("click",startCountdown)



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  startbtnNode.disabled = true
  remainingTime = DURATION;
  timeNode.textContent = remainingTime;
  timer = setInterval(() => {
    remainingTime--;
    timeNode.textContent = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast();
      startbtnNode.disabled = false;
      showToast("Lift off! 🚀");
    }
  }, 1000);
} 




// ITERATION 3: Show Toast
function showToast(message = "Lift off! 🚀") {
  console.log("showToast called!");

  // Your code goes here ...
const toastNode = document.querySelector("#toast");
const toastMessageNode = document.querySelector("#toast-message");

  toastMessageNode.textContent = message;
  toastNode.classList.remove("show");
  void toastNode.offsetWidth;
  toastNode.classList.add("show");
  toastTimeout = setTimeout(() => {
    toastNode.classList.remove("show");
  }, 3000);
}




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  
  const closeToastNode = document.querySelector("#close-toast");
  closeToastNode.addEventListener("click", () => {
    clearTimeout(toastTimeout);
    toastNode.classList.remove("show");
  });
