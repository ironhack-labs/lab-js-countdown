const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

let divToast = document.getElementById("toast");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  showTime = document.getElementById("time");

  startButton.disabled = true;

  timer = setInterval(() => {
    remainingTime--;
    showTime.innerHTML = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      startButton.disabled = false;
      showToast();
    }
    
  }, 1000)
  
}







// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
 divToast.classList.toggle("show");

  setTimeout(() => {
    divToast.classList.remove("show");
  }, 3000);




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
