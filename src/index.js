const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const timerNode = document.getElementById("time");
const startButton = document.getElementById("start-btn")
toastMessage = document.getElementById("toast");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startButton.addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  const toastArr = ["⏰ Final countdown! ⏰", "Start the engines! 💥", "Lift off! 🚀" ];
  startButton.disabled = true;
  timer = setInterval(() => {
    remainingTime--;
    timerNode.innerText = remainingTime;

    if (remainingTime === 9) {
       showToast(toastArr[0]);
    } 
    
    if (remainingTime === 5) {
      showToast(toastArr[1]);
   }

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast(toastArr[2]);
    }  
  }, 1000)
}

// ITERATION 3: Show Toast
function showToast(message) {
  
  document.getElementById("toast-message").innerText = message; 
  const clase = toastMessage.classList;
  clase.add("show");
  
  setTimeout(() => {
    clase.remove("show")
  }, 3000);
  
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  document.getElementById("close-toast").addEventListener("click", () => {
    clase.remove("show");
  })   
}
