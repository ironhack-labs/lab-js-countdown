const DURATION =10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

document.getElementById('start-btn').addEventListener('click', startCountdown);





// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
let remainingTime = 10;
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start-btn');

startButton.disabled = true;

const countdownInterval = setInterval(() => {
  remainingTime--;
  timeDisplay.textContent = 
  remainingTime; 

  if (remainingTime === 10) { 
    showToast ("⏰ Final countdown! ⏰");
  } else if (remainingTime === 5) 
  {
    showToast("Start the engines!💥");
  } else if (remainingTime <= 0)
{ 
    clearInterval(countdownInterval); 
    showToast("Lift off!🚀");
    startButton.disabled = false; 
  }
},1000);
  }


// ITERATION 3: Show Toast
function showToast(message) {
const toast = document.getElementById('toast');

const toastMessage = document.getElementById('toast-message');
toastMessage.textContent = message; 
toast.classList.add('show');

const closeButton = 
document.getElementById('close-toast');
let toastTimeout = setTimeout(() => {
  toast.classList.remove('show');
}, 3000);

closeButton.addEventListener('click', () => {
  clearTimeout(toastTimeout); 
  toast.classList.remove('show');
} );

}

  //console.log("showToast called!");

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

//function showToastOff() {
//  const toast = document.getAnimations('toast');document.classList.add('close-toast');

 // setTimeout(() => { toast.classList.remove('toast');    },40);
 // }





