const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn")
startBtn.addEventListener("click", () => {
  startCountdown()})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  document.getElementById("start-btn").disabled = true; 
  intervalId = setInterval(() => {
   remainingTime--
    time.innerText = remainingTime;
    if (remainingTime==0) {
    clearInterval(intervalId)
    showToast()};
  }, 1000);

};




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const list = toast.classList;
  list.add("show");  
  setTimeout(function() {  
    list.remove("show")
    console.log("Toast hidden");
  }, 3000);


  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
