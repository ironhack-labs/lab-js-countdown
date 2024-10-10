const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButtonContainer = document.querySelector("#start-btn") ;

startButtonContainer.addEventListener("click", function(element){
  console.log("button clicked")
  startCountdown();

} )


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  
  timer = setInterval(function(){
    if(remainingTime > 0){
      startButtonContainer.disabled = true;
      remainingTime--;
     
      // set container where to put time info
      const timeContainer = document.querySelector("#time");
      // Display info !
      timeContainer.textContent = remainingTime;  
    }else{
      clearInterval(timer);
      //startButtonContainer.disabled = false;
      showToast("Lift off! 🚀")
    }
  
  
  },1000)
  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  //console.log("showToast called!");

  // Your code goes here ...

  const toastCard = document.getElementById("toast");
  //console.log(toastCard);
  
  toastCard.classList.add("show")
  setTimeout(() => {
    toastCard.classList.remove("show")
    startButtonContainer.disabled = false ;
    remainingTime = DURATION;
    document.getElementById("time").textContent = DURATION;

  }
  ,3000);

 // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  
  // Your code goes here ...

  const closeToastButton = document.getElementById("close-toast")

  closeToastButton.addEventListener("click", function(){
  console.log("buton close clicked")
  toastCard.classList.remove("show")
  clearTimeout()
  startButtonContainer.disabled = false 
  remainingTime = DURATION
  document.getElementById("time").textContent = DURATION
  })

}



  