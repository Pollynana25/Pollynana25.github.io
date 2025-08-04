// script.js

// Preloader handling
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
});

// Bark sound on click
const barkSound = document.getElementById("barkSound");
document.addEventListener("click", () => {
  if (barkSound) barkSound.play();
});

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

// Cursor trail effect
const trailCanvas = document.getElementById("trail");
const ctx = trailCanvas.getContext("2d");

let width = (trailCanvas.width = window.innerWidth);
let height = (trailCanvas.height = window.innerHeight);

let particles = [];

window.addEventListener("resize", () => {
  width = trailCanvas.width = window.innerWidth;
  height = trailCanvas.height = window.innerHeight;
});

document.addEventListener("mousemove", (e) => {
  particles.push({
    x: e.clientX,
    y: e.clientY,
    alpha: 1,
    radius: Math.random() * 6 + 2,
  });
});

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 111, 97, ${p.alpha})`;
    ctx.fill();
    p.alpha -= 0.02;
    if (p.alpha <= 0) {
      particles.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animate);
}
animate();
