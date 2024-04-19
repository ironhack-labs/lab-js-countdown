const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const timeNode = document.querySelector("#time")

// ITERATION 1: Add event listener to the start button
//identificamos el botón
const btnStartNode = document.querySelector("#start-btn")
//addEventListener
btnStartNode.addEventListener("click", startCountdown)


// ITERATION 2: Start Countdown
function startCountdown() {
  // console.log("startCountdown called!");
  timer = setInterval( () => {
    remainingTime = timeNode.innerText--
    btnStartNode.disabled = "true"
    if (remainingTime === 1) {
      clearInterval(timer)
      showToast()
    }
  }, 1000)
}


// ITERATION 3: Show Toast
function showToast(message) {
  // console.log("showToast called!");
  // identificamos el elemento del DOM de la toast
  const toastNode = document.querySelector(".toast")
  toastNode.classList.add("show")
  setTimeout( () => {
    toastNode.classList.remove("show")
  }, 3000 )

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeToastBtnNode = document.querySelector("#close-toast")
  closeToastBtnNode.addEventListener("click", () => {
    toastNode.classList.remove("show")
  })

}
