const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  //disable start button
  startButton.disabled = true;
  timer = setInterval(function () {
    if (remainingTime >= 0) {
      console.log(remainingTime);
      //show it in the div
      document.getElementById("time").textContent = remainingTime;
      if (remainingTime === 10) {
        console.log("⏰ Final countdown! ⏰");
        showToast("⏰ Final countdown! ⏰");
      } else if (remainingTime === 5) {
        console.log("Start the engines! 💥");
        showToast("Start the engines! 💥");
      } else if (remainingTime === 0) {
        console.log("Lift off! 🚀");
        showToast("Lift off! 🚀");
      }
      remainingTime--;
    } else {
      clearInterval(timer);
      console.log("Countdown finished");
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

//Add event listener to the start button
// startButton.addEventListener("click", () => {
//   console.log("Countdown started!");
//   startCountdown(); // Call the startCountdown function
// });

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  //declare stuff
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  const toastClose = document.getElementById("toast-close");

  //fill the toast with message
  toastMessage.textContent = message;
  //show the toast
  toast.classList.add("show");

  //set a timeout of 3 seconds to hide the toast again
  setTimeout(() => {
    toast.classList.remove("show");
  }, 10000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  function closeToast() {
    const toast = document.getElementById("toast");
    toast.classList.remove("show"); // Hide the toast
  }
  // Your code goes here ...
  //add event listener to the close button
  toastClose.addEventListener("click", closeToast);
}
