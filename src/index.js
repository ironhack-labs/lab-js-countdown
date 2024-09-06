const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const buttonNode = document.querySelector("button")
buttonNode.addEventListener("click",()=>{

  startCountdown()
})




// ITERATION 2: Start Countdown
const divTimeNode = document.querySelector("#time")

function startCountdown() {
  console.log("startCountdown called!")
  
  const intervalId = setInterval(()=>{
    remainingTime--
    buttonNode.disabled=true
    divTimeNode.innerText=remainingTime
    
    if(remainingTime===0){
      
      clearInterval(intervalId)
      
      buttonNode.disabled=false
      showToast( "Lift off! 🚀")
    }
    
  }, 1000)
  remainingTime = DURATION;
  divTimeNode.innerText = remainingTime;
  
}




// ITERATION 3: Show Toast
const toastHiddenNode = document.querySelector(".toast")
const messageNode = document.querySelector("#toast-message")

function showToast(message) {
  
  toastHiddenNode.classList.add("show")
  messageNode.innerText = message
  setTimeout(() => {
    toastHiddenNode.classList.remove("show");
  }, 2000);
  


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
