const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const startButton = document.querySelector("#start-btn")
startButton.addEventListener("click", () => {
startCountdown()
});




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  
const   intervalTime= setInterval(() => {
  let timer = document.getElementById( "time")
  remainingTime --;
  timer.innerHTML = remainingTime ;
  
  if (remainingTime ===0){
    clearInterval(intervalTime)
    showToast()
  }

}, 1000);
}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const list = document.getElementById("toast").classList;
  list.add("show")

setTimeout(() => {
  list.remove( "show")
},3000)


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
