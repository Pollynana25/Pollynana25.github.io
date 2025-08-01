// script.js

// Preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
});

// Canvas mouse trail effect
const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
  x: null,
  y: null
};

const particles = [];

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.size = Math.random() * 5 + 1;
  this.color = "#ff6f61";
  this.velocityX = (Math.random() - 0.5) * 3;
  this.velocityY = (Math.random() - 0.5) * 3;
  this.opacity = 1;
}

Particle.prototype.update = function () {
  this.x += this.velocityX;
  this.y += this.velocityY;
  this.opacity -= 0.02;
};

Particle.prototype.draw = function () {
  ctx.globalAlpha = this.opacity;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.globalAlpha = 1;
};

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  for (let i = 0; i < 3; i++) {
    particles.push(new Particle(mouse.x, mouse.y));
  }
});

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].opacity <= 0) {
      particles.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animateParticles);
}

animateParticles();

// Bark sound on click
const barkSound = document.getElementById("barkSound");
document.body.addEventListener("click", () => {
  barkSound.currentTime = 0;
  barkSound.play();
});

// Resize canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
