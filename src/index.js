const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.querySelector('#start-btn').onclick = () => {
  startCountdown()
  document.querySelector('#start-btn').disabled = true
}



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  const intervalID = setInterval(() => {
    remainingTime--
    document.querySelector('#time').innerText = remainingTime


    if (remainingTime === 0) {
      clearInterval(intervalID)
      showToast()

    }


  }, 1000)


}


const toastMsg = document.querySelector('#toast')

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastMsg.setAttribute('class', 'toast show')
  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
