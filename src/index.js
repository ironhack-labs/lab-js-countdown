const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

let tiempo = document.querySelector("#time")
let mensaje = document.querySelector("#toast")


// ITERATION 1: Add event listener to the start button

// Your code goes here ...

let botonInicio = document.querySelector("#start-btn")
botonInicio.addEventListener("click", () =>{
  startCountdown()
})


// ITERATION 2: Start Countdown
function startCountdown() {

  let intervalId = setInterval( () =>{
    remainingTime--
    tiempo.innerText = remainingTime


    if (remainingTime == 0){
      clearInterval(intervalId)
      showToast()

    }
botonInicio.disabled = true

  }, 1000) 




  console.log("startCountdown called!");


  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

mensaje.classList.add("show")
setTimeout (() => {
  mensaje.classList.remove("show")
}, 3000)




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
