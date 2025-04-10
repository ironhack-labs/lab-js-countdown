const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const element = document.getElementById("start-btn")

element.addEventListener(`click` , startCountdown)


// ITERATION 2: Start Countdown
function startCountdown() {
  
  console.log("startCountdown called!");

  element.disabled = true;

  timer = setInterval(function () {
    remainingTime--
    document.getElementById("time").textContent = remainingTime

    if (remainingTime <= 0) {
      clearInterval(timer)
      showToast()
    }
  }, 1000)

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  let toast = document.querySelector('.toast')
  toast.classList.add('show')

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000)

  const close = document.getElementById("close-toast")

  close.addEventListener(`click` , () => {
    toast.classList.remove('show')
  })

  

}
