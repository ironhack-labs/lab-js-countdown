const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const button = document.querySelector("#start-btn");
const toast = document.querySelector("#toast");
const time = document.querySelector("#time");
const closeToast = document.querySelector("#close-toast");




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
 const id = setInterval(()=>{
    time.textContent = remainingTime;
    remainingTime --;
    if(remainingTime < 0){
      clearInterval(id);
      showToast()
      
    }

  },1000)

}
  // Your code goes here ...
  button.addEventListener("click",()=>{
    startCountdown();
    
  })

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toast.classList.add("show");
  setTimeout(()=>{
  toast.classList.remove("show");
  },3000)






  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeToast.addEventListener("click",()=>{
    toast.classList.remove("show");
  })

 

}
