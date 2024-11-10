const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button


const startButton = document.getElementById("start-btn");
const time = document.getElementById("time");
const toast = document.getElementById("toast");
const closeToast = document.getElementById("close-toast");
const messageToast = document.getElementById("toast-message");

startButton.addEventListener("click", () => {
  startCountdown();
})




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startButton.disabled = true;

  timer = setInterval(() => {
    if (remainingTime > 0) {

      if (remainingTime === 10) {
        showToast("⏰ Final countdown! ⏰");
      } else if ( remainingTime === 5) {
        showToast("Start the engines! 💥")
      }
      remainingTime--;
      time.textContent = remainingTime; 
    } else {
      clearInterval(timer); 
      time.textContent = 0; 
      showToast("Lift off! 🚀");
    }
  }, 1000); 
}





// ITERATION 3: Show Toast
function showToast(message) {

  messageToast.textContent = message;

  console.log("showToast called!");
  toast.classList.add("show");  

  setTimeout(() => {
    toast.classList.remove("show");
    startButton.disabled = false;  
  }, 3000); 

  closeToast.addEventListener("click", () => {
    toast.classList.remove("show");
    startButton.disabled = false;
    time.textContent = DURATION;
  })

}
