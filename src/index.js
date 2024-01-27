const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.getElementById("start-btn").addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  document.getElementById("start-btn").disabled = true;

  countdown = setInterval(function () {
    remainingTime--;

    document.getElementById("time").innerText = remainingTime;

    // Check if the countdown has reached 0
    if (remainingTime === 0) {
      // Stop the countdown timer
      clearInterval(countdown);
      
      // Call the showToast function
      showToast();
      
      // Enable the start button
      document.getElementById("start-btn").disabled = false;
    }
  }, 1000); // Interval set to 1000 milliseconds (1 second)
}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  const toastElement = document.getElementById("toast");
  toastElement.classList.add("show");

  setTimeout(function () {
    toastElement.classList.remove("show");
  }, 3000) ;
}




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


