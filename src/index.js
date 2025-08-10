const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let starterButtonNode = document.querySelector("#start-btn");
let timeElement = document.querySelector("#time");
starterButtonNode.addEventListener("click", () => {
  console.log("Clicking");
  startCountdown()
});

// ITERATION 2: Start Countdown
//The startCountdown() function should start a countdown timer that runs for 10 seconds. Every second, the shown remaining time should be decreased by 1. Once the the remaining time reaches 0, the countdown timer should stop.
//Here are the steps you should follow to implement the function logic:
//Start the countdown timer using setInterval() that runs in intervals of 1 second (1000 milliseconds).
//On each interval tick, the remaining time (seconds) should be decreased by 1.
//On each interval tick, the div#time element should be updated to display the remaining time.
//When the remaining time reaches 0, the countdown timer should be stopped.
//When the remaining time reaches 0, the showToast() function should be called to display a toast message to the user (you'll implement this function in the next iteration).


function startCountdown() {
  //console.log("startCountdown called!");

  // Your code goes here ...
  timer = setInterval(()=>{
  remainingTime-=1
  timeElement.innerText = remainingTime;
if (remainingTime === 10) {
      showToast("Final countdown!");
    }

    if (remainingTime === 5) {
      showToast("Start the engines!");
    }


    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! ");
      startButton.disabled = false;
      remainingTime = DURATION; 
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


