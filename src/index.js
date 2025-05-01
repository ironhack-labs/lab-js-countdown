const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

document.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  const startBtn = document.getElementById("start-btn");
  const timeDisplay = document.getElementById("time");
  
  startBtn.disabled = true;

  timeDisplay.textContent = remainingTime;
  let idIntervalo = setInterval(() => {
   remainingTime -=1;
   timeDisplay.textContent = remainingTime;

   if (remainingTime <= 0){
    clearInterval(idIntervalo);
    showToast();
   }
      
   
  }, 1000)

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
 




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
