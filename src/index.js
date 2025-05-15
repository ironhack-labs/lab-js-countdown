const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let interval;

const startBtnElement = document.querySelector("#start-btn");
const timerElement = document.querySelector("#time");
const toastElement = document.querySelector("#toast");
const toastTextElement = document.querySelector("#toast-message")
const closeBtnToast = document.querySelector("#close-toast");


// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startBtnElement.addEventListener ("click", () => {
console.log (startCountdown);})




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");}


  // Your code goes here ...
  startBtnElement.addEventListener ("click", () => {
    startBtnElement.disabled = true;
  interval = setInterval(()=>{
  remainingTime--;
  timerElement.innerText = remainingTime;
  if(remainingTime === 0)
  {clearInterval(interval); showToast("Lift off! 🚀");}
 else if (remainingTime === 5){
    showToast("Start the engines! 💥");
  }  else if ( remainingTime === 9){
    showToast ("⏰ Final countdown! ⏰");
  }
  

  }, 1000);


});



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastTextElement.innerText = message;
  // Your code goes here ...
toastElement.classList.add("show");
setTimeout (()=>{
  toastElement.classList.remove("show");
}, 3000);
}



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  
closeBtnToast.addEventListener("click", ()=>{
  toastElement.classList.remove("show");
});
