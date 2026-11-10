const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const timeBox = document.querySelector("#time")
const toastBox = document.querySelector("#toast");
const toastCloseBtn = document.querySelector("#close-toast");
const toastMessageBox = document.querySelector("#toast-message");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startCountdownBtn = document.querySelector("#start-btn");
startCountdownBtn.addEventListener("click", () => {
  startCountdown();  

})




// ITERATION 2: Start Countdown
function startCountdown() {
  remainingTime = DURATION;
  console.log("startCountdown called!");
  startCountdownBtn.disabled = true;
  timeBox.textContent = remainingTime;
  showToast("⏰ Final countdown! ⏰")

  timer = setInterval(() => {
    timeBox.textContent = remainingTime;
     if(remainingTime === 5){
      showToast("Start the engines! 💥")
    }
    else if(remainingTime === 0){
      showToast("Lift off! 🚀")
      clearInterval(timer);
      startCountdownBtn.disabled = false;
      timeBox.textContent = remainingTime;
    }
    remainingTime--;
  }, 1000)
  
}


// ITERATION 3: Show Toast
function showToast(message) {
    console.log("showToast called!");

    toastMessageBox.innerText = message;
    toastBox.classList.add("show");
    let timer1 = setInterval(() => {
        toastBox.classList.remove("show");
        clearInterval(timer1);
    },3000)

   


}
 // BONUS: ITERATION 4: TOAST CLOSE BUTTON

toastCloseBtn.addEventListener("click", () => {
  toastBox.classList.remove("show");
  clearInterval(timer);
})