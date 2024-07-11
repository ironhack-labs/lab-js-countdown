const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.querySelector(`#start-btn`).onclick = () => {
  startCountdown()
}




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");



  const timerId = setInterval(() => {
    remainingTime--
    document.querySelector(`#time`).innerHTML = remainingTime

    if (remainingTime === 0) {
      clearInterval(timerId)
      showToast()
    }
    document.querySelector(`#start-btn`).disabled = true


  }, 1000)

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");


  const showW = document.querySelector(`#toast`).classList;
  showW.add(`show`)

  const timeoutId = setTimeout(() => {
    showW.remove(`show`)

  }, 3000)

  // Your code goes here ...
  /*const list = element.classList;
  list.remove("myStyle");*/



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
