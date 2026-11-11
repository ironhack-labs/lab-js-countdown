const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimer = null;


const startButton = document.querySelector("#start-btn");
const timeElement = document.querySelector("#time");
const toastElement = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");
const closeToast = document.querySelector("#close-toast");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startButton.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;
  
  //shwoing the start time and first toast
  timeElement.innerText = remainingTime;
  showToast ("⏰ Final countdown! ⏰");

  timer = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime;
    //adding the condtion using the if statement
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off!  🚀");
      startButton.disabled = false;
      remainingTime = DURATION; // to reste for the next time
    }
  }, 1000);
}




// ITERATION 3: Show Toast
// Bonus: Iteration 5 | More Toasts
function showToast(message) {
  console.log("showToast called!");

  // putting the message in the toast and making it visible
  toastMessage.textContent = message;
  toastElement.classList.add("show");

  //cancel earlier so two elements don't cut each other
  clearTimeout(toastTimer);

  // hiding the toast after 3 seconds
  toastTimer = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);


}



 // BONUS: ITERATION 4: TOAST CLOSE BUTTON
const closeToastButton = document.querySelector("#close-toast");
// Add the closeToast event listener only once
closeToastButton.addEventListener("click", () => {
  clearTimeout(toastTimer);
toastElement.classList.remove("show");
});
  // Your code goes here ...

