const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

let startBtn = document.querySelector("#start-btn")
startBtn.addEventListener("click",()=>{
  remainingTime= DURATION;
  startCountdown();
})


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  let time = document.querySelector("#time")
  let timer = setInterval(()=>{
    time.innerHTML = remainingTime--;
    if(remainingTime === -1){
      showToast();

      clearInterval(timer);
      remainingTime= DURATION;
    }
  },1000)
  

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  let toast = document.querySelector("#toast")
  toast.classList.add("show")

  setTimeout(()=>{
    toast.classList.remove("show")
  }
    ,3000)



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  let closeToast = document.querySelector("#close-toast")
  closeToast.addEventListener("click",()=>{
    toast.classList.remove("show")

  });
}
