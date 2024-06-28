const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const startBtnCountdown = document.querySelector("#start-btn");
let displayCuentaAtras = document.querySelector("#time");
let toastAlert = document.querySelector("#toast")

let closeBtn = document.querySelector("#close-toast")

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startBtnCountdown.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  const intervalId = setInterval(() => {
    remainingTime--;
    displayCuentaAtras.innerText = remainingTime;
      showToast("⏰ Final countdown! ⏰")
    if(remainingTime === 5) {
      showToast("Start the engines! 💥")
    }
    if (remainingTime <= 0) {
    clearInterval(intervalId);
    showToast("Lift off! 🚀");
  }
}, 1000);
startBtnCountdown.disabled = true
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  let msg = document.querySelector("#toast-message")
  msg.innerHTML = message
  toastAlert.classList.add("show")
 setTimeout (() => {
    toastAlert.classList.remove("show")
  
  }, 3000)

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeBtn.addEventListener("click",() => {
    toastAlert.classList.remove("show")
  
  })
}
