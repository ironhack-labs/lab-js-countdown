const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  if (timer) return; 

  timer = setInterval(function () {
    remainingTime--;
    const time = document.getElementById("time");
    time.innerText = `${remainingTime}`;

    if (remainingTime <= 0) {
      clearInterval(timer);
      timer = null; 
      remainingTime = DURATION; 
      showToast();
    }
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

