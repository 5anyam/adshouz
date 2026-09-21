"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  alpha: number;
  pulse: number;
  pulseSpeed: number;
  isHub: boolean;
}

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    const PARTICLE_COUNT = 70;
    const HUB_COUNT      = 8;   // larger glowing nodes
    const MAX_DIST       = 150;
    const SPEED          = 0.35;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles(canvas);  // ← pass karo
    };
    
    function initParticles(c: HTMLCanvasElement) {  // ← parameter lo
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const isHub = i < HUB_COUNT;
        particles.push({
          x:          Math.random() * c.width,   // ← canvas ki jagah c
          y:          Math.random() * c.height,
          vx:         (Math.random() - 0.5) * SPEED,
          vy:         (Math.random() - 0.5) * SPEED,
          radius:     isHub ? 3 + Math.random() * 2.5 : 1.2 + Math.random() * 1.5,
          alpha:      isHub ? 0.7 + Math.random() * 0.3 : 0.25 + Math.random() * 0.35,
          pulse:      Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          isHub,
        });
      }
    }
    
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── Update ──────────────────────────────────────────────
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // soft wrap instead of bounce — feels more organic
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;
      }

      // ── Connection lines ─────────────────────────────────────
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > MAX_DIST) continue;

          const strength = 1 - dist / MAX_DIST;
          // sky → cyan gradient on lines
          const isHubLine = particles[i].isHub || particles[j].isHub;
          const lineAlpha = strength * (isHubLine ? 0.35 : 0.12);

          const grad = ctx.createLinearGradient(
            particles[i].x, particles[i].y,
            particles[j].x, particles[j].y
          );
          grad.addColorStop(0, `rgba(14, 165, 233, ${lineAlpha})`);   // sky-500
          grad.addColorStop(1, `rgba(34, 211, 238, ${lineAlpha})`);   // cyan-400

          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = grad;
          ctx.lineWidth   = isHubLine ? 1.0 : 0.6;
          ctx.stroke();
        }
      }

      // ── Dots ─────────────────────────────────────────────────
      for (const p of particles) {
        const pulsedAlpha  = p.alpha + Math.sin(p.pulse) * 0.15;
        const pulsedRadius = p.radius + (p.isHub ? Math.sin(p.pulse) * 1.2 : 0);

        if (p.isHub) {
          // Outer glow ring
          ctx.beginPath();
          ctx.arc(p.x, p.y, pulsedRadius + 5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(14, 165, 233, ${pulsedAlpha * 0.12})`;
          ctx.fill();

          // Mid ring
          ctx.beginPath();
          ctx.arc(p.x, p.y, pulsedRadius + 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34, 211, 238, ${pulsedAlpha * 0.25})`;
          ctx.fill();
        }

        // Core dot — sky to cyan based on position
        const t = p.y / canvas.height;
        const r = Math.round(14  + t * 6);
        const g = Math.round(165 + t * 46);
        const b = Math.round(233 - t * 67);

        ctx.beginPath();
        ctx.arc(p.x, p.y, pulsedRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${pulsedAlpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}
