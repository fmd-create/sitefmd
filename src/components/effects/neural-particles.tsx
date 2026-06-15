"use client";

import { useEffect, useRef } from "react";

export function NeuralParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let w = 400;
    let h = 340;

    interface Node {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
      pulse: number;
      phase: number;
    }

    const nodes: Node[] = [];
    const NODE_COUNT = 45;
    const CONNECTION_DIST = 140;

    const cvs = canvas!;
    const ctxt = ctx;

    function resize() {
      const parent = cvs.parentElement!;
      w = parent.clientWidth;
      h = parent.clientHeight;
      if (w < 1) w = 400;
      if (h < 1) h = 340;
      const dpr = window.devicePixelRatio || 1;
      cvs.width = w * dpr;
      cvs.height = h * dpr;
      cvs.style.width = `${w}px`;
      cvs.style.height = `${h}px`;
      ctxt.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initNodes() {
      nodes.length = 0;
      const centerX = w / 2;
      const centerY = h / 2;
      const spread = Math.min(w, h) * 0.45;

      // Layered clusters for depth
      for (let i = 0; i < NODE_COUNT; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * spread;
        const cluster = Math.floor(Math.random() * 3);
        const cx = centerX + (cluster - 1) * spread * 0.5;
        const cy = centerY + ((cluster % 3) - 1) * spread * 0.3;

        nodes.push({
          x: cx + Math.cos(angle) * radius * 0.6,
          y: cy + Math.sin(angle) * radius * 0.6,
          z: 0.3 + Math.random() * 0.7,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          vz: (Math.random() - 0.5) * 0.002,
          radius: 1 + Math.random() * 2.5,
          pulse: Math.random() * Math.PI * 2,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw() {
      ctxt.clearRect(0, 0, w, h);

      const time = Date.now() * 0.001;
      const dim = Math.min(w, h);

      // Background glow orb
      const bgGlow = ctxt.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, dim * 0.5);
      bgGlow.addColorStop(0, `rgba(10, 92, 255, ${0.04 + 0.03 * Math.sin(time * 0.3)})`);
      bgGlow.addColorStop(0.5, `rgba(0, 194, 255, ${0.02 + 0.02 * Math.sin(time * 0.4 + 1)})`);
      bgGlow.addColorStop(1, "rgba(10, 92, 255, 0)");
      ctxt.fillStyle = bgGlow;
      ctxt.fillRect(0, 0, w, h);

      // Update nodes
      for (const n of nodes) {
        n.x += n.vx + Math.sin(time * 0.2 + n.phase) * 0.08;
        n.y += n.vy + Math.cos(time * 0.25 + n.phase) * 0.08;
        n.z += n.vz;
        if (n.z < 0.1) n.z = 0.1;
        if (n.z > 1) n.z = 1;
        n.pulse += 0.006;

        // Contain within bounds with soft padding
        const pad = 30;
        if (n.x < pad) n.vx = Math.abs(n.vx);
        if (n.x > w - pad) n.vx = -Math.abs(n.vx);
        if (n.y < pad) n.vy = Math.abs(n.vy);
        if (n.y > h - pad) n.vy = -Math.abs(n.vy);
      }

      // Draw connections (depth-sorted for better layering)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = CONNECTION_DIST * (a.z + b.z) * 0.5;

          if (dist < maxDist) {
            const t = 1 - dist / maxDist;
            const alpha = t * t * 0.3;
            const avgPulse = 0.5 + 0.5 * Math.sin((a.pulse + b.pulse) * 0.5 + time * 0.3);

            ctxt.strokeStyle = `rgba(0, 194, 255, ${alpha * (0.2 + avgPulse * 0.8)})`;
            ctxt.lineWidth = 0.3 + t * 1.2 * a.z * b.z;
            ctxt.beginPath();
            ctxt.moveTo(a.x, a.y);
            ctxt.lineTo(b.x, b.y);
            ctxt.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const pulseFactor = 0.5 + 0.5 * Math.sin(n.pulse + time * 0.5);
        const r = n.radius * (0.8 + pulseFactor * 0.4) * n.z;

        // Outer glow (depth-scaled)
        const glowR = r * (5 + n.z * 4);
        const glow = ctxt.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
        glow.addColorStop(0, `rgba(0, 194, 255, ${0.15 * n.z})`);
        glow.addColorStop(1, "rgba(0, 194, 255, 0)");
        ctxt.fillStyle = glow;
        ctxt.beginPath();
        ctxt.arc(n.x, n.y, glowR, 0, Math.PI * 2);
        ctxt.fill();

        // Core
        ctxt.fillStyle = `rgba(10, 92, 255, ${(0.5 + pulseFactor * 0.5) * n.z})`;
        ctxt.beginPath();
        ctxt.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctxt.fill();

        // Hot core
        ctxt.fillStyle = `rgba(245, 247, 250, ${(0.2 + pulseFactor * 0.6) * n.z})`;
        ctxt.beginPath();
        ctxt.arc(n.x, n.y, r * 0.3, 0, Math.PI * 2);
        ctxt.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    initNodes();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(cvs.parentElement!);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full"
      style={{ aspectRatio: "400 / 340" }}
    />
  );
}
