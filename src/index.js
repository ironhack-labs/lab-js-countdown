const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

document.getElementById("start-btn").addEventListener("click", function() {
  startCountdown();
});





// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  
  const timer = setInterval(() => {
  remainingTime--;
  document.getElementById("time").innerText = remainingTime;

  if (remainingTime <= 0) {
    clearInterval(timer);
    showToast();
  }
  }, 1000);
}



// ITERATION 3: Show Toast
function showToast(message) {
  message = document.querySelector('#toast-message');
  message = document.querySelector('.toast');
  message.classList.add('show');
  return message
}
  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

document.getElementById('close-toast').addEventListener("click", () => {
  toast.classList.remove('show');
})


