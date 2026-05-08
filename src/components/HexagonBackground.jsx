import { useEffect, useRef } from 'react';

const HexagonBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width, height;
    let hexagons = [];
    const hexCount = 15;
    const mouse = { x: null, y: null, radius: 150 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    class Hexagon {
      constructor() {
        this.init();
      }

      init() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 30 + 20;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
      }

      draw() {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = this.angle + (i * Math.PI) / 3;
          const x = this.x + this.size * Math.cos(angle);
          const y = this.y + this.size * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        
        ctx.strokeStyle = `rgba(99, 102, 241, ${this.opacity})`; // Soft Indigo
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.rotationSpeed;

        // Interaction with mouse
        if (mouse.x != null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x += dx * force * 0.02;
            this.y += dy * force * 0.02;
            this.opacity = Math.min(0.6, this.opacity + 0.01);
          } else {
            this.opacity = Math.max(0.1, this.opacity - 0.005);
          }
        }

        // Wrap around edges
        if (this.x < -this.size) this.x = width + this.size;
        if (this.x > width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = height + this.size;
        if (this.y > height + this.size) this.y = -this.size;
      }
    }

    const init = () => {
      hexagons = [];
      for (let i = 0; i < hexCount; i++) {
        hexagons.push(new Hexagon());
      }
    };

    const connect = () => {
      for (let a = 0; a < hexagons.length; a++) {
        for (let b = a; b < hexagons.length; b++) {
          const dx = hexagons[a].x - hexagons[b].x;
          const dy = hexagons[a].y - hexagons[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 250) {
            const opacity = (1 - distance / 250) * 0.2;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(hexagons[a].x, hexagons[a].y);
            ctx.lineTo(hexagons[b].x, hexagons[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      hexagons.forEach((hex) => {
        hex.update();
        hex.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none opacity-20"
    />
  );
};

export default HexagonBackground;
