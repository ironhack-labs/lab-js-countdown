const DURATION = 15; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
document.querySelector("#time").innerText = remainingTime;

let toastTimeout = null;




const startButton = document.querySelector
("#start-btn"); 
const timeDisplay = document.querySelector("#time");
const toast = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");
const toastCloseButton = document.querySelector("#toast-close-btn");
// ITERATION 1: Add event listener to the start button


startButton.addEventListener("click", startCountdown);

// Your code goes here ...

// ITERATION 1: Add event listener to the start button






// ITERATION 2: Start Countdown

function startCountdown() {
  console.log("startCountdown called!");

 
  startButton.disabled = true;

  remainingTime = DURATION;
  document.querySelector("#time").innerText = remainingTime;

  
  timer = setInterval(() => {

    
    remainingTime--;

   
    document.querySelector("#time").innerText = remainingTime;

  
    if (remainingTime === 0) {
      clearInterval(timer);   
      timer = null;           
      showToast();            
      startButton.disabled = false;  
    }

  }, 1000);
}

  

  // Your code goes here ...






// ITERATION 3: Show Toast

function showToast() {
  console.log("showToast called!");

  const toast = document.querySelector("#toast");

 
  toast.classList.add("show");

 
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}







  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

function showToast(message) {
  console.log("showToast called!");

  const toast = document.querySelector("#toast");
  const toastMessage = document.querySelector("#toast-message");


  toastMessage.innerText = message;

  toast.classList.add("show");

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


const closeToastBtn = document.querySelector("#close-toast");

closeToastBtn.addEventListener("click", () => {
  const toast = document.querySelector("#toast");

 
  clearTimeout(toastTimeout);


  toast.classList.remove("show");
});

function startCountdown() {
  console.log("startCountdown called!");

  startButton.disabled = true;
  remainingTime = DURATION;
  timeDisplay.innerText = remainingTime;

  if (timer !== null) {
    clearInterval(timer);
  }

  timer = setInterval(() => {

    remainingTime--;
    timeDisplay.innerText = remainingTime;

   
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }

   
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

  
    if (remainingTime === 0) {
      clearInterval(timer);
      timer = null;

      showToast("Lift off! 🚀");

      remainingTime = DURATION;
      timeDisplay.innerText = remainingTime;

      startButton.disabled = false;
    }

  }, 1000);
}




