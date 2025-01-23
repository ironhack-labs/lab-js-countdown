const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
// 
const button = document.getElementById("start-btn")
const timeDisplay = document.getElementById("time")
button.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown

  // Your code goes here ...
  function startCountdown() {
    console.log("startCountdown called!");
    const timer = setInterval(() => {
      if (remainingTime <= 0) {
        showToast()
        clearInterval(timer)
          


          
      } else {
          remainingTime--
          timeDisplay.textContent = remainingTime
          
      }
  }, 1000)
  
  }





// ITERATION 3: Show Toast
function showToast() {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.querySelector('.toast')
  toast.style.visibility = 'visible';
  




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeliftOff = document.getElementById("close-toast")
  closeliftOff.addEventListener("click", () => {
  toast.style.visibility = 'hidden'; 
  } )

}
