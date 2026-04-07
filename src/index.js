const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click",() =>{
startCountdown()
})


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
 

 // disable button
  startButton.disabled = true;

  // reset time (in case it's reused)
  remainingTime = DURATION;

  // update UI immediately
  document.querySelector("#time").innerText = remainingTime;

  // start interval
  timer = setInterval(() => {
    remainingTime--;

    // update UI every second
    document.querySelector("#time").innerText = remainingTime;

    // stop when reaches 0
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Time's up!");

      // enable button again
      startButton.disabled = false;
    }
  }, 1000);


}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  
  const toast = document.querySelector("#toast");
  const toastMessage = document.querySelector("#toast-message");

  // set the message text
  toastMessage.innerText = message;

  // show the toast
  toast.classList.add("show");

  // hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
 
}

 // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
