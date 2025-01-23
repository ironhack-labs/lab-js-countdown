const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
});




// ITERATION 2: Start Countdown
function startCountdown() {
  let countdownTimer = 10;
  startBtn.disabled = true;

  const IntervalTimer = setInterval(() => {
    countdownTimer--;

    document.getElementById("time").textContent = countdownTimer;

    if(countdownTimer===0) {
      clearInterval(IntervalTimer);
      startBtn.disabled = false;
      showToast();
    }
  },1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  const toastMsg = document.getElementById("toast");
  toastMsg.classList.add("show");

  setTimeout(() => {
    toastMsg.classList.remove("show");
  },3000);

  startBtn.addEventListener("click", startCountdown);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
