const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const btn = document.querySelector("#start-btn");
btn.addEventListener("click",startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {

  showToast("start countdown!");
  // disable timer once button is clicked
  btn.disabled = true;
  const timer = document.querySelector("#time");
  
  const interval = setInterval(()=>{
    remainingTime--;
    // clear interval once time reaches 0
    if(remainingTime === 5){
      showToast("Half way thru!");
    }else if (remainingTime<1){
      clearInterval(interval);
      console.log("timeUP");
      // reset timer 
      remainingTime = 10;
      console.log("end of code ", remainingTime);
      
      showToast("Time up");
      btn.disabled=false;
    }
    // timer.textContent = "";
    timer.textContent = remainingTime;
    console.log(remainingTime);
  },1000);
}



// showToast();
// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // change the text content for the toast if theres message passed to the function
  const toast = document.querySelector("#toast");
 
  toast.firstElementChild.textContent = message;
  toast.classList.add('show');
  // remove show class after the fadeout animation so that it can be added later 
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
  
  
  // listen to the close button
  const toastBtn = document.querySelector("#close-toast");
  toastBtn.addEventListener("click",()=>{
    toast.classList.remove('show');
  });
}
