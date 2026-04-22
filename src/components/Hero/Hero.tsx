'use client';

import { useEffect, useRef, useState } from "react";

const STAR_COUNT = 320;
const BH_RADIUS = 46;
const BH_GRAVITY_RADIUS = 240;
const BH_LENSING_RADIUS = 108;

// Power-law size distribution: most stars tiny, few bright
function starSize() {
  const r = Math.random();
  return r < 0.7 ? 0.3 + Math.random() * 0.6
    : r < 0.92 ? 1.0 + Math.random() * 0.8
    : 1.8 + Math.random() * 1.4;
}

// Realistic stellar color distribution
function starColor() {
  const r = Math.random();
  if (r < 0.55) return "#ffffff";          // white (A/F)
  if (r < 0.72) return "#fff8e8";          // warm white (G)
  if (r < 0.83) return "#ffd090";          // yellow-orange (K)
  if (r < 0.90) return "#c8d8ff";          // blue-white (B)
  if (r < 0.95) return "#a0c8ff";          // blue (O/B)
  return "#ff9060";                         // red giant
}

function initStars(w: number, h: number) {
  // Milky Way band: diagonal smear of higher density
  const bandAngle = Math.PI * 0.28;
  const bx = Math.cos(bandAngle), by = Math.sin(bandAngle);

  return Array.from({ length: STAR_COUNT }, () => {
    // Bias ~40% of stars toward the galactic band
    let x: number, y: number;
    if (Math.random() < 0.4) {
      const along = (Math.random() - 0.5) * Math.sqrt(w * w + h * h);
      const perp = (Math.random() - 0.5) * h * 0.35;
      x = w / 2 + along * bx - perp * by + (Math.random() - 0.5) * 80;
      y = h / 2 + along * by + perp * bx + (Math.random() - 0.5) * 80;
    } else {
      x = Math.random() * w;
      y = Math.random() * h;
    }
    const size = starSize();
    return {
      x, y, ox: x, oy: y,
      size,
      opacity: 0.15 + Math.random() * 0.85,
      twinkleSpeed: 0.003 + Math.random() * 0.015,
      twinkleOffset: Math.random() * Math.PI * 2,
      color: starColor(),
      spike: size > 1.6,  // diffraction spikes for bright stars
    };
  });
}

// Draw a 4-pointed diffraction spike
function drawSpike(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  size: number, color: string, alpha: number
) {
  const len = size * 5;
  for (let angle = 0; angle < Math.PI; angle += Math.PI / 2) {
    const grad = ctx.createLinearGradient(
      x + Math.cos(angle) * size, y + Math.sin(angle) * size,
      x + Math.cos(angle) * len, y + Math.sin(angle) * len
    );
    grad.addColorStop(0, color.replace("#", "rgba(").replace(/(..)(..)(..)/, (_, r, g, b) =>
      `${parseInt(r,16)},${parseInt(g,16)},${parseInt(b,16)},${alpha * 0.6})`));
    grad.addColorStop(1, "rgba(0,0,0,0)");

    const grad2 = ctx.createLinearGradient(
      x - Math.cos(angle) * size, y - Math.sin(angle) * size,
      x - Math.cos(angle) * len, y - Math.sin(angle) * len
    );
    grad2.addColorStop(0, color.replace("#", "rgba(").replace(/(..)(..)(..)/, (_, r, g, b) =>
      `${parseInt(r,16)},${parseInt(g,16)},${parseInt(b,16)},${alpha * 0.6})`));
    grad2.addColorStop(1, "rgba(0,0,0,0)");

    ctx.beginPath();
    ctx.moveTo(x + Math.cos(angle) * size, y + Math.sin(angle) * size);
    ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 0.7;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - Math.cos(angle) * size, y - Math.sin(angle) * size);
    ctx.lineTo(x - Math.cos(angle) * len, y - Math.sin(angle) * len);
    ctx.strokeStyle = grad2;
    ctx.lineWidth = 0.7;
    ctx.stroke();
  }
}

// Hex color → r,g,b string
function hexRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<ReturnType<typeof initStars>>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const bhPosRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(null);
  const timeRef = useRef(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      starsRef.current = initStars(canvas.width, canvas.height);
      if (bhPosRef.current.x === -9999) {
        bhPosRef.current = { x: canvas.width / 2, y: canvas.height / 2 };
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", onMove);

    const drawBlackHole = (cx: number, cy: number, t: number) => {
      // ── 1. Far diffuse corona glow ──────────────────────────────────────────
      const coronaGrad = ctx.createRadialGradient(cx, cy, BH_RADIUS * 1.5, cx, cy, BH_LENSING_RADIUS * 3.5);
      coronaGrad.addColorStop(0, "rgba(255,110,30,0.10)");
      coronaGrad.addColorStop(0.3, "rgba(220,80,20,0.05)");
      coronaGrad.addColorStop(0.7, "rgba(160,50,10,0.02)");
      coronaGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, BH_LENSING_RADIUS * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = coronaGrad;
      ctx.fill();

      // ── 2. Accretion disk — annular radial gradient rings ──────────────────
      // Each ring: fade in from inner edge, peak, fade out to outer edge
      const rings = [
        { ri: BH_LENSING_RADIUS * 1.0, ro: BH_LENSING_RADIUS * 2.8, peak: 0.25, rgb: "200,60,10",   a: 0.18 },
        { ri: BH_LENSING_RADIUS * 1.0, ro: BH_LENSING_RADIUS * 2.0, peak: 0.3,  rgb: "255,110,30",  a: 0.28 },
        { ri: BH_LENSING_RADIUS * 1.0, ro: BH_LENSING_RADIUS * 1.55,peak: 0.35, rgb: "255,165,60",  a: 0.40 },
        { ri: BH_LENSING_RADIUS * 1.0, ro: BH_LENSING_RADIUS * 1.22,peak: 0.45, rgb: "255,220,140", a: 0.55 },
      ];
      rings.forEach(({ ri, ro, peak, rgb, a }) => {
        const g = ctx.createRadialGradient(cx, cy, ri, cx, cy, ro);
        g.addColorStop(0, `rgba(${rgb},0)`);
        g.addColorStop(peak, `rgba(${rgb},${a})`);
        g.addColorStop(peak * 1.6, `rgba(${rgb},${a * 0.7})`);
        g.addColorStop(1, `rgba(${rgb},0)`);
        ctx.beginPath();
        ctx.arc(cx, cy, ro, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      // ── 3. Relativistic Doppler beaming: one side brighter ─────────────────
      const beamAngle = t * 0.25;
      const beamX = cx + Math.cos(beamAngle) * BH_LENSING_RADIUS * 1.1;
      const beamY = cy + Math.sin(beamAngle) * BH_LENSING_RADIUS * 0.35; // squished = edge-on
      const beam = ctx.createRadialGradient(beamX, beamY, 0, beamX, beamY, BH_LENSING_RADIUS * 0.9);
      beam.addColorStop(0, "rgba(255,240,200,0.22)");
      beam.addColorStop(0.4, "rgba(255,180,80,0.10)");
      beam.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(beamX, beamY, BH_LENSING_RADIUS * 0.9, 0, Math.PI * 2);
      ctx.fillStyle = beam;
      ctx.fill();

      // ── 4. Photon ring — thin incandescent ring ────────────────────────────
      const pr_i = BH_LENSING_RADIUS * 0.90;
      const pr_o = BH_LENSING_RADIUS * 1.10;
      const photon = ctx.createRadialGradient(cx, cy, pr_i, cx, cy, pr_o);
      photon.addColorStop(0,   "rgba(255,255,220,0)");
      photon.addColorStop(0.3, "rgba(255,250,200,0.65)");
      photon.addColorStop(0.5, "rgba(255,255,240,0.92)");
      photon.addColorStop(0.7, "rgba(255,240,180,0.65)");
      photon.addColorStop(1,   "rgba(255,200,80,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, pr_o, 0, Math.PI * 2);
      ctx.fillStyle = photon;
      ctx.fill();

      // ── 5. Rotating plasma streaks ─────────────────────────────────────────
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.28);
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * Math.PI * 2;
        const len = BH_LENSING_RADIUS * (0.65 + Math.sin(t * 0.9 + i * 1.4) * 0.18);
        const alpha = 0.18 + Math.sin(t * 1.8 + i * 0.9) * 0.10;
        const sg = ctx.createLinearGradient(
          Math.cos(a) * BH_RADIUS * 1.05, Math.sin(a) * BH_RADIUS * 1.05,
          Math.cos(a) * len, Math.sin(a) * len
        );
        sg.addColorStop(0, `rgba(255,190,70,${alpha})`);
        sg.addColorStop(0.5, `rgba(255,120,30,${alpha * 0.5})`);
        sg.addColorStop(1, "rgba(200,50,10,0)");
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * BH_RADIUS * 1.05, Math.sin(a) * BH_RADIUS * 1.05);
        ctx.lineTo(Math.cos(a) * len, Math.sin(a) * len);
        ctx.strokeStyle = sg;
        ctx.lineWidth = 0.6 + Math.sin(t * 2.2 + i) * 0.35;
        ctx.stroke();
      }
      ctx.restore();

      // ── 6. Inner shadow: fill black up to photon ring ──────────────────────
      const innerShadow = ctx.createRadialGradient(cx, cy, 0, cx, cy, BH_LENSING_RADIUS * 0.92);
      innerShadow.addColorStop(0,   "rgba(0,0,0,1)");
      innerShadow.addColorStop(0.8, "rgba(0,0,0,1)");
      innerShadow.addColorStop(1,   "rgba(0,0,0,0.6)");
      ctx.beginPath();
      ctx.arc(cx, cy, BH_LENSING_RADIUS * 0.92, 0, Math.PI * 2);
      ctx.fillStyle = innerShadow;
      ctx.fill();

      // ── 7. Event horizon (hard black core) ────────────────────────────────
      ctx.beginPath();
      ctx.arc(cx, cy, BH_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = "#000000";
      ctx.fill();

      // ── 8. Hawking blue edge shimmer ───────────────────────────────────────
      const hk = ctx.createRadialGradient(
        cx - BH_RADIUS * 0.35, cy - BH_RADIUS * 0.35, 0,
        cx, cy, BH_RADIUS * 1.08
      );
      hk.addColorStop(0, "rgba(100,180,255,0.05)");
      hk.addColorStop(0.7, "rgba(60,140,255,0.02)");
      hk.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, BH_RADIUS * 1.08, 0, Math.PI * 2);
      ctx.fillStyle = hk;
      ctx.fill();
    };

    const draw = () => {
      timeRef.current += 0.016;
      const t = timeRef.current;
      const w = canvas.width, h = canvas.height;

      // Smooth BH toward mouse
      const bh = bhPosRef.current;
      const mx = mouseRef.current.x, my = mouseRef.current.y;
      const isOnCanvas = mx > 0 && mx < w && my > 0 && my < h;
      if (isOnCanvas) {
        bh.x += (mx - bh.x) * 0.055;
        bh.y += (my - bh.y) * 0.055;
      }

      // ── Sky ─────────────────────────────────────────────────────────────────
      ctx.fillStyle = "#03040c";
      ctx.fillRect(0, 0, w, h);

      // Milky Way band glow
      const mwAngle = Math.PI * 0.28;
      const mwCx = w * 0.5, mwCy = h * 0.5;
      ctx.save();
      ctx.translate(mwCx, mwCy);
      ctx.rotate(mwAngle);
      const mw = ctx.createRadialGradient(0, 0, 0, 0, 0, h * 0.22);
      mw.addColorStop(0, "rgba(40,35,80,0.18)");
      mw.addColorStop(0.5, "rgba(25,20,55,0.10)");
      mw.addColorStop(1, "rgba(0,0,0,0)");
      ctx.scale(3.5, 1);
      ctx.beginPath();
      ctx.arc(0, 0, h * 0.22, 0, Math.PI * 2);
      ctx.fillStyle = mw;
      ctx.fill();
      ctx.restore();

      // Nebula patches
      const nebulas = [
        { px: 0.22, py: 0.38, r: 0.38, rgb: "18,8,55", a: 0.55 },
        { px: 0.78, py: 0.62, r: 0.32, rgb: "0,28,18", a: 0.45 },
        { px: 0.55, py: 0.15, r: 0.25, rgb: "30,5,40", a: 0.30 },
      ];
      nebulas.forEach(({ px, py, r, rgb, a }) => {
        const ng = ctx.createRadialGradient(w * px, h * py, 0, w * px, h * py, w * r);
        ng.addColorStop(0, `rgba(${rgb},${a})`);
        ng.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = ng;
        ctx.fillRect(0, 0, w, h);
      });

      // ── Stars ───────────────────────────────────────────────────────────────
      starsRef.current.forEach(star => {
        const dx = star.ox - bh.x;
        const dy = star.oy - bh.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let tx = star.ox, ty = star.oy;

        if (dist < BH_GRAVITY_RADIUS && dist > BH_RADIUS) {
          const pull = Math.pow(1 - dist / BH_GRAVITY_RADIUS, 2.5) * 1.9;
          const angle = Math.atan2(dy, dx);
          const bend = angle + pull * (dist < BH_LENSING_RADIUS ? -0.65 : -0.18);
          tx = bh.x + Math.cos(bend) * dist * (1 - pull * 0.58);
          ty = bh.y + Math.sin(bend) * dist * (1 - pull * 0.58);
        }

        const twinkle = 0.5 + 0.5 * Math.sin(t * star.twinkleSpeed * 60 + star.twinkleOffset);
        const finalOpacity = dist < BH_RADIUS * 1.15 ? 0 : star.opacity * (0.35 + 0.65 * twinkle);

        if (finalOpacity < 0.04) return;

        const nearLens = dist > BH_LENSING_RADIUS * 0.88 && dist < BH_LENSING_RADIUS * 1.18;
        const drawSize = (dist < BH_LENSING_RADIUS * 1.1 && dist > BH_RADIUS)
          ? star.size * (1 + (1 - dist / (BH_LENSING_RADIUS * 1.1)) * 3.0)
          : star.size;

        // Glow for bright / lensed stars
        if (star.size > 1.4 || nearLens) {
          ctx.shadowColor = star.color;
          ctx.shadowBlur = nearLens ? 10 : 4 + star.size * 2;
        }

        ctx.globalAlpha = finalOpacity;
        ctx.beginPath();
        ctx.arc(tx, ty, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();

        ctx.shadowBlur = 0;

        // Diffraction spikes for bright stars (not near BH)
        if (star.spike && dist > BH_LENSING_RADIUS * 1.3) {
          drawSpike(ctx, tx, ty, drawSize, star.color, finalOpacity * 0.7);
        }

        ctx.globalAlpha = 1;
      });

      // ── Black hole ──────────────────────────────────────────────────────────
      drawBlackHole(bh.x, bh.y, t);

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    setTimeout(() => setMounted(true), 200);

    return () => {
      cancelAnimationFrame(rafRef.current!);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
    };
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(18px)",
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: "#03040c",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Courier New', Courier, monospace",
      overflow: "hidden",
      position: "relative",
      cursor: "none",
    }}>
      <canvas ref={canvasRef} style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }} />

      {/* Nav */}
      <nav style={{
        position: "relative", zIndex: 10,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #ffffff06",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff", fontSize: "0.875rem" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)" }} />
          azamat.dev
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          {["home", "projects", "about", "contact"].map((item, i) => (
            <a key={item} href="#" style={{
              color: i === 0 ? "#fff" : "#444",
              textDecoration: "none",
              fontSize: "0.85rem",
              borderBottom: i === 0 ? "1px solid var(--accent)" : "none",
              paddingBottom: 2,
            }}>{item}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {["EN", "RU"].map((lang, i) => (
            <button key={lang} style={{
              background: i === 0 ? "#0f1420" : "transparent",
              border: "1px solid #1a2030",
              color: i === 0 ? "#fff" : "#333",
              padding: "4px 10px", fontSize: "0.75rem",
              cursor: "pointer", fontFamily: "inherit",
            }}>{lang}</button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        textAlign: "center", padding: "60px 40px",
        position: "relative", zIndex: 5, pointerEvents: "none",
      }}>
        <div style={{ ...fade(0.3), marginBottom: "1.8rem" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 14px",
            border: "1px solid var(--accent-border)",
            background: "var(--accent-soft)",
            color: "var(--accent)", fontSize: "0.68rem", letterSpacing: "0.22em",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
            AVAILABLE FOR WORK · ANTALYA, TURKEY
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(3.5rem, 9vw, 8rem)",
          fontWeight: 900, lineHeight: 0.93,
          margin: "0 0 0.5em", letterSpacing: "-0.03em",
          ...fade(0.5),
        }}>
          <span style={{ color: "#fff", display: "block" }}>Azamat</span>
          <span style={{ display: "block", WebkitTextStroke: "2px var(--accent)", color: "transparent" }}>
            Altymyshev
          </span>
        </h1>

        <p style={{
          color: "#445", fontSize: "0.75rem", letterSpacing: "0.25em",
          textTransform: "uppercase", marginBottom: "1.4rem",
          ...fade(0.7),
        }}>
          Senior Fullstack Developer
        </p>

        <p style={{
          color: "#7a8a9a", fontSize: "clamp(0.88rem, 1.5vw, 1rem)",
          maxWidth: 480, lineHeight: 1.75, margin: "0 0 2.5rem",
          ...fade(0.9),
        }}>
          I build full-stack products that are{" "}
          <span style={{ color: "var(--accent)" }}>fast to load</span>,{" "}
          <span style={{ color: "var(--accent)" }}>easy to use</span>, and{" "}
          <span style={{ color: "var(--accent)" }}>simple to maintain</span>.
        </p>

        <div style={{
          display: "flex", gap: 12, pointerEvents: "all",
          ...fade(1.1),
        }}>
          <button style={{
            background: "var(--accent)", color: "var(--accent-contrast)", border: "none",
            padding: "13px 30px", fontSize: "0.85rem",
            fontWeight: 700, fontFamily: "inherit", cursor: "pointer",
            letterSpacing: "0.05em",
          }}>View projects →</button>
          <button style={{
            background: "transparent", color: "#aaa",
            border: "1px solid #1a2030", padding: "13px 30px",
            fontSize: "0.85rem", fontFamily: "inherit", cursor: "pointer",
          }}>Get in touch</button>
        </div>
      </div>

      {/* Hint */}
      <div style={{
        position: "absolute", bottom: 28, left: "50%",
        transform: "translateX(-50%)",
        color: "#1e2a38", fontSize: "0.65rem",
        letterSpacing: "0.18em", zIndex: 10,
        opacity: mounted ? 1 : 0,
        transition: "opacity 1s ease 1.6s",
        whiteSpace: "nowrap",
      }}>
        ◈ &nbsp; MOVE CURSOR TO WARP SPACETIME &nbsp; ◈
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 4px var(--accent); }
          50% { opacity: 0.4; box-shadow: none; }
        }
      `}</style>
    </div>
  );
}
