const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

let startCountdownButton = document.getElementById('start-btn');
startCountdownButton.addEventListener('click', function() {
  startCountdown();
})




// ITERATION 2: Start Countdown
function startCountdown(message) {
  console.log("startCountdown called!");
  
  let startButton = document.getElementById('start-btn');
  startButton.disabled = true;
  
  let timer = setInterval(function() {
    console.log('timer called');
    let timerDiv = document.getElementById('time');
    let currentTime = parseInt(timerDiv.innerText);
    currentTime--;

    timerDiv.innerText = currentTime;

    if(currentTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if(currentTime === 5) {
      showToast("Start the engines! 💥");
    } else if(currentTime === 0) {
      showToast("Lift off! 🚀");
      clearInterval(timer);
      startButton.disabled = false;
    }

  }, 1000)

  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  let toastMessageDiv = document.getElementById('toast-message');
  toastMessageDiv.innerText = message;
  let toastDiv = document.getElementById('toast');
  toastDiv.classList.add('show');

  let toastTimer = setInterval(function() {
    toastDiv.classList.remove('show');
  }, 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  let toastCloseButton = document.getElementById('close-toast');
  toastCloseButton.addEventListener('click', function() {
    toastDiv.classList.remove('show');
  });

}
