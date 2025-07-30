// Trail effect (mouse follow)
const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.size = Math.random() * 5 + 2;
  this.speedX = Math.random() * 3 - 1.5;
  this.speedY = Math.random() * 3 - 1.5;
  this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
}

Particle.prototype.update = function () {
  this.x += this.speedX;
  this.y += this.speedY;
  this.size *= 0.95;
};

Particle.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fill();
};

function handleParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();

    if (particles[i].size < 0.5) {
      particles.splice(i, 1);
      i--;
    }
  }
}

window.addEventListener("mousemove", function (e) {
  for (let i = 0; i < 5; i++) {
    particles.push(new Particle(e.x, e.y));
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

animate();

// Bark sound on click mascot
const mascot = document.getElementById("pollyMascot");
const barkSound = document.getElementById("barkSound");
if (mascot) {
  mascot.addEventListener("click", () => {
    barkSound.currentTime = 0;
    barkSound.play();
  });
}

// Popup timer
window.addEventListener("load", () => {
  setTimeout(() => {
    const popup = document.getElementById("popup");
    if (popup) popup.classList.add("show");
  }, 5000);
});

function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("show");
}
