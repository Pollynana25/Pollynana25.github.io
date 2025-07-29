const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let circles = [];

function init() {
  resize();
  circles = [];
  const count = 50;
  for (let i = 0; i < count; i++) {
    circles.push({
      x: Math.random() * width,
      y: Math
