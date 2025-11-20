const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...


const startBtn = document.getElementById("start-btn")
startBtn.addEventListener("click", () => {
  startCountdown()

})




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  let counter = 10;
  const numbers = document.getElementById("time");
  const startBtn = document.getElementById("start-btn")

  startBtn.disabled = true
  numbers.textContent = counter

  const intervalId = setInterval(() => {
    counter--;
    numbers.textContent = counter;
    if (counter === 0) {
      clearInterval(intervalId);
      showToast()
      startBtn.disabled = false;
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  
  const final = document.getElementById("toast-message");
  final.classList.add("show")
  final.classList.add("toast")
 

  setTimeout(()=>{
    final.classList.remove("show");
    final.classList.remove("toast")
  }, 3000)


  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
