const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let circles = [];

function init() {
  resize();
  circles = [];
  const count = 30;
  for (let i = 0; i < count; i++) {
    circles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 10 + Math.random() * 15,
      color: `hsl(${Math.random() * 50 + 180}, 70%, 70%)`,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    });
  }
}

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  circles.forEach(c => {
    c.x += c.speedX;
    c.y += c.speedY;
    if (c.x < -c.radius) c.x = width + c.radius;
    if (c.x > width + c.radius) c.x = -c.radius;
    if (c.y < -c.radius) c.y = height + c.radius;
    if (c.y > height + c.radius) c.y = -c.radius;

    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.shadowColor = c.color;
    ctx.shadowBlur = 15;
    ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(draw);
}

window.addEventListener('resize', () => {
  resize();
  init();
});

init();
draw();
