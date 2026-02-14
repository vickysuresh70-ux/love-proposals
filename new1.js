const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const music = document.getElementById("bg-music");

// No button run away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
 
});

// Yes button click
yesBtn.addEventListener("click", () => {
  alert("Yayyy 😍 I Love You Too pujipa  💖");
  music.play();
});
