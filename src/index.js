const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...




const button = document.querySelector('#start-btn').onclick = () => {
  console.log('empieza')
  startCountdown()


}

// ITERATION 2: Start Countdown
let count = remainingTime
function startCountdown() {
  document.getElementById('start-btn').disabled = true
  console.log("startCountdown called!");
  timer = setInterval(() => {
    count--
    document.querySelector('#time').innerHTML = count
    if (count > 5) {
      console.log('primero')
      showToast()
    }

    if (count === 0) {
      clearTimeout(timer)
      console.log("parado")
      showToast()
    }


  }, 1000)
}






// ITERATION 3: Show Toast
// Your code goes here ...

function showToast(message) {
  console.log("showToast called!")
  document.querySelector('#toast').classList.add('show')


  const buttonClose = document.querySelector('#close-toast').onclick = () => {
    console.log('termina')
    document.querySelector('#toast').classList.remove('show')
    console.log("conseguido")
  }

  let showToast = setTimeout(() => {
    document.querySelector('#toast').classList.remove('close-toast')
  }, 1000)


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...



}


