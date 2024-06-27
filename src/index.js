const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startBtn =document.querySelector("#start-btn")
let toast = document.querySelector("#toast")
startBtn.addEventListener("click",()=>{
  startCountdown()
})


// ITERATION 2: Start Countdown
let count = document.querySelector("#time")
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  let intervalId  = setInterval(()=>{
    
    startBtn.disabled=true

    if (count.innerText >0){
      console.log("a")
    }else{
      clearInterval(intervalId)
      showToast()
    }
    count.innerText--

  },1000) 
}





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toast.classList.add("show")
  // Your code goes here ...
 
   count.innerText = 4
  let intervalId = setInterval(()=>{
    if(count.innerText < 2){
      clearInterval(intervalId)
      toast.classList.remove("show")
    }
    count.innerText--
  },1000)
  


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  let closeBtn = document.querySelector("#close-toast")
  closeBtn.addEventListener("click",()=>{
    toast.classList.remove("show")
  })


}
