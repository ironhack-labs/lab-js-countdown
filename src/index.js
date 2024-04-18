const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.querySelector("#start-btn")
startButton.addEventListener("click", startCountdown)

// as long as I don't pass any arguments I can directly pass function name w/o parantheses
// otherwise this format would be better:
// startButton.addEventListener("click", function(){
//   startCountdown();
// })

const timeDiv = document.querySelector("#time")

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true; // hide button during countdown
  timeDiv.innerHTML = remainingTime; // make sure correct remaining time is displayed at start
  const countdown = setInterval(function (){
      if(remainingTime > 0) {
        remainingTime--;
        timeDiv.innerHTML = remainingTime;
      } 
      if(remainingTime === 0) {
        clearInterval(countdown); //stop countdown interval
        showToast()
        startButton.disabled = false; // show start button again
        remainingTime = 10; // reset remainingTime and exit Interval
      }
    }, 1000)
  // Your code goes here ...
}


// Start the countdown timer using setInterval() that runs in intervals of 1 second (1000 milliseconds).
// On each interval tick, the remaining time (seconds) should be decreased by 1.
// On each interval tick, the div#time element should be updated to display the remaining time.
// When the remaining time reaches 0, the countdown timer should be stopped.
// When the remaining time reaches 0, the showToast() function should be called to display a toast message to the user (you'll implement this function in the next iteration).


// Show the toast card element (div#toast), which is initially hidden.
// To do this, add the class "show" to the element's class list. You can use classList methods to do this.
// Set a timeout of 3 seconds (3000 milliseconds), after which the toast card should be hidden again.
// To hide the toast card back, simply remove the class "show" from the element's class list.

const toastDiv = document.querySelector("#toast");
const closeToastX = document.querySelector("#close-toast")

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastDiv.classList.toggle("show")
  // Your code goes here ...
 const toastDisappearTimer = setTimeout(function(){
    toastDiv.classList.toggle("show")
  }, 3000)
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  // Your code goes here ...
  closeToastX.addEventListener("click", function(){
  toastDiv.classList.toggle("show");
  clearTimeout(toastDisappearTimer);
  })
}



// The toast card element has a close button (span#close-toast), which currently doesn't do anything. The button should allow the user to close the toast card, even before the 3 seconds timeout is reached.

// Add a 'click' event listener to the close button. When clicking the "x" button, the event should clear the timeout and hide the toast card. To make the toast card disappear, you need to remove the class "show" from the element's class list, in the same way you did in the previous iteration.

