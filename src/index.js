const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let startBtn=document.querySelector('#start-btn')
let countNumber=document.getElementById('time')
let showToastElement=document.getElementById('toast')
let closeToast=document.querySelector('span#close-toast')
let toastMassage=document.querySelector('#toast-message')
// ITERATION 1: Add event listener to the start button
 let toastTimer=null;

// Your code goes here ...
closeToast.addEventListener('click',()=>{showToastElement.classList.remove("show")})

startBtn.addEventListener('click',()=>startCountdown())



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  if(timer) return;
  if(remainingTime===0){remainingTime=DURATION;}
  countNumber.innerText=remainingTime;

  timer=setInterval(()=>{
   remainingTime--;
   countNumber.innerText=remainingTime;
   console.log(remainingTime);

   if(remainingTime<=10&&remainingTime>5){showToast("⏰ Final countdown! ⏰")}
   else if(remainingTime<=5&&remainingTime>0){showToast("Start the engines! 💥")}

    if(remainingTime===0){
    clearInterval(timer);
    timer = null
    showToast('Countdown finished!');
    // showToastm.classList.remove("toast");
   
   }
  },1000)
 
  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  
  showToastElement.classList.remove("show");
  void showToastElement.offsetWidth;
  showToastElement.classList.add("show");
  console.log(message);
 
  // Your code goes here ...
  toastMassage.innerText=message;
  clearTimeout(toastTimer)
  toastTimer=setTimeout(()=>{showToastElement.classList.remove("show")},3000)

}
