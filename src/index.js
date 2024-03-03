const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', ()=>{startCountdown()})




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  
  // Your code goes here ...
  timerElement = document.getElementById("time");
  document.getElementById('start-btn').disabled = true;
  let countdownTimer = 10;
  const countdownInterval = setInterval(function () {
    if (countdownTimer > 0) {
      console.log(countdownTimer);
      
    } else {
      console.log('Pop!');
      clearInterval(countdownInterval);
      showToast();
    }
    timerElement.innerText = countdownTimer;
    countdownTimer --;
    

  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  document.getElementById('toast').classList.add('show');
  toastTimer = setInterval(function () {
    document.getElementById('toast').classList.remove('show');
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const toastCloseButton = document.getElementById('close-toast');
  toastCloseButton.addEventListener('click', ()=>{closeToast()})
}

function closeToast() {
  clearTimeout(toastTimer);
  document.getElementById('toast').classList.remove('show');
}

