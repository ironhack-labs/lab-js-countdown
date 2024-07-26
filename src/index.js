const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById('start-btn')
startButton.addEventListener('click',startCountdown);

const timeElement = document.getElementById('time');
startButton.addEventListener('click',startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  if (timer !== null) return
  console.log("startCountdown called!");
}
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  if (timer) {
    clearInterval(timer); 
}

remainingTime = DURATION; 
timeElement.innerText = remainingTime;

startButton.disabled = true; 

    timer = setInterval(() => {
        remainingTime--;
        timeElement.innerText = remainingTime;

        if (remainingTime === 0) {
            clearInterval(timer); 
            showToast(); 
            startButton.disabled = false;; 
        }
    }, 1000);
  }




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  
    let toastCard = document.getElementById('toast');
    
    toastCard.classList.add('show');
    
    setTimeout(function() {
      toastCard.classList.remove('show');
    }, 3000);
  



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}

