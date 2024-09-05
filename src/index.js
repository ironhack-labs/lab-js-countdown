const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timerClose = null;


// ITERATION 1: Add event listener to the start button

const buttonStartNode = document.querySelector("#start-btn");
const timeNode = document.querySelector("div#time");
const toastNode = document.querySelector("div#toast")
const closeToastNode = document.querySelector("span#close-toast")

buttonStartNode.addEventListener("click", ()=>{
  startCountdown()
  buttonStartNode.disabled = true;
});

closeToastNode.addEventListener("click", ()=>{
  toastNode.classList.toggle("show")
  clearTimeout(timerClose);
});


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  
  if(remainingTime === 10) showToast("⏰ Final countdown! ⏰");
  timer = setInterval(()=> {
    remainingTime--;
    // console.log(remainingTime);
    timeNode.innerText = remainingTime;

    if(remainingTime === 5) showToast("Start the engines! 💥");
    else if(remainingTime === 0) {
      clearInterval(timer)
      showToast("Lift off! 🚀");
    }
  } ,1000);

}


// ITERATION 3: Show Toast
function showToast(message) {
  // console.log("showToast called!");

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  toastNode.classList.toggle("show");
  timerClose = setTimeout(()=>{toastNode.classList.toggle("show")},3000);

  // BONUS: ITERATION 5: MORE TOASTS
  toastNode.querySelector("#toast-message").innerText = message;


}
