const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.querySelector('#start-btn').onclick = () => {
  startCountdown()
}

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  let counter = remainingTime
  document.getElementById("start-btn").disabled = true;
  const intervalId = setInterval(() => {
    counter--

    document.querySelector('#time').innerHTML = counter
    if (counter === 9) {
      showToast('⏰ Final countdown! ⏰')
    }
    if (counter === 5) {
      showToast("Start the engines! 💥")
    }
    if (counter === 0) {
      clearInterval(intervalId)
      showToast("Lift off! 🚀")
    }
  }, 1000)
}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toastMessage = document.querySelector('#toast-message')
  const linkTag = document.querySelector('#toastId')
  toastMessage.innerHTML = message
  linkTag.classList.add("show")
  const timeoutId = setTimeout(() => {
    linkTag.classList.remove('show')
    if (message === "Lift off! 🚀") {
      document.getElementById("start-btn").disabled = false;
    }
  }, 3000)

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  document.querySelector('#close-toast').onclick = () => {
    console.log("me pulsaste wey")
    const linkTag = document.querySelector('#toastId')
    linkTag.classList.remove('show')
  }
}
