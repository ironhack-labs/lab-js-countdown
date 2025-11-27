const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const timeDisplay = document.getElementById('time')
const toast = document.getElementById('toast')
const closeButton = document.getElementById('close-toast');
const toastMessage = document.getElementById('toast-message');
// ITERATION 1: Add event listener to the start button
// Your code goes here ...

  const startButton = document.getElementById('start-btn');
   
  startButton.addEventListener('click', startCountdown);




// ITERATION 2: Start Countdown
// Your code goes here ...
function startCountdown() {
  startButton.disabled = true;
  
  timeDisplay.innerText = remainingTime;
    
 
 timer = setInterval(() => {
    remainingTime --;
    timeDisplay.innerText = remainingTime;

    if(remainingTime === 9){
      showToast("Final countdown!")
    }
    else if(remainingTime === 5){
      showToast("Start the Engines!")
    }


    else if (remainingTime <= 0){
    clearInterval(timer);
    startButton.disabled = false;
    showToast("Lift off!");
    remainingTime = DURATION;
    timeDisplay.innerText = remainingTime;
  }
}, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {

  toastMessage.innerText = message;
  
  // Your code goes here ...
  toast.classList.add('show')
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000)



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeButton.addEventListener('click', () => {
    toast.classList.remove('show');
  })

}
