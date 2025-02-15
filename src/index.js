const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.getElementById("start-btn").addEventListener("click", startCountdown)



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  const timeDisplay = document.getElementById("time");
  if (timer) {
    clearInterval(timer);
  }
remainingTime = DURATION;
timeDisplay.innerText = remainingTime;

showToast("⏰ Final countdown! ⏰");

  timer = setInterval(()=>{
    if(remainingTime > 0){
      remainingTime --;
      timeDisplay.innerText = remainingTime;
      if (remainingTime === 5) {
        showToast("Start the engines! 💥");}
  }else{
    clearInterval(timer);
      showToast("Lift off! 🚀");
  }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
const closeToastBtn = document.getElementById("close-toast");

toastMessage.innerText = message;

toast.classList.add("show");

setTimeout(() =>{
  toast.classList.remove("show");

}, 3000);

closeToastBtn.onclick=() =>{
  toast.classList.remove("show");
};



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
