const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById("start-btn")
startButton.addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  showToast("⏰ Final countdown! ⏰");
  let intervalId = setInterval(() => {
    remainingTime--;
    document.getElementById("time").innerHTML = remainingTime;
   if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime <= 0) {
      clearInterval(intervalId);
      document.getElementById("start-btn").disabled = true;
      showToast("Lift off! 🚀");

      document.getElementById("start-btn").disabled = false;

   /* if (remainingTime <= 0) {
      clearInterval(intervalId);
      document.getElementById("start-btn").disabled = true;
*/
      
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
const toast = document.getElementById("toast"); 
const toastMessage = document.getElementById("toast-message");
toastMessage.textContent = message;

toast.classList.add("show");
setTimeout(() => {
toast.classList.remove("show");
}, 3000);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
document.getElementById("close-toast").addEventListener("click", () => {
  clearTimeout();
  document.getElementById("toast").classList.remove("show");
})
}


