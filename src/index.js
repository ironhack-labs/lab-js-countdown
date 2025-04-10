const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const timeDiv = document.getElementById("time");
const toastDiv = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);

const closeButton = document.getElementById("close-toast");
closeButton.addEventListener("click", deleteButton);

// Your code goes here ...





// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  
  timeDiv.innerHTML = remainingTime;

  timer = setInterval(() => {
    remainingTime -= 1;
    timeDiv.innerHTML = remainingTime;
    
    if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰", false);
    }
    if (remainingTime === 5) {
      showToast("Start the engines! 💥", false);
    }
    if (remainingTime <= 0) {
      clearInterval(timer);  
      showToast("Lift off! 🚀", true);
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message, showCloseButton) {
  console.log("showToast called!");

  // Your code goes here ...
  
  

  toastMessage.textContent = message;

  if (showCloseButton) {
    closeButton.style.display = "block"; // Show the close button
  } else {
    closeButton.style.display = "none"; // Hide the close button
  }

  toastDiv.classList.add("show");

  setTimeout(() => {
    toastDiv.classList.remove("show");
  }, 3000); // Show toast for 3 seconds

  

}



function deleteButton() {
  toastDiv.classList.remove("show");
}
