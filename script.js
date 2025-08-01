// script.js

// Hide preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";
});

// Canvas trail (optional sparkles or dots)
const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const trails = [];

window.addEventListener("mousemove", (e) => {
  trails.push({ x: e.clientX, y: e.clientY, alpha: 1 });
});

function animateTrail() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < trails.length; i++) {
    const t = trails[i];
    ctx.beginPath();
    ctx.arc(t.x, t.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 111, 97, ${t.alpha})`;
    ctx.fill();
    t.alpha -= 0.02;
    if (t.alpha <= 0) trails.splice(i, 1);
  }
  requestAnimationFrame(animateTrail);
}
animateTrail();
