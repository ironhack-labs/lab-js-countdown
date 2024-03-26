const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timeDisplay = document.querySelector("#time");
let getToast = document.querySelector("#toast");


// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  startButton.disabled = true; 
  console.log("startCountdown called!");
  timer = setInterval(function () {
    remainingTime--;
    displayTime(remainingTime);
    if ( remainingTime <= 0) {
    clearInterval(timer);
    showToast();
    startButton.disabled = false; 
    }

  }, 1000)


  // Your code goes here ...
}
function displayTime(time) {
  timeDisplay.textContent = time;
}




// ITERATION 3: Show Toast
function showToast() {
  console.log("showToast called!");
  getToast.classList.add("show");
setTimeout(function () {
  getToast.classList.remove("show")
}, 3000);
  // Your code goes here ...


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
