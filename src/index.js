const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn")
startButton.addEventListener("click", () =>{startCountdown()})



// ITERATION 2: Start Countdown
const counterNode = document.querySelector("#time")
function startCountdown() {
  document.querySelector("#start-btn").disabled = true;
  
  const intervalId = setInterval(() => {
    
    counterNode.innerText--

    if (counterNode.innerText === "0") {
      clearInterval(intervalId)
      showToast()
    }
  },1000) 
}
  console.log("startCountdown called!");


  // Your code goes here ...





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastNode = document.querySelector("#toast")
  toastNode.classList.add("show")
  setTimeOut(() => {
    toastNode.classList.remove("show");
  }, 3000)




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
