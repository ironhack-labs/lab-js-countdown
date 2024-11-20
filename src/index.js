const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

document.querySelector("#start-btn").addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Disable the start button to prevent further clicks
  document.querySelector("#start-btn").disabled = true;

  // Start the countdown using setInterval
  timer = setInterval(() => {
    remainingTime--; // Decrease remaining time by 1

    // Update the displayed remaining time
    document.querySelector("#time").textContent = remainingTime;

    // When the countdown reaches 0, stop the timer and show toast
    if (remainingTime === 0) {
      clearInterval(timer); // Stop the countdown
      showToast("Lift off! 🚀"); // Show the toast message
    }
  }, 1000); // 1000 ms = 1 second
}





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  

  const toast = document.querySelector("#toast");
  const toastMessage = document.querySelector("#toast-message");

  // Set the message dynamically
  toastMessage.textContent = message;

  // Show the toast by adding the 'show' class
  toast.classList.add("show");

  // Hide the toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // 3000 ms = 3 seconds
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
// Find the close button and add an event listener
document.querySelector("#close-toast").addEventListener("click", () => {
  // Hide the toast immediately when clicked
  const toast = document.querySelector("#toast");
  toast.classList.remove("show");

  // Clear the timeout to stop the toast from automatically hiding
  clearTimeout(timer); // Use `timer` or set a new `timeoutId` if needed.
});

