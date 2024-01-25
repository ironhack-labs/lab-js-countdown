const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.querySelector("#start-btn").addEventListener("click", startCountdown)


// ITERATION 2: Start Countdown

function startCountdown() {
  console.log("startCountdown called!");
  let counter = 10;
  const id = setInterval(() => {
    let time = document.querySelector("div#time");
    document.querySelector("button#start-btn").disabled = true;


    time.innerHTML = `${counter}`
    counter--;

    if (counter < 0) {
      clearInterval(id);
      showToast("Start the engines! 💥")
    };
  }, 1000);



  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");  
  // Your code goes here ...

  const toast = document.querySelector("div#toast")
  toast.classList.add("show");
  setTimeout(() => {
      toast.classList.remove("show");
  }, 3000)


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  document.querySelector("#close-toast").addEventListener("click", () => {
    toast.classList.remove("show");
  })

  document.querySelector("#toast-message").innerHTML = message;

}
