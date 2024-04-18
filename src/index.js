const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn")


  startButton.addEventListener("click", function() {
    startCountdown()})
  
// ITERATION 2: Start Countdown


function startCountdown() {
  console.log("startCountdown called!");
  
  const intervalId = setInterval(function () {
  const divTime = document.getElementById("time")
  divTime.innerHTML --;


    if(divTime.innerHTML === "0") {
      clearInterval(intervalId);
      showToast()
    }

  },1000)

  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toast = document.getElementById("toast");

  toast.classList.add("show")

  // Your code goes here ...

}


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


