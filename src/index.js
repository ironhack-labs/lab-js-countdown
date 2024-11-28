const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let blueButton = document.getElementById('start-btn');
blueButton.addEventListener('click', (startCountdown));




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  
  
  
  let timerElement = document.getElementById('time');
  let timeRemaining = parseInt(timerElement.textContent);

  let countDown = startCountdown = setInterval(() => {
   if(timeRemaining > 0) {
    timeRemaining -= 1;
    timerElement.textContent = timeRemaining;
    document.getElementById('start-btn').disabled = true;
  } else {
    timeRemaining = timerElement
    showToast();
    document.getElementById('start-btn').disabled = false;  
  }
  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.querySelector('.toast#toast');
  

  toast.classList.add("show");

  setTimeout (() => {
  toast.classList.remove('show')
  }, 3000);
  
  
}
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


