const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector('#start-btn');
startButton.addEventListener("click", () => {
  startCountdown();
});



// ITERATION 2: Start Countdown
// Your code goes here ...
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;
  let displayCountdown = document.querySelector('#time');
  displayCountdown.textContent = remainingTime;
  showToast('⏰ Final countdown! ⏰');

  timer = setInterval(() => {
    remainingTime--;
    displayCountdown.textContent = remainingTime;
    if (remainingTime === 5) { 
      showToast('Start the engines! 💥');
    } else if (remainingTime <= 0) {
      clearInterval(timer);
      showToast('Lift off! 🚀');
      startButton.disabled = false;
      remainingTime = DURATION;
    }
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...
  const toast = document.querySelector('#toast');
  const toastMessage = document.querySelector('#toast-message');
  toastMessage.textContent = message;
  toast.classList.add('show');
  setTimeout(() => { 
    toast.classList.remove('show');
  }, 3000);
  
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  // Your code goes here ...
  const closeToast = document.querySelector('#close-toast');
  closeToast.addEventListener("click", () => {
    toast.classList.remove('show');
  });

}
