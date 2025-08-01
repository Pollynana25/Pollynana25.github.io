// script.js

// Preloader
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// Cursor trail effect
const trailCanvas = document.getElementById("trail");
const ctx = trailCanvas.getContext("2d");

trailCanvas.width = window.innerWidth;
trailCanvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 4;
    this.alpha = 1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 111, 97, ${this.alpha})`;
    ctx.fill();
  }
  update() {
    this.y -= 0.5;
    this.alpha -= 0.01;
  }
}

function animate() {
  ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
  particles.forEach((p, i) => {
    p.update();
    p.draw();
    if (p.alpha <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 3; i++) {
    particles.push(new Particle(e.clientX, e.clientY));
  }
});

window.addEventListener("resize", () => {
  trailCanvas.width = window.innerWidth;
  trailCanvas.height = window.innerHeight;
});
