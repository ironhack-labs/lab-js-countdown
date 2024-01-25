const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

let startButton = document.querySelector("#start-btn")

startButton.onclick = () => {

  const Countdown = setInterval(() => {
    remainingTime--
    document.querySelector("#time").innerHTML = remainingTime

    if (remainingTime === 0) {
      clearInterval(Countdown)
      showToast()
    }

  }, 100)


}


// ITERATION 2: Start Countdown
// function startCountdown() {
//   console.log("startCountdown called!");
// Your code goes here ...
// }
// ITERATION 3: Show Toast
function showToast(message) {


  document.querySelector('#toast').classList.add('show')

  const intervalID = setTimeout(() => {
    document.querySelector(".show").innerHTML = "popino"
  }, 3000)




  const closeToast = document.querySelector("#close-toast")

  closeToast.onclick = () => {
    closeToast("show")
  }

}

console.log("showToast called!");
// if (remainingTime === 0) {

//   const intervalID = setTimeout(() => {
//     document.querySelector(".show").innerHTML = "popino"
//   }, 3000)


// }

// //
// document.getElementById("myDIV").classList.toggle("myStyle");



// Your code goes here ...


// BONUS: ITERATION 4: TOAST CLOSE BUTTON




