const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const startButton = document.querySelector('#start-btn');
function startCountdown() {
  console.log("startCountdown called!");
}
startButton.addEventListener ("click", () => {
  startCountdown(); //don't forget the brackets or it won't work
})

const htmlTimeElement = document.querySelector('#time');

// ITERATION 2: Start Countdown

function startCountdown() {
  console.log("startCountdown called!");

  let timerDuration = 10;

  const intervalId = setInterval(() => {
    htmlTimeElement.innerHTML = timerDuration;

    if (timerDuration === 0) {
      clearInterval(intervalId);
      console.log("showToast");
      return;
    }
    timerDuration--;

  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toastElement = document.querySelector ('#toast');
  toastElement.classList.add("show");

  

  




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
