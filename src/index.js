const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timeNode = document.querySelector("#time")
let toastNode = document.querySelector("#toast")
let closeButton = document.querySelector("#close-toast")


// ITERATION 1: Add event listener to the start button

let startButtonNode = document.querySelector("#start-btn")
startButtonNode.addEventListener ("click", () =>{
  //console.log("clicar") - funciona
  startCountdown()
  startButtonNode.disabled = true//un cop clicat i quan ha inicat la funció, l'usuari no pot tornar a clicar el botó, però no desapareix!

})



// ITERATION 2: Start Countdown
function startCountdown() {
  // console.log("startCountdown called!"); 
    
  timer = setInterval( () => {
   if (remainingTime >0){
    remainingTime -= 1
    timeNode.innerText = remainingTime // li demano que modifiqui el text intern del div #timer per veure els canvis a la pantalla de vizualització.
   }else{
    clearInterval(timer)
    showToast()// va dins de l'interval perq ho volem un cop arriba a 0
   }
  }, 1000)
}





// ITERATION 3: Show Toast
function showToast(message) {
  //console.log("showToast called!");

    toastNode.classList.add("show")
  setTimeout ( () => {
    toastNode.classList.remove("show")
  }, 3000) // quan arriba a 0 apareix el missatge i al cap de 3 segons desapareix

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
    closeButton.addEventListener("click", () => {
    toastNode.classList.remove("show")//fem un node per la X de tancar, que acaba fent el mateix que si passen els 3 segons però l'usuari pot decidir que passi abans.
  })
}
