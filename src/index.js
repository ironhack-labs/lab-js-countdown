const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...


const startButtonElement = document.querySelector("#start-btn");


startButtonElement.onclick = function() {
  
  startCountdown()
};





// ITERATION 2: Start Countdown
function startCountdown() {
  const timeElement = document.querySelector("#time");
  startButtonElement.disabled = true
  console.log("startCountdown called!");
  timer = setInterval(() =>{
    timeElement.textContent = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }

    remainingTime--;
  }, 1000);
}

  // Your code goes here ...





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const showToastElement = document.querySelector("#toast");
  
  showToastElement.classList.add("show");


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
