const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const startBut = document.getElementById("start-btn")
const timeElement = document.getElementById("time");
const toastContainer = document.getElementById("toast");
const toastMessage = document.getElementById("close-toast");

// Your code goes here ...
startBut.addEventListener("click", () => {
  startCountdown()
})

// ITERATION 2: Start Countdown
function startCountdown() {
   console.log("startCountdown called!");
  // Your code goes here ...
    timer = setInterval(() =>{
      remainingTime--;
      timeElement.innerText = remainingTime;
      if(remainingTime === 0){
      clearInterval(timer);
      showToast()
    }
    }, 1000); 
   }

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...
  toastContainer.classList.add(
    "show"
  )


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeToastElement.addEventListener("click", () => {
  toastContainer.style.display = "none";
});
}

