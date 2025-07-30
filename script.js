// Mouse trail effect
const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
  x: undefined,
  y: undefined
};

let particles = [];

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.radius = Math.random() * 4 + 1;
  this.color = "#f9a826";
  this.alpha = 1;
  this.update = function () {
    this.y -= 1;
    this.alpha -= 0.02;
  };
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(249, 168, 38, ${this.alpha})`;
    ctx.fill();
  };
}

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 3; i++) {
    particles.push(new Particle(mouse.x, mouse.y));
  }
});

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].alpha <= 0) {
      particles.splice(i, 1);
      i--;
    }
  }
}
animate();

// Bark sound on click
document.addEventListener("click", function () {
  const bark = document.getElementById("barkSound");
  if (bark) bark.play();
});

// Smooth scrolling
const links = document.querySelectorAll("nav a");
links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    window.scroll({
      top: offsetTop - 60,
      behavior: "smooth"
    });
  });
});

// Responsive canvas resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
