const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const button = document.querySelector('#start-btn')
button.onclick = startCountdown



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!")



  const countDown = setInterval(() => {
    remainingTime--
    document.querySelector('#time').innerHTML = remainingTime

    if (remainingTime === 0) {
      clearInterval(countDown)
      showToast()
    }
  }, 100)



  if (countDown) {
    button.disabled = true
  }



}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.querySelector('#toast').classList;
  toast.add('show')

  const timeoutID = setTimeout(() => {
    toast.remove('show')

  }, 3000)







  const closeToast = document.querySelector('#close-toast')


  closeToast.onclick = () => {
    toast.remove('show')
  }

  console.log(closeToast)

}
// console.log(showToast())

