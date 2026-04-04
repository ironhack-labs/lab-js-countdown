const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const htmlTimeElement = document.querySelector('#time')
const startButton = document.querySelector('#start-btn');
startButton.addEventListener("click",()=>{
    timer = setInterval(() => {
    remainingTime--
    htmlTimeElement.innerText = remainingTime;
    
    if(remainingTime === 0){
      clearInterval(timer)
      showToast()
    }
    console.log(remainingTime);
  }, 1000);
  showToast()

  });





// ITERATION 3: Show Toast

function showToast(message) {
  //Adds the toast card
    const toastElement = document.querySelector('#toast')
    toastElement.classList.add("show")
    setTimeout(() => {
      toastElement.classList.remove('show');
    }, 3000);
    //makes it closable
    const closeToastElement = document.querySelector('#close-toast')
    closeToastElement.addEventListener('click', ()=>{
      toastElement.classList.remove('show');
    })
  // new message at start
    const toastMessageElement = document.querySelector('#toast-message')
    if(remainingTime === 10){
      toastMessageElement.innerText = '⏰ Final countdown! ⏰';
    }
      
    }



