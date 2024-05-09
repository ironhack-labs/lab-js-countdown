const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

let button = document.getElementById("start-btn");

button.addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
    console.log("startCountdown called!");
  

  // Your code goes here ...
    
  let timerElement = document.getElementById("time");

  let countdownInterval = setInterval(function() {
    remainingTime--;

      let seconds = remainingTime % 60;

      let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

      timerElement.textContent = formattedSeconds;

      if (remainingTime <= 0) {
          clearInterval(countdownInterval);
          showToast()
      }
  }, 1000); 
}




// ITERATION 3: Show Toast
function showToast(message) {
 if (remainingTime = 10) {
  let toast = document.getElementById ('toast')
  toast.classList.add('show');
    setTimeout(function() {
    toast.classList.remove('show');
}, 3000);
 }
 else if (remainingTime = 5) {

 }
 else if (remainingTime = 0) {
  let toast = document.getElementById ('toast')
  toast.classList.add('show');
    setTimeout(function() {
    toast.classList.remove('show');
}, 3000);


  console.log("showToast called!");
}
}

  
  // Your code goes here ...
// document.querySelector('#toast').classList.add('show')





  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
