const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;

  timer = setInterval(() => {
    remainingTime--;
    document.querySelector("#time").innerHTML = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀"); 
    }
  }, 1000);
  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toastElement = document.getElementById("#toast");
  const toastMessage = document.getElementById("#toast-message");
  
  toastMessage.textContent = message
  toastElement.classList.add("show")
  
  setTimeout(() => {
    toastElement.classList.remove("show")
  }, 3000);

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeButton = document.getElementById("close-toast");
  closeButton.addEventListener("click", () => {
  toastElement.classList.remove("show")
  });
  // Your code goes here ...

}
