//const DURATION = 10; // 10 seconds
//let remainingTime = DURATION; // Countdown starting from 10
//let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
  startButton.disabled = true;
  
});


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  
  let i = 10;
  const timeLeft = document.getElementById("time")
  
  const intervalId = setInterval(function () {
    if (i >= 0) {
      console.log(i);
      timeLeft.textContent = i; // Update the display
    } else {
      showToast();
      clearInterval(intervalId);
    }
   
    i--;
  }, 1000);



}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.getElementById("toast"); // get the toast Card Element
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    startButton.disabled = false;
  }, 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
