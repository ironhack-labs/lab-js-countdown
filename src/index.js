const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.querySelector('#start-btn');

startButton.onclick = () => {
  startCountdown()
}


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...

  let timer = 10;

  const intervalID = setInterval(() => {
    timer--

    document.querySelector('#time').innerHTML = timer

    if (timer === 9) {
      showToast("⏰ Final countdown! ⏰")
    }

    if (timer === 5) {
      showToast("Start the engines! 💥")
    }

    if (timer === 0) {
      clearInterval(intervalID)
      showToast("Lift off! 🚀")
    }

    startButton.disabled = true

  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message) {

  console.log("showToast called!");

  // Your code goes here ...

  const toast = document.querySelector('#toast');

  const showToast = toast.classList;
  showToast.add("show")

  const timeOutId = setTimeout(() => {
    showToast.remove("show")
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  const closeToastButton = document.querySelector('#close-toast')

  closeToastButton.onclick = () => {
    showToast.remove("show")
  }

  document.querySelector('#toast-message').innerHTML = message

}
