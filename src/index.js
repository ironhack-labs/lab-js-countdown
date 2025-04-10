const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
  startButton.addEventListener("click", startCountdown);
// ITERATION 2: Start Countdown
function startCountdown() {
  remainingTime = DURATION; 
  document.getElementById("time").innerHTML= remainingTime;

  console.log("startCountdown called!");
  
  if (timer) {
    clearInterval(timer);
  }
  console.log("timer set to 10 seconds");
  
  timer=setInterval( () => {
    remainingTime--;
    document.getElementById("time").innerHTML= remainingTime;
    if (remainingTime ===0){
      clearInterval(timer);
      showToast();
    }
   },1000);

  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  console.log("showToast called!");

  // Your code goes here ...

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); 


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
