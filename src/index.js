const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastMessages = ["⏰ Final countdown! ⏰", "Start the engines! 💥", "Lift off! 🚀"]



// ITERATION 1: Add event listener to the start button

document.querySelector("#start-btn").addEventListener('click', ()=>{
  startCountdown();
})




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  showToast(toastMessages[0])
  const timeNode = document.querySelector("#time");
  timeNode.innerText = remainingTime
  const timeId = setInterval(()=>{
    remainingTime--
    timeNode.innerText = remainingTime
    if (remainingTime === DURATION / 2){
      showToast(toastMessages[1])
    }
    
    if (remainingTime === 0){
      clearInterval(timeId)
      remainingTime = DURATION
      showToast(toastMessages[2])
    }
  }, 1000)
}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const card = document.querySelector("#toast")
  const cardMessage = document.querySelector("#toast-message")
  cardMessage.innerText = message
  card.classList.toggle("show")
  const toastId = setTimeout(()=>{
    card.classList.toggle("show")
    console.log("Disarmed")
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const toastButton = document.querySelector("#close-toast")
  toastButton.addEventListener('click', ()=>{
    clearTimeout(toastId)
    console.log('ref1 --> ' + card.classList)
    if (card.classList.contains("show")){
      card.classList.toggle("show")
    }
    console.log("Emergency disarmed")
    console.log('ref2 --> ' + card.classList)

  })
}
