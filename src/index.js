const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const button = document.querySelector("#start-btn");
button.addEventListener("click", () => {
  document.getElementById("start-btn").disabled = true;
  startCountdown()
})



// ITERATION 2: Start Countdown

function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  timer = setInterval(()=>{
    remainingTime--;
    document.querySelector("#time").innerText = remainingTime;
    if(remainingTime === 9){
      showToast("⏰ Final countdown! ⏰")
    }
    else if(remainingTime === 5){
      showToast("Start the engines! 💥")
    }
    else if(remainingTime === 0){
      clearInterval(timer)
      showToast("Lift off! 🚀")
    }
  }, 1000)
  return timer
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...
const toastMessage = document.querySelector("#toast-message")
const toastElement = document.querySelector(".toast")
toastMessage.innerText = message
toastElement.classList.add("show")


setTimeout(()=>{
toastElement.classList.remove("show")
}, 3000)

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
const closeButton = document.querySelector("#close-toast");
closeButton.addEventListener("click", ()=>{
  message.classList.remove("show")
})

return message
}
