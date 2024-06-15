const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// Select DOM elements
const startButton = document.getElementById("start-btn");
const timeDiv = document.getElementById('time');
const toastDiv = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const closeToast = document.getElementById('close-toast');

// ITERATION 1: Add event listener to the start button
startButton.addEventListener("click", startCountdown); // pass reference of callback function startCountdown()



// ITERATION 2: Start Countdown
function startCountdown() {

  console.log("startCountdown called!");

  startButton.disabled = true;  // Start Countdown button should be disabled during the countdown
  remainingTime = DURATION; // counter rest, otherwise goes to negative values

  showToast("⏰ Final countdown! ⏰");
  
   timer = setInterval(() => {
    remainingTime -= 1;
    timeDiv.innerHTML = remainingTime ;
    
    if (parseInt(remainingTime) === 5) {
      showToast("Start the engines! 💥");
    }
    
    if (parseInt(remainingTime) === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀"); // After stopping countdown timer, display toast message
      startButton.disabled = false; // enable start button after countdown ended

    }

  }, 1000);

}




// ITERATION 3: Show Toast
function showToast(message) {

  console.log("showToast called!");
 
  toastMessage.textContent = message;
  toastDiv.classList.add("show"); // To show the toast card, we simply add the "show" class to the toast card, and it will become visible, handled in CSS.
  
  const timeoutId = setTimeout(() => hideToast(), 3000); // hide toast after 3 sec

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeToast.addEventListener("click", () => {
    clearTimeout(timeoutId);
    hideToast();



  });

}

function hideToast() {
  toastDiv.classList.remove("show"); 
  
}
