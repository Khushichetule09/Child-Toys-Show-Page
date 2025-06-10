// Animated toy icons background
const canvas = document.getElementById('toy-bg');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

const icons = ['🚗','🧸','🎯','🚀','🛸'];
const toys = [];

function rand(min, max) { return Math.random() * (max - min) + min; }

class Toy {
  constructor() {
    this.x = rand(0, canvas.width);
    this.y = rand(canvas.height, canvas.height * 1.5);
    this.size = rand(24, 48);
    this.speed = rand(0.5, 2);
    this.icon = icons[Math.floor(rand(0, icons.length))];
  }
  update() {
    this.y -= this.speed;
    if (this.y < -50) {
      this.y = canvas.height + rand(0, 100);
      this.x = rand(0, canvas.width);
    }
  }
  draw() {
    ctx.font = `${this.size}px sans-serif`;
    ctx.fillText(this.icon, this.x, this.y);
  }
}

for (let i = 0; i < 80; i++) toys.push(new Toy());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  toys.forEach(t => {
    t.update();
    t.draw();
  });
  requestAnimationFrame(animate);
}
animate();

// Contact form submission handler
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thanks! We'll get back to you soon.");
  e.target.reset();
});
