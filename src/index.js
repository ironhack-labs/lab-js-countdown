const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

let intervalArr = [];



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.getElementById("start-btn").addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  intervalArr.forEach(interval => {
    intervalArr.splice(intervalArr.indexOf(interval), 1)
    clearInterval(interval)
  })
  console.log("startCountdown called!");


  // Your code goes here ...
  let divWithTime = document.getElementById("time")

  divWithTime.innerHTML = DURATION
  showToast("⏰ Final countdown! ⏰")
  intervalArr.push(interval = setInterval(() => {
    if (divWithTime.innerHTML <= 1) {
      divWithTime.innerHTML -= 1;
      showToast("Lift off! 🚀")
      intervalArr.splice(intervalArr.indexOf(interval), 1)
      clearInterval(interval)
    } else {
      if (divWithTime.innerHTML === "6"){
        showToast("Start the engines! 💥")
      }
      divWithTime.innerHTML -= 1;
    }
  }, 1000))
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  
  let toastDiv = document.getElementById("toast")
  toastDiv.children[0].innerHTML = message
  toastDiv.classList.add("show")
  
  hideToastInterval = setInterval(() => {
    toastDiv.classList.remove("show")
    clearInterval(hideToastInterval)
  }, 3000)
  
  
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  
  // Your code goes here ...
  closeToastEvent = document.getElementById("close-toast").addEventListener("click", () => {
    toastDiv.classList.remove("show")
    clearInterval(hideToastInterval)
  })
}
