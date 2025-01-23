const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.querySelector("#start-btn")
startButton.addEventListener("click", () => {
  startCountdown();
  startButton.disabled= true
  showToast("⏰ Final countdown! ⏰")
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
// Your code goes here ...
  timer = setInterval(() =>{
    remainingTime--
    const time = document.querySelector("#time")

    time.innerHTML = remainingTime

    if (remainingTime===5)
      showToast("Start the engines! 💥")
    else if (remainingTime===0) {
      clearInterval(timer)
      showToast("Lift off! 🚀")
      remainingTime=10;
      time.innerHTML = remainingTime
      
      startButton.disabled = false
      
    }

  }, 1000)

}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
const toast = document.querySelector("#toast");

const messageToast = document.querySelector("#toast-message")
messageToast.textContent = message

toast.classList.add("show")

const deleteToast = setTimeout(()=>{
  toast.classList.remove("show")
}, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  const closeToast = document.querySelector("span#close-toast")
  closeToast.addEventListener("click", () => {
    clearTimeout(deleteToast)
    toast.classList.remove("show")
  });
}

