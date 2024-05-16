const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

 const startButton = document.getElementById("start-btn");
 startButton.addEventListener("click", () => {
  
  startCountdown();

 })




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  const timeElement = document.getElementById("time");
  
  const intervalId = setInterval( () => {
    startButton.disabled = true;
    remainingTime -= 1;
    timeElement.innerHTML = remainingTime;
    if (remainingTime <= 0) {
      showToast();
      clearInterval(intervalId)
    }
  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toastCard = document.getElementById("toast-message");
  toastCard.classList.add("show");
  setTimeout( () => {
    toastMessage.classList.remove("show")
  }, 3000)




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // const closeToastButton = document.getElementById("close-toast");
  // closeToastButton.addEventListener("click", ()=> {
  //   toastCard.classList.remove("show");
  //   remainingTime = DURATION;
  //   startCountdown();
  // })

}
