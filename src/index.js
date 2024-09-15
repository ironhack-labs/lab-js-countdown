const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  const timerElm = document.getElementById("time");
  showToast("⏰ Final countdown! ⏰")

  const clock = setInterval(() => {
    timerElm.innerHTML = remainingTime;
    if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    } else if (remainingTime === 0) {
      showToast("Lift off! 🚀")
      clearInterval(clock)
    }
    remainingTime -= 1;
  },1000 )
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastMsgElm = document.getElementById("toast-message");
  toastMsgElm.innerHTML = message;

  const toastElm = document.getElementById("toast");
  toastElm.classList.add("show");

  const toastTimeElm = setTimeout(() => {
    toastElm.classList.remove("show");
  },3000 )





  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeToastBtnElm = document.getElementById("close-toast");
  closeToastBtnElm.addEventListener("click", () => {
    toastElm.classList.remove("show");
  })
}
