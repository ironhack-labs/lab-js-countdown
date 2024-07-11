const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

document.querySelector('#start-btn').onclick = () => {
  startCountdown()

}




// ITERATION 2: Start Countdown
function startCountdown() {
  document.querySelector('#start-btn').disabled = true

  const intervalId = setInterval(() => {
    remainingTime--
    document.querySelector('#time').innerHTML = remainingTime

    if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰")
    }
    if (remainingTime === 0) {
      clearInterval(intervalId)
      showToast("Lift off! 🚀")
    }

    if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    }


  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  const cardToast = document.querySelector('#toast').classList;
  document.querySelector('#toast-message').innerHTML = message
  cardToast.add("show");



  const hiddenToast = setTimeout(() => {
    const cardToast = document.querySelector('#toast').classList;
    cardToast.remove("show");
  }, 3000)


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  document.querySelector('#close-toast').onclick = () => {
    const cardToast = document.querySelector('#toast').classList;
    cardToast.remove("show");

  }
}
