const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...




// ITERATION 2: Start Countdown
let   noOfSecs = 10;
const startButton = document.querySelector('#start-btn');

function startCountdown() {
  startButton.disabled = true;
  showToast('⏰ Final countdown! ⏰');
  console.log("startCountdown called!");

  // Your code goes here ...
  const countDown10 = setInterval(()=>{
    noOfSecs--;

    const countDownText = document.querySelector('#time');
    countDownText.textContent = noOfSecs;

    if(noOfSecs === 5){
      showToast('Start the engines! 💥');
    }
    else if(noOfSecs === 0){
      clearInterval(countDown10);
      showToast('Lift off! 🚀');
    }

  }, 1000)
}


startButton.addEventListener('click', ()=> startCountdown());


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...

  const toastMessage = document.querySelector('#toast-message');
  toastMessage.textContent = message;

  const divToast = document.querySelector('#toast');
  divToast.classList.add('show');

  const toastHideTime = setTimeout(() => {
    divToast.classList.remove('show');
  }, 3000);  

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeToast = document.querySelector('#close-toast');
  closeToast.addEventListener('click', ()=> {
    clearTimeout(toastHideTime);
    divToast.classList.remove('show');
  });
}
