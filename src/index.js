const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBnt = document.querySelector("#start-btn");
const counter = document.querySelector("#time")

startBnt.addEventListener("click", () => {
  startCountdown(); 
});



// ITERATION 2: Start Countdown
function startCountdown() {
  //console.log("startCountdown called!");
  startBnt.disabled = true;
  const intervalId = setInterval(() => {
    counter.innerText--;
    

    if(counter.innerText === "0") {
      clearInterval(intervalId)
      startBnt.disabled = false;
      showToast()
    }
  }, 1000) 
}


// ITERATION 3: Show Toast
function showToast(message) {
  //console.log("showToast called!");

  const toast = document.querySelector("#toast");
  toast.classList.add("show");


  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000)



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const closeBtn = document.querySelector("span#close-toast");
  closeBtn.addEventListener("click", () => {
    clearTimeout(toastTimeout);
    toast.classList.remove("show");
  });

}
