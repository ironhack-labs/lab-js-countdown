const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector('#start-btn');

startButton.addEventListener('click', () => startCountdown())



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  
  // Your code goes here ...
  
  // Create a variable for the counter div
  const divRemainingTime = document.querySelector('#time');

  // Reset the counter
  remainingTime = DURATION;
  divRemainingTime.innerHTML = remainingTime;

  // Set the toast message
  let popUpMessage = "⏰ Final countdown! ⏰"
  showToast(popUpMessage);
  
  // Disable the start button
  startButton.disabled = true;

  // Timer interval function
  timer = setInterval(() => {

    // Update counter
    if (remainingTime > 0) remainingTime--;
    divRemainingTime.innerHTML = remainingTime;
    
    switch (remainingTime) {
      case 5:
        popUpMessage = "Start the engines! 💥"
        showToast(popUpMessage);
        break;
          
      case 0:
        popUpMessage = "Lift off! 🚀"
        clearInterval(timer);           // Stops the timer
        showToast(popUpMessage);
        startButton.disabled = false;   // Enables the start button
        break;
            
      default:
        break;
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  
  // Your code goes here ...
  const divToast = document.querySelector('#toast');
  const toastMessage = document.querySelector('#toast-message');
  toastMessage.innerHTML = message;
  divToast.classList.add('show');
  

  const toastTimeout = setTimeout(() => {
    divToast.classList.remove('show');    
  }, 3000);
  
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  
  // Your code goes here ...
  const closeButton = document.querySelector('#close-toast');
  closeButton.addEventListener('click', () => {
    clearTimeout(toastTimeout);
    divToast.classList.remove('show');
  })
}

