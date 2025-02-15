const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
/*
- The start button is activated through a click
- the function StartCountdown() shows
*/ 

let startButton = document.querySelector("#start-btn");

startButton.addEventListener(("click"), () => {
  startCountdown();
});

console.log(startButton);




// ITERATION 2: Start Countdown
/* 
- The countdown goes down from 10 to 0
- The countdown is activated through the button
- The button should be disabled when the countdown is running
- The button should be enabled when the countdown is over
- The countdown should restart from 10 when the button is clicked again
- The countdown should be every second
*/

function startCountdown() {
  console.log("startCountdown called!");
  
  const timeElement = document.getElementById("time");

  // Disable the button when the function is called 
  startButton.disabled = true;
  
  // Reset the countdown if it's already finished
  if (timer) {
    clearInterval(timer); // Clear any previous timer
  }

  // Reset remaining time to 10 seconds
  remainingTime = DURATION;

  // Update the time display
  timeElement.textContent = remainingTime;

  // Start Timer
    timer = setInterval(() => {
      remainingTime --;
      timeElement.textContent = remainingTime;

      if (remainingTime === 0){
        clearInterval(timer);
        showToast("Lift off! 🚀"); // Pass the text as an argument
        startButton.disabled = false;
        DURATION = 10;
      } 
    }, 1000);
  }




// ITERATION 3: Show Toast
/*
- The toast should show after the countdown is over.
- The toast should close 3 seconds after being shown.
- The user should be able to close the toast manually by clicking on the X button
*/

function showToast(message) {
  // Log that the function has been called to the console (for debugging purposes).
  console.log("showToast called!");

  // Select the toast element and the message element inside the toast using their IDs.
  const toast = document.querySelector('#toast'); 
  const toastMessage = document.querySelector('#toast-message');

  // Set the text of the toast message to whatever message is passed to the function.
  toastMessage.textContent = message;

  // Add the 'show' class to the toast element, making it visible (the 'show' class should be defined in CSS).
  toast.classList.add('show');

  // Set a timer to remove the 'show' class from the toast after 3 seconds, hiding it again.
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000); // The timeout duration is 3000 milliseconds (3 seconds).


 // BONUS: Close Toast Button
  const closeToast = document.querySelector('#close-toast');

  // Add an event listener to the close button, which listens for a click event.
  closeToast.addEventListener("click", () => {
    // When the close button is clicked, remove the 'show' class from the toast to hide it immediately.
    toast.classList.remove('show');
  });
}

