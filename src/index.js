const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = 10; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn")

startBtn.addEventListener("click", () => {
  startCountdown()
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  
  const id = setInterval(function () {
    timer --
    document.getElementById("time").innerHTML = timer
    document.getElementById("start-btn").disabled = true
    if(timer === 0){
      clearInterval(id)
      showToast()
      document.getElementById("start-btn").disabled = false
    }

  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.getElementById("toast")
  toast.classList.add("show")
  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)
  



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
