const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startCountdown)


// ITERATION 2: Start Countdown
  // Your code goes here ...

  let timerContainer = document.getElementById('time')
  function startCountdown() {
    console.log("startCountdown called!");
    document.getElementById('start-btn').disabled = true;
    timer = setInterval(() => {
      remainingTime--;
      timerContainer.innerHTML = `${remainingTime}`;
      if (remainingTime <= 0) {
        clearInterval(timer);
        showToast();
      }
    }, 1000)
  }


// ITERATION 3: Show Toast
let toast = document.getElementById('toast')
function showToast(message) {
  console.log("showToast called!");
  
 

  // Your code goes here ...
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show')
  },3000)
 



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}