const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const buttonNode= document.querySelector("#start-btn")
const remainingTimeNode=document.querySelector("#time")
const toastNode=document.querySelector("#toast")
const closeToastButtonNode=document.querySelector("#close-toast")


// ITERATION 1: Add event listener to the start button

buttonNode.addEventListener("click",()=>{
startCountdown()

})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  buttonNode.disabled=true
  remainingTime = DURATION;
  
  
  timer=setInterval(() => {
    if(remainingTime==10){
      showToast("⏰ Final countdown! ⏰")
    }
    else if(remainingTime==5){
      showToast("Start the engines! 💥")}

    else if (remainingTime<=0){
      clearInterval(timer)
      buttonNode.disabled=false
      showToast("Lift off! 🚀)")
      return
     }

    remainingTime --
    remainingTimeNode.innerHTML= remainingTime
    
  }, 1000);

  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastNode.classList.add("show")
  toastNode.innerHTML=message
    

  setTimeout(()=>{
  toastNode.classList.remove("show")
    
  },3000)
  

    console.log(toastNode)


  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

closeToastButtonNode.addEventListener("click",()=>{

  toastNode.classList.remove("show")


})
}
