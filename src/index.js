const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ... "start-btn"

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click",()  => {
  startCountdown(10)
})
/*const deleteButton = contactNode.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    contactNode.remove();
  });*/


// ITERATION 2: Start Countdown
function startCountdown(seconds) {
  let divTimer = document.querySelector("#time")
  let counter = seconds;
  console.log("startCountdown called!");
  const timer = setInterval(()=> {
    startButton.disabled = true
    divTimer.innerText --
    counter--
    console.log(counter)

    if (counter <= 0){
      clearInterval(timer)
      showToast()

    }

  } ,1000)


  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  //console.log("showToast called!");
  /*message - document.querySelector("#toast-message").innerText:
  getElementById(selecciona la ID)

  */
  let toastCard = document.querySelector(".toast")
  toastCard.classList.add("show") 
  setTimeout( () => {
    toastCard.classList.remove("show")
  }, 3000)
  //let messageToast = document.querySelector("#toast-message")
  //messageToast.innerText = `pollarda`
  //toastCard.classList.toggle("show")

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
//showToast("pitosaurio")