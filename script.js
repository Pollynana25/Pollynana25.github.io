// script.js

// Bark sound on hover (optional)
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    const bark = document.getElementById('barkSound');
    if (bark) {
      bark.currentTime = 0;
      bark.play();
    }
  });
});

// Paw trail effect
const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
  x: undefined,
  y: undefined
};

let particles = [];
const pawImg = new Image();
pawImg.src = 'images/paw-cursor.png';

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 25;
    this.opacity = 1;
    this.fade = 0.03;
  }
  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(pawImg, this.x, this.y, this.size, this.size);
    ctx.globalAlpha = 1;
  }
  update() {
    this.opacity -= this.fade;
  }
}

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  particles.push(new Particle(mouse.x, mouse.y));
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].opacity <= 0) {
      particles.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Fix PancakeSwap redirect
const buyBtn = document.querySelector("a[href*='pancakeswap']");
if (buyBtn) {
  buyBtn.href = `https://pancakeswap.finance/swap?outputCurrency=0x49af8c0dd0d2c5bce9e3afd2a1d404004863c052&chain=bsc`;
}
