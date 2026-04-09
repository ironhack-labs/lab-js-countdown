const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const countDown = document.querySelector("#time")



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const buttonStart = document.querySelector("#start-btn")
buttonStart.addEventListener("click",startCountdown)



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  const intervalID = setInterval(() => {
     buttonStart.disabled = true ;
  remainingTime-- ;
  countDown.textContent = remainingTime;
  if (remainingTime === 0){
  clearInterval(intervalID);
  showToast();
  }
  },1000)
  
 //! why we make text content not innertext?
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const showToast = document.querySelector("#toast");
  showToast.classList.add("show")
  setTimeout (() => {
  showToast.classList.remove("show")
  }, 3000)




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
