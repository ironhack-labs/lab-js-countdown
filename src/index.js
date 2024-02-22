const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...


const startButton = document.getElementById("start-btn")
const timeElement = document.getElementById("time")

startButton.addEventListener("click", () => {
 // console.log("start button clicked")
  startCountdown()
})


// ITERATION 2: Start Countdown
  // Your code goes here ...

function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;
  timer = setInterval(()=> {

    remainingTime--;
    timeElement.innerText = remainingTime;
    
    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast();
      remainingTime = 10
      timeElement.innerText = remainingTime
      startButton.disabled = false;
    }
    
  }, 1000)
  

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  let toast;
  const toastElement = document.getElementById("toast-message");

  toastElement.classList.add("show");

  toast = setInterval(() => {
    toastElement.classList.remove("show");
  }, 3000)




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  const closeButton = document.getElementById("close-toast")

  closeButton.classList.add("show")

  closeButton.addEventListener("click", () =>{

    closeButton.classList.remove("show")
  })


}
