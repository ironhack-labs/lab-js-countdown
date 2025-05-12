const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startButton = document.querySelector("#start-btn");
const timeDisplay= document.querySelector('#time');

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startButton.addEventListener ('click',()=>{
startCountdown();

})


// ITERATION 2: Start Countdown
  // Your code goes here ...
function startCountdown(){
  remainingTime = DURATION;
  startButton.disabled = true;
  timeDisplay.innerText = remainingTime;

  


  timer =setInterval(()=> {
  
  

  if (remainingTime === 10){
  showToast("⏰ Final countdown! ⏰");
    }
   
  if (remainingTime === 5){
  showToast("Start the engines! 💥");
}

  if (remainingTime <= 0){
    clearInterval(timer);
    timer= null;
  }
  
  if (remainingTime <= 0){
  clearInterval(timer);
  timer = null;
  showToast ("Lift off! 🚀");
  }

  timeDisplay.innerText = remainingTime;
  remainingTime --;

  if (remainingTime < 0) {
    clearInterval(timer);
    timer = null;
    startButton.disabled = false;
  }
  },1000);

}




// ITERATION 3: Show Toast
let toastTimeout;
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.querySelector("#toast");
  const toastMessage = document.querySelector("#toast-message");

  toastMessage.innerText = message;
  toast.classList.add ("show");

  setTimeout(()=>{  
    toast.classList.remove ("show");


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
const closeButton = document.querySelector ("#close-toast");
closeButton.addEventListener("click", () => {
const toast = document.querySelector("#toast")

  clearTimeout(toastTimeout);
  toast.classList.remove ("show");
});

},1000)
}
