const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// ITERATION 2: Start Countdown

let countdownButton = document.querySelector("#start-btn")


countdownButton.addEventListener("click", () => {
  startCountdown()
})

function startCountdown() {
  console.log("startCountdown called!");

  timer = setInterval(() => {
    console.log(remainingTime);
    remainingTime--
    document.querySelector(`#time`).innerHTML = remainingTime


    if (remainingTime === 0) {
      clearInterval(timer)
      showToast()
    }

    document.querySelector(`#start-btn`).disabled = true;

  }, 1000)

}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  let toastCard = document.querySelector('#toast')
  toastCard.classList.add("show")


  const timeoutID = setTimeout(() => {
    toastCard.classList.remove("show")

  }, 3000)




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON


  let closeToast = document.querySelector("#close-toast")

  closeToast.addEventListener("click", () => {
    clearTimeout(closeToast)
    toastCard.classList.remove("show")
  })


}
