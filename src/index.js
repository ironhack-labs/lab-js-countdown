const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startElement = document.querySelector(`#start-btn`);
const countElement = document.querySelector("#time");
const toast = document.querySelector("#toast");


// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startElement.addEventListener("click", () => {
  startCountdown();
})


// ITERATION 2: Start Countdown
function startCountdown() {
  startElement.disabled = true;

  timer = setInterval(() => {
    remainingTime--;

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast();
      startElement.disabled = false;
    }
    countElement.innerText = remainingTime;
  }, 1000);
  
  console.log("startCountdown called!");
}




// ITERATION 3: Show Toast
function showToast(message) {
   
    toast.classList.add("show");
  
    setTimeout(() => {
      toast.classList.remove("show"); 
    }, 3000);
  }
  
  console.log("showToast called!");



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
