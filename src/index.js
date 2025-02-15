const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval


// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click",() => {
  showToast("⏰ Final countdown! ⏰");
  startCountdown();
});


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  document.getElementById("start-btn").disabled = true;
  timer = setInterval(() =>{
    remainingTime--;
    document.getElementById("time").innerText = remainingTime;
    if(remainingTime === 5){
      showToast("Start the engines! 💥");
    } else if(remainingTime === 0){
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  },1000);
}


// ITERATION 3: Show Toast

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  toastMessage.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    clearInterval(toast);
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
    const closeButton = document.getElementById("close-toast");
    if(closeButton){
      closeButton.addEventListener("click", () => {
        clearInterval(toast);
        toast.classList.remove("show");
        console.log("Interval cleared after clicking!");
      });
    }else{
      console.log("No close button found!");
    } 
}

