let DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const toastDivNode = document.querySelector('#toast')
const toastMessageNode = document.querySelector('#toast-message')
const toastCloseBtnNode = document.querySelector('#close-toast')



// ITERATION 1: Add event listener to the start button

const startBtnNode = document.querySelector('#start-btn')
const countDownNode = document.querySelector('#time')

// Your code goes here ...

startBtnNode.addEventListener('click', startCountdown)


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  timer = setInterval(() => {
    DURATION--
    countDownNode.innerHTML = `${DURATION}`

    if (DURATION === 0) {
      clearInterval(timer)
      showToast(`Let's goooo!!`)
    }

  }, 1000)



}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastDivNode.classList.add('show')
  toastMessageNode.innerHTML = `${message}`


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  toastCloseBtnNode.addEventListener('click', ()=>{
    toastCloseBtnNode.closest('div').classList.remove('show')
  })

  // Your code goes here ...

}
