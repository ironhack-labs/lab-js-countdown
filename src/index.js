const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn");
startButton.addEventListener('click', startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {

  startButton.setAttribute("disabled", true);
  const timeText = document.getElementById("time");


  const countdownInterval = setInterval(() => { 
   
    timeText.textContent = remainingTime;

    if (remainingTime !== 0){
    
      switch (remainingTime) {
        case 10:
          showToast("⏰ Final countdown! ⏰");
          break;
        case 5:
          showToast("Start the engines! 💥");
          break;
      }
      
      remainingTime--;

    } else if (remainingTime === 0) {
      showToast("Lift off! 🚀");
      clearInterval(countdownInterval);
      remainingTime = DURATION;
      
      setTimeout(() => {
        timeText.textContent = remainingTime;
        startButton.removeAttribute("disabled", false);
      }, 3000);
    }    
 
  }, 1000);
 
}




// ITERATION 3: Show Toast
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  const toastCloseButton = document.getElementById('close-toast');

  toastMessage.textContent = message;
  toast.classList.add('show');
    
  const toastTimeout = setTimeout(()=>{
    toast.classList.remove("show");
  }, 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const closeToast = () => {
    clearTimeout(toastTimeout);
    toastCloseButton.classList.remove("show");
    toast.classList.remove("show");
  };
 
  toastCloseButton.addEventListener('click', closeToast);
}
