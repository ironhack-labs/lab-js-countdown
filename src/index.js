const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const StartBtnElement = document.getElementById("start-btn");
let ourInterval; 
const timerElement = document.getElementById("time");
const toastCardElement = document.getElementById("toast")
const toastCardBtnElement = document.getElementById("close-toast")


// ITERATION 1: Add event listener to the start button

StartBtnElement.addEventListener('click', ()=>{
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
  StartBtnElement.style.display = "none";
  console.log("startCountdown called!");
  ourInterval = setInterval(()=>{
    remainingTime--;
    timerElement.innerText = remainingTime;
    console.log(remainingTime);
    if (remainingTime === 0) {
      clearInterval(ourInterval);
      showToast();
      StartBtnElement.style.display = "flex";
    }
  }, 1000);   
  }



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastCardElement.classList.add("show");
  setTimeout(()=>{
    toastCardElement.classList.remove("show");
  },3000)
}





  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  toastCardBtnElement.addEventListener('click', () => {
    toastCardElement.classList.remove("show");
  })


