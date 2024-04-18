const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval 



// ITERATION 1: Add event listener to the start button

// Your code goes here ...


const startB=document.querySelector("#start-btn");
startB.addEventListener( "click",()=>{
startCountdown();
});


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
startB.disabled=true;
timer=setInterval(function(){
remainingTime=remainingTime-1;

document.querySelector('#time').textContent = remainingTime;

//document.getElementById('time').textContent=remainingTime;

if(remainingTime<=0)  {

  clearInterval(timer);
  showToast("Lift off!");
  startB.disabled=false;
}

},1000)

}
  // Your code goes here ...





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
/*
  let toast = document.querySelector('#toast');
  //let toastMessage = document.querySelector('#toast-message');
  //toastMessage.textContent=message;
  //toast.style.display = 'block';

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove ('show');
   },3000)

   */

  
  let toast = document.querySelector('#toast');
  let toastMessage = document.querySelector('#toast-message');
  
   toastMessage.textContent = message;
 

   toast.style.visibility="visible";
   console.log(toast);

   setTimeout(() => {
    
    //toast.classList.remove ('show');
    toast.style.visibility="hidden";

   },3000)

 
  // document.ge  tElementById("close-toast").onclick = function() {
   
    // toast.style.display = 'none'; 
   //};

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
