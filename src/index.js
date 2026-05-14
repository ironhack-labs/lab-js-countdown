const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButtonElement = document.getElementById('start-btn');
startButtonElement.addEventListener('click', () => {
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  const timeElement = document.getElementById('time')
  const countingDown = setInterval(() => {
    timeElement.innerHTML--
    if (timeElement.innerHTML <= 0) {
      clearInterval(countingDown);
      showToast()
    }
  }, 1000)

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const showToastElement = document.getElementById('toast');
  closeToast();
  showToastElement.classList.add('show')
  setTimeout(()=>{
  showToastElement.classList.remove('show')
  },3000)



}
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
function closeToast(){
  const closeToastElement = document.getElementById('close-toast')
  const showToastElement = document.getElementById('toast');
  closeToastElement.addEventListener('click',()=>{
    showToastElement.classList.remove('show')
  })
}