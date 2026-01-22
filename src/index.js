const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const button=document.getElementById("start-btn")
button.addEventListener("click",()=>{
    startCountdown()
})



const countDown=document.querySelector("#time")

// ITERATION 2: Start Countdown
function startCountdown() {
 timer=setInterval(()=>{
   //remainingTime--
   countDown.innerText-=1;
   document.getElementById("start-btn").disabled = true;
   if(countDown.innerText<=0){
     clearInterval(timer)
     document.getElementById("start-btn").disabled = false;
     showToast(mesg)
   }
 },1000)
 
  // Your code goes here ...
}




const shw= document.querySelector("#toast")
const mesg= document.querySelector("#toast-message")
const hide=document.querySelector("#close-toast")
// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...
     setTimeout(()=>{
        shw.classList.add('show')
     },500)
    
    

  hide.addEventListener("click",()=>{
    shw.classList.remove('show')
  })

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
 
}
