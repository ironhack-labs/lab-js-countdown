const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startBtn = document.getElementById("start-btn")

startBtn.onclick = function (){
  return startCountdown()
}



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  const time = document.getElementById("time")
  startBtn.disabled = true
  timer = setInterval (()=> {
    

    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    remainingTime--
    time.innerHTML = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer)
      showToast("Lift off! 🚀")
    }
  }, 1000); 
}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

toastMessage.innerHTML = message
toast.classList.add("show")

setTimeout (()=> {
  toast.classList.remove("show")
}, 3000);

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
const closeToastBtn = document.getElementById ("close-toast")

closeToastBtn.onclick = function () {
  toast.classList.remove("show")
  clearInterval(timer)
}
}
// Iteración 5 | Más brindis
