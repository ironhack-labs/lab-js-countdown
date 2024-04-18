


const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
document.querySelector('#start-btn').onclick = () => {
  startCountdown()
  document.querySelector('#start-btn').disabled = true
}


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  //your code...

  const intervalID = setInterval(() => {
    remainingTime--
    document.querySelector('#time').innerText = remainingTime

    if (remainingTime === 0) {

      clearInterval(intervalID)
      showToast()

    }


  }, 1000)
}



// ITERATION 3: Show Toast
function showToast(message) {

  let toastCard = document.querySelector(".toast")

  toastCard.classList.add("show")

  const timeOut = setTimeout(() => {
    toastCard.classList.remove("show")

  }, 3000)


  console.log("showToast called!");
}

