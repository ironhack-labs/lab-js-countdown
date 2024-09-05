const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const countDownNode = document.querySelector("#time");
const startButtonNode = document.querySelector("#start-btn");
startButtonNode.addEventListener("click", () => {
  startCountdown();
});


// ITERATION 2: Start Countdown
function startCountdown() {
  // Your code goes here ...
  console.log("startCountdown called!");
  showToast("⏰ Final countdown! ⏰");
  if (timer !== null) return;

  timer = setInterval(() => {
    remainingTime -= 1;
    countDownNode.innerText = remainingTime;
    startButtonNode.disabled = true;
    if (remainingTime === 5){
      showToast("Start the engines! 💥");
    }else if (remainingTime === 0) {
      clearInterval(timer);
      timer = null;
      //startButtonNode.disabled = false;
      showToast("Lift off! 🚀");
    }
  }, 1000);
  
}




// ITERATION 3: Show Toast
function showToast(message) {
  // Your code goes here ...
  const toastNode = document.querySelector("#toast");
  const toastMessageNode = document.querySelector("#toast-message")
  const closeToastButton = document.querySelector("#close-toast");
  toastNode.classList.add("show");

  toastMessageNode.innerText = message; 

  toastNode.classList.add("show");

  const autoHideTimeout = setTimeout(() => {
    toastNode.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeToastButton.addEventListener("click", () => {
    toastNode.classList.remove("show"); 
    clearTimeout(autoHideTimeout); 
  });
}
