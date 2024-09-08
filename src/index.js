const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtnNode = document.querySelector("#start-btn")

startBtnNode.addEventListener("click", startCountdown)




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startBtnNode.disabled = true;

const intervalId = setInterval(function () {

  remainingTime--;

const timeNode = document.querySelector("#time")
timeNode.innerText= `${remainingTime}`

  if (remainingTime === 0) {
    clearInterval(intervalId);

    showToast()
  }

}, 1000);

}







// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const etiquetaNode = document.querySelector("#toast")

  const list= etiquetaNode.classList;
    list.add("show");

    const timeoutId = setTimeout(function () {
      
      list.remove("show")

    }, 3000);




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
