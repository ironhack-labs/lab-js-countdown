const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  document.getElementById('start-btn').disabled = true;

  countdownTimer = setInterval(() => {
    remainingTime -= 1;
    document.getElementById('time').textContent = remainingTime;

    
    if (remainingTime <= 0) {
      
      clearInterval(countdownTimer);

      
      showToast();

      
      document.getElementById('start-btn').disabled = false;
      remainingTime = 10; 
      document.getElementById('time').textContent = remainingTime;
    }
  }, 1000);  
}

  


  // Your code goes here ...





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toast = document.getElementById("toast"); 
  toast.classList.add("show");
  setTimeout(() => {
      toast.classList.remove("show");
  }, 3000); 

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
