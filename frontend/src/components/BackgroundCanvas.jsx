import { useRef, useEffect } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();

    //  Mouse com área pequena
    const mouse = {
      x: null,
      y: null,
      radius: 250,
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    //  Criando partículas
    const particles = [];
    const numberOfParticles = 250
    ;

    for (let i = 0; i < numberOfParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 1.2 + 0.5,
        speedY: (Math.random() - 0.5) * 0.4,
      });
    }

    function drawParticle(p) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "#1DB954";
      ctx.shadowColor = "#1ed760";
      ctx.shadowBlur = 12;
      ctx.fill();
    }

    function updateParticle(p) {
      //  Movimento contínuo
      p.x += p.speedX;
      p.y += p.speedY;

      // Loop lateral
      if (p.x > canvas.width) {
        p.x = 0;
        p.y = Math.random() * canvas.height;
      }

      if (p.y > canvas.height) {
        p.y = 0;
      }

      if (p.y < 0) {
        p.y = canvas.height;
      }

      //  Interação suave com mouse
      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - p.x;
        let dy = mouse.y - p.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = dx / distance;
          const directionY = dy / distance;

          p.x -= directionX * force * 2;
          p.y -= directionY * force * 2;
        }
      }

      drawParticle(p);
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => updateParticle(p));

      animationId = requestAnimationFrame(animate);
    }

    animate();

    // 🧹 Cleanup importante no React
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "#000000",
      }}
    />
  );
}