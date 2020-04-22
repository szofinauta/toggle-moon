let main = document.querySelector("main");
let toggler = document.querySelector("#toggle");
toggler.innerText = "🌙";

toggler.addEventListener("click", function() {
  main.classList.toggle("daytime");
  if (toggler.innerText === "🌙") {
    toggler.innerText = "☀️";
    toggler.style.color = "yellow";
  } else {
    toggler.innerText = "🌙";
    toggler.style.color = "orange";
    
  } 
})