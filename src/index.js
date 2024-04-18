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
  let timer = setInterval(() => {
    remainingTime--

    document.querySelector('#time').innerText = remainingTime
    if (remainingTime === 0) {
      clearInterval(timer)
      showToast()
    }
  }, 1000)

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!")

  const toast = document.querySelector('#toast')
  toast.setAttribute('class', 'toast show')

  /*let timer = */setTimeout(() => {
    toast.setAttribute('class', 'toast')
  }, 3000)
}


// ITERATION 3: Show Toast
// function showToast(message) {
//   console.log("showToast called!");
//   // Your code goes here ...
//   const toast = document.querySelector('#toast')
//   const toastClass = toast.classList
//   toastClass.add('show')
//   setTimeout(() => {
//     toastClass.remove('show')
//   }, 3000)

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
// Your code goes here ...


