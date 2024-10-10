const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
//let timer = ; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById("start-btn");

 startButton.addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  let timer = setInterval(()=> {
    if(remainingTime <= 0) {
      clearInterval(timer)
      showToast()
    }
    document.getElementById("time").innerText = remainingTime;
    remainingTime -= 1;

  }, 1000);
  
}
// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

const constToast =  document.querySelector(".toast");
constToast.classList.add("show");

setTimeout(function (){
  constToast.classList.remove("show")
}, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

const toastCloseButton = document.getElementById("close-toast");

toastCloseButton.addEventListener("click", () => {
  constToast.classList.remove("show");
})

}
