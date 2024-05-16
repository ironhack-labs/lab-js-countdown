const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

document.querySelector("#start-btn").addEventListener("click", ()=>{
  startCountdown()
})

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  document.getElementById("start-btn").disabled = true;
  timer = setInterval(() => {    
    if(remainingTime > 0){
      remainingTime -=1;
      console.log(remainingTime)
      document.querySelector("#time").innerText = remainingTime;
      
    }else if(remainingTime === 0){
      remainingTime -=1;
            showToast();
            clearInterval(timer)
    } 
  }, 1000);  
}

 


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  message = document.querySelector(".toast");
  message.classList.add("show")
  setTimeout(()=>{
    message.classList.remove("show")
  },3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  document.querySelector("span#close-toast").addEventListener("click", ()=>{
    message.classList.remove("show")
  })

}
