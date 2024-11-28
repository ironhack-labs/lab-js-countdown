const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.querySelector("#start-btn").addEventListener("click", () => {

});


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  
  
  if (timer) return;

  
  const button = event.target;
  button.disabled = true; 

  
  const timeDisplay = document.querySelector("#time");
  timeDisplay.textContent = remainingTime; 

  
  timer = setInterval(() => {
    remainingTime -= 1; 
    timeDisplay.textContent = remainingTime; 

    
    if (remainingTime <= 0) {
      clearInterval(timer); 
      timer = null; 
      button.disabled = false; 
      remainingTime = DURATION; 
      showToast("Lift off! 🚀"); 
    }
  }, 1000); 


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...


const toast = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");
const closeToastButton = document.querySelector("#close-toast");


toastMessage.textContent = message;

toast.classList.add("show");


const hideTimeout = setTimeout(() => {
  toast.classList.remove("show");
}, 3000);

closeToastButton.onclick = () => {
  toast.classList.remove("show"); 
  clearTimeout(hideTimeout); 
};
}

 

  

}
