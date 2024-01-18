const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  startCountdown()
})


let display = document.getElementById('time')

// ITERATION 2: Start Countdown
function startCountdown() {
  let i = remainingTime;
  const intervalID = setInterval(function () {
    display.innerHTML = i
    i--;
    if (i < 0) {
      clearInterval(intervalID);
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
