const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

let countBtn = document.querySelector('#start-btn')
let divTime = document.querySelector('div#time')
let divToast = document.querySelector('div#toast')
let spanClose = document.querySelector('span#close-toast')
let spanMess = document.querySelector('span#toast-message')

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

countBtn.addEventListener('click', startCountdown)


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  if(remainingTime === 0){
    return
  }

  spanMess.innerText = '⏰ Final countdown! ⏰'
  showToast()

  // Your code goes here ...
  timer = setInterval(() => {
    remainingTime--
    divTime.innerText = remainingTime

    if(remainingTime === 5){
      spanMess.innerText = 'Start the engines! 💥'
      showToast()
    }

    if(remainingTime === 0){
      spanMess.innerText = 'Lift off! 🚀'
      clearInterval(timer)
      showToast()
    }
  },1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  divToast.classList.add('show')

  setTimeout(() => {
    divToast.classList.remove('show')
  },3000)


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  // Your code goes here ...

  spanClose.addEventListener('click', () => {
    divToast.classList.remove('show')
  })

}
