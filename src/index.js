const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.getElementById('start-btn').addEventListener('click', startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {

  console.log("startCountdown called!");

  // Your code goes here ...
  toggleButton(true); 
  updateTimer(remainingTime); 

  timer = setInterval(() => {
    updateTimer(--remainingTime); 
    if (remainingTime === 5) showToast("Start the engines! 💥"); 
    if (remainingTime <= 0) {
      clearInterval(timer); 
      showToast("Lift off! 🚀"); 
      toggleButton(false); 
    }
  }, 1000);
}





// ITERATION 3: Show Toast
function showToast(message) {
  
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.getElementById('toast');
  document.getElementById('toast-message').textContent = message;
  toast.classList.add('show'); 

  document.getElementById('close-toast').onclick = () => {
    toast.classList.remove('show');
  };

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  setTimeout(() => toast.classList.remove('show'), 3000);
}

const toggleButton = (state) => document.getElementById('start-btn').disabled = state;
const updateTimer = (time) => document.getElementById('time').textContent = time;
