const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval


const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', () => {
  startCountdown();
});

function startCountdown() {
  console.log("startCountdown called!"); 

  const timeElement = document.getElementById('time');

  timeElement.innerText = remainingTime;

  startBtn.disabled = true;

  function countdownTick() {
    remainingTime--;  
    timeElement.innerText = remainingTime;  

  
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

 
    if (remainingTime <= 0) {
      showToast("Lift off! 🚀");
      clearInterval(timer); 
      return;
    }
  }

  
  timer = setInterval(countdownTick, 1000); 
}



function showToast(message) {
  const toast = document.getElementById('toast');
  const closeToastButton = document.getElementById('close-toast');

  const toastMessage = document.getElementById('toast-message');
  toastMessage.innerText = message;

  toast.classList.add('show');

  const toastTimeout = setTimeout(function () {
    toast.classList.remove('show');  
  }, 3000);

  closeToastButton.addEventListener('click', function () {
    clearTimeout(toastTimeout);  
    toast.classList.remove('show'); 
  });
};