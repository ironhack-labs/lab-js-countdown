const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...


const startButton = document.getElementById('start-btn');


startButton.addEventListener('click', startCountdown);



// ITERATION 2: Start Countdown

function startCountdown() {
  console.log("startCountdown called!");

  
  startButton.disabled = true;

  
  timer = setInterval(() => {
    remainingTime--;

    
    const timeElement = document.getElementById('time');
    timeElement.textContent = remainingTime;

    
    if (remainingTime === 0) {
      clearInterval(timer); 
      showToast("Lift off! 🚀"); 
    }
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  
  const toastElement = document.getElementById('toast');
  toastElement.classList.add('show');

  
  const toastMessage = document.getElementById('toast-message');
  toastMessage.textContent = message;

  
  setTimeout(() => {
    toastElement.classList.remove('show'); 
    remainingTime = DURATION; 
    startButton.disabled = false; 
  }, 3000);





  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeButton = document.getElementById('close-toast');
  closeButton.addEventListener('click', closeToast);
  
  
  function closeToast() {
    console.log("closeToast called!");
  
    
    clearTimeout(timer);
  
    
    const toastElement = document.getElementById('toast');
    toastElement.classList.remove('show');
  
    // Reset remaining time and enable the start button
    remainingTime = DURATION;
    startButton.disabled = false;
  }


  
}

