const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtnNode = document.querySelector("#start-btn")
const numberCountdownNode = document.querySelector('#time')
const toastMessageNode = document.querySelector('#toast-message')
const toastDivNode = document.querySelector('.toast')

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtnNode.addEventListener('click', startCountdown)

timer = DURATION

// ITERATION 2: Start Countdown

function startCountdown() {
  
  showToast('	&#9200 Starting the countdown... 	&#9200')
  
  const countDownIndex = setInterval(()=> {
    timer -= 1
    numberCountdownNode.innerHTML = timer
    if (timer === 6){
      showToast("Almost there &#128514 ")
    }
    if (timer === 0) {
      
      showToast("Laaaaunch ")
      clearInterval(countDownIndex)
    }
  },1000)

}



// ITERATION 3: Show Toast
function showToast(message) {
  
  toastDivNode.classList.add("show")
  // toastDivNode.style.visibility = "visible"
  toastMessageNode.innerHTML = `${message}`
  setTimeout(()=> {
    toastDivNode.classList.remove("show")
  }, 2500)

  




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
