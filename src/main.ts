import { canvas, ctx, config } from './canvas';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.
class Circle {
  x: number;
  y: number;
  size: number;
  color?: string;

  constructor(x: number, y: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color || 'White';
    ctx.fill();
    ctx.closePath();
  }
}

const circle = new Circle(canvas.width / 2, canvas.height / 2, 10, 'Green');
const circles: Circle[] = [];

window.addEventListener('mousedown', (event: MouseEvent) => {
  circle.x = event.clientX;
  circle.y = event.clientY;
  circles.push(circle);
});

function animate() {
  window.requestAnimationFrame(animate);
  circles.forEach((circle: Circle) => {
    circle.draw();
  });
};

animate();
