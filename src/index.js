const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const startButtonNode = document.querySelector('#start-btn')

startButtonNode.addEventListener('click', () => {
  startCountdown()
})




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  const divTimeNode = document.querySelector('#time')
  startButtonNode.disabled = true;
  
  timer = setInterval(function () {
    divTimeNode.innerHTML = remainingTime;
   

    if (remainingTime <= 0) {
      clearInterval(timer); 
      divTimeNode.innerHTML = 0; 
      showToast(); 
    }
   
    remainingTime--;
  }, 1000);
  
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  let toastNode = document.querySelector('#toast')
  
  toastNode.classList.add('show')
  message = 'Lift off! 🚀'
  toastNode.innerHTML = message
   
  let timeOut = setTimeout(() => {
    toastNode.classList.remove('show');
    startButtonNode.disabled = false;
    remainingTime = DURATION;
  }, 3000);

  
}



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const closeToastNode = document.querySelector('#close-toast')
  closeToastNode.addEventListener('click', () => {
   clearTimeout(timeOut)
   //closeToastNode.classList.remove('show')
   startButtonNode.disabled = false
   remainingTime = DURATION
  })