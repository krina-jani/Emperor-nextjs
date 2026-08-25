'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './Hero.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TOTAL_FRAMES = 410;

// 3D Procedural Fallback Mesh Data
const stone3DVertices = [
  [-1.0, -1.8, -0.8], [ 1.0, -1.8, -0.8], [ 1.2, -1.8,  0.8], [-1.0, -1.8,  0.8],
  [-1.4, -0.6, -1.2], [ 1.5, -0.6, -1.1], [ 1.6, -0.6,  1.1], [-1.3, -0.6,  1.2],
  [-1.6,  0.6, -1.3], [ 1.7,  0.6, -1.0], [ 1.5,  0.6,  1.3], [-1.5,  0.6,  1.1],
  [-0.9,  1.8, -0.7], [ 0.9,  1.8, -0.8], [ 1.1,  1.8,  0.7], [-1.0,  1.8,  0.9],
  [ 0.0, -2.2,  0.0], [ 0.0,  2.2,  0.0]
];

const stone3DFaces = [
  { v: [0, 1, 16], baseCol: [28, 32, 42] }, { v: [1, 2, 16], baseCol: [38, 44, 58] },
  { v: [2, 3, 16], baseCol: [32, 38, 50] }, { v: [3, 0, 16], baseCol: [22, 26, 34] },
  { v: [0, 1, 5, 4], baseCol: [52, 60, 78] }, { v: [1, 2, 6, 5], baseCol: [82, 94, 120] },
  { v: [2, 3, 7, 6], baseCol: [62, 72, 92] }, { v: [3, 0, 4, 7], baseCol: [35, 40, 52] },
  { v: [4, 5, 9, 8], baseCol: [78, 90, 115] }, { v: [5, 6, 10, 9], baseCol: [110, 125, 155] },
  { v: [6, 7, 11, 10], baseCol: [85, 98, 125] }, { v: [7, 4, 8, 11], baseCol: [48, 56, 72] },
  { v: [8, 9, 13, 12], baseCol: [70, 80, 102] }, { v: [9, 10, 14, 13], baseCol: [98, 112, 142] },
  { v: [10, 11, 15, 14], baseCol: [65, 75, 96] }, { v: [11, 8, 12, 15], baseCol: [42, 48, 62] },
  { v: [12, 13, 17], baseCol: [90, 102, 130] }, { v: [13, 14, 17], baseCol: [120, 136, 170] },
  { v: [14, 15, 17], baseCol: [85, 96, 122] }, { v: [15, 12, 17], baseCol: [55, 64, 82] }
];

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const ambientParticlesRef = useRef<{ x: number; y: number; z: number; r: number; }[]>([]);

  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [useProceduralFallback, setUseProceduralFallback] = useState(false);
  const [captionText, setCaptionText] = useState('✦ DESIGN WITH INTENT. BUILT TO WORK.');

  const stoneObjRef = useRef({ frame: 1 });

  // Get frame image URL format
  const getFrameUrl = (index: number, extension = 'webp') => {
    const frameNum = String(index).padStart(4, '0');
    return `/images/stone/frame_${frameNum}.${extension}`;
  };

  // Render Frame on Canvas
  const renderFrame = (frameIndex: number, forceProcedural = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
    }

    // Render Procedural Fallback if images failed or force flag is true
    if (useProceduralFallback || forceProcedural) {
      renderProceduralStone3D(ctx, canvas, frameIndex, dpr);
      return;
    }

    const index = Math.max(1, Math.min(TOTAL_FRAMES, Math.floor(frameIndex))) - 1;
    const img = imagesRef.current[index];

    if (!img || !img.complete || img.naturalWidth === 0) {
      // Fallback in case this specific image isn't ready
      renderProceduralStone3D(ctx, canvas, frameIndex, dpr);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = canvas.width / canvas.height;

    let drawWidth, drawHeight, drawX, drawY;

    if (canvasAspect > imgAspect) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgAspect;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgAspect;
    }

    drawX = (canvas.width - drawWidth) / 2;
    drawY = (canvas.height - drawHeight) / 2;

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  };

  // 3D Procedural Engine Fallback Renderer
  const renderProceduralStone3D = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    frameIndex: number,
    dpr: number
  ) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const scale = Math.min(canvas.width, canvas.height) * 0.22;

    const progress = (frameIndex - 1) / (TOTAL_FRAMES - 1);
    const rotY = progress * Math.PI * 4;
    const rotX = Math.sin(progress * Math.PI * 2) * 0.35 + 0.25;

    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

    // Transform 3D vertices
    const transformedVerts = stone3DVertices.map(v => {
      let x = v[0], y = v[1], z = v[2];
      let x1 = x * cosY - z * sinY;
      let z1 = x * sinY + z * cosY;
      let y2 = y * cosX - z1 * sinX;
      let z2 = y * sinX + z1 * cosX;
      let fov = 4.5;
      let scaleProj = fov / (fov + z2);
      return {
        px: cx + x1 * scale * scaleProj,
        py: cy + y2 * scale * scaleProj,
        z: z2
      };
    });

    // Render ambient orbital dust particles
    ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
    ambientParticlesRef.current.forEach(p => {
      let px = cx + (p.x * cosY - p.z * sinY) * scale * 0.5;
      let py = cy + p.y * scale * 0.5;
      ctx.beginPath();
      ctx.arc(px, py, p.r * dpr, 0, Math.PI * 2);
      ctx.fill();
    });

    // Sort faces by Z-depth (Painters algorithm)
    const sortedFaces = stone3DFaces.map(face => {
      let avgZ = 0;
      face.v.forEach(idx => { avgZ += transformedVerts[idx].z; });
      avgZ /= face.v.length;
      return { face, avgZ };
    }).sort((a, b) => b.avgZ - a.avgZ);

    // Draw faces
    sortedFaces.forEach(({ face }) => {
      const pts = face.v.map(idx => transformedVerts[idx]);
      ctx.beginPath();
      ctx.moveTo(pts[0].px, pts[0].py);
      for (let k = 1; k < pts.length; k++) {
        ctx.lineTo(pts[k].px, pts[k].py);
      }
      ctx.closePath();

      const lightFactor = Math.max(0.15, Math.min(1.0, 0.6 + (pts[0].z * -0.2)));
      const r = Math.floor(face.baseCol[0] * lightFactor);
      const g = Math.floor(face.baseCol[1] * lightFactor);
      const b = Math.floor(face.baseCol[2] * lightFactor);

      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1 * dpr;
      ctx.stroke();
    });
  };

  // Handle Mount
  useEffect(() => {
    setIsMounted(true);
    gsap.registerPlugin(ScrollTrigger);

    // Initialize dust particles
    ambientParticlesRef.current = Array.from({ length: 50 }, () => ({
      x: (Math.random() - 0.5) * 6,
      y: (Math.random() - 0.5) * 6,
      z: (Math.random() - 0.5) * 6,
      r: Math.random() * 2 + 1
    }));
  }, []);

  // Preload Images Sequence
  useEffect(() => {
    if (!isMounted) return;

    let localLoaded = 0;
    let localFailed = 0;
    let isFinished = false;

    // Safety fallback: switch to 3D engine after 2 seconds if folder is missing
    const fallbackTimeout = setTimeout(() => {
      if (!isFinished) {
        if (localLoaded < TOTAL_FRAMES / 2) {
          setUseProceduralFallback(true);
        }
        setIsLoaded(true);
      }
    }, 2000);

    const tempImages: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i, 'webp');

      img.onload = () => {
        localLoaded++;
        setLoadedCount(localLoaded);

        if (localLoaded === 1) {
          // Draw first frame immediately
          setTimeout(() => renderFrame(1), 50);
        }

        if (localLoaded === TOTAL_FRAMES) {
          isFinished = true;
          clearTimeout(fallbackTimeout);
          setTimeout(() => setIsLoaded(true), 200);
        }
      };

      img.onerror = () => {
        // Retry with jpg
        if (!img.dataset.triedJpg) {
          img.dataset.triedJpg = 'true';
          img.src = getFrameUrl(i, 'jpg');
        } else {
          localFailed++;
          if (localFailed > 5) {
            setUseProceduralFallback(true);
            isFinished = true;
            clearTimeout(fallbackTimeout);
            setIsLoaded(true);
          }
        }
      };

      tempImages.push(img);
    }

    imagesRef.current = tempImages;

    return () => {
      clearTimeout(fallbackTimeout);
    };
  }, [isMounted]);

  // Handle Resize
  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      renderFrame(stoneObjRef.current.frame);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted, isLoaded]);

  // Initialize GSAP Animation
  useEffect(() => {
    if (!isMounted || !isLoaded) return;

    const ctx = gsap.context(() => {
      const stoneObj = stoneObjRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.heroPinnedContainer}`,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
          onUpdate: (self) => {
            renderFrame(stoneObj.frame);
          }
        }
      });

      // 1. Theme transition to pitch black & Hero Headline Fade Out
      tl.to('body', {
        backgroundColor: '#000000',
        color: '#ffffff',
        duration: 1,
        onStart: () => document.body.classList.add('dark-mode'),
        onReverseComplete: () => document.body.classList.remove('dark-mode')
      }, 0)
      
      .to(`.${styles['hero-text-overlay']}`, {
        opacity: 0,
        scale: 0.85,
        duration: 1
      }, 0)

      // 2. Full-screen 3D Stone Canvas drops into center & scales up smoothly
      .to(`.${styles['stone-canvas-wrapper']}`, {
        opacity: 1,
        scale: 1,
        duration: 1.2
      }, 0.3)

      // 3. Update bottom caption on scroll stage
      .call(() => {
        setCaptionText('✦ DIFFERENT DISCIPLINES. ONE STANDARD OF CRAFT.');
      }, [], 0.8)

      // 4. Scrub stone 3D rotation frame sequence
      .to(stoneObj, {
        frame: TOTAL_FRAMES,
        ease: 'none',
        duration: 8
      }, 0.5)

      // 5. Floating Interactive Service Cards Sequence
      // Stage 1: AI & Mobile Design
      .to('#card-ai', { opacity: 1, y: 0, duration: 1.2 }, 1.5)
      .to('#card-mobile', { opacity: 1, y: 0, duration: 1.2 }, 1.8)
      
      .to(['#card-ai', '#card-mobile'], { opacity: 0, y: -60, duration: 1 }, 3.5)

      // Stage 2: Web & WordPress Development
      .to('#card-web', { opacity: 1, y: 0, duration: 1.2 }, 4.0)
      .to('#card-wordpress', { opacity: 1, y: 0, duration: 1.2 }, 4.3)

      .to(['#card-web', '#card-wordpress'], { opacity: 0, y: -60, duration: 1 }, 6.0);

    }, containerRef);

    return () => ctx.revert();
  }, [isMounted, isLoaded]);

  if (!isMounted) return null;

  return (
    <div ref={containerRef}>
      {/* Loading Screen Overlay */}
      {!isLoaded && (
        <div className={styles.preloader}>
          <div className={styles['preloader-spinner']} />
          <div className={styles['preloader-text']}>
            {useProceduralFallback 
              ? 'INITIALIZING 3D STONE ENGINE...' 
              : `LOADING 3D STONE ASSETS (${Math.floor((loadedCount / TOTAL_FRAMES) * 100)}%)`}
          </div>
        </div>
      )}

      {/* Pinned Services Scroll Section */}
      <section className={styles.heroPinnedContainer}>
        <div className={styles['sticky-viewport']}>
          
          {/* Phase 1 Text Headline Overlay */}
          <div className={styles['hero-text-overlay']}>
            <h1 className={styles['hero-title']}>
              <span>A.I.</span>
              <span>DESIGN</span>
              <span>DEVELOPMENT</span>
              <span>BRANDING</span>
            </h1>
          </div>

          {/* Phase 2 Full-Screen 3D Stone Canvas */}
          <div className={styles['stone-canvas-wrapper']}>
            <canvas ref={canvasRef} id="stone-canvas" className={styles.stoneCanvas} />
          </div>

          {/* Phase 3 Floating Interactive Service Cards */}
          <div className={styles['services-cards-layer']}>
            
            {/* Card 1: AI & Intelligent Automation */}
            <div className={`${styles['service-card']} ${styles.left}`} id="card-ai">
              <div className={styles['card-top']}>
                <h2 className={styles['card-title']}>AI & Intelligent<br/>Automation</h2>
                <div className={styles['card-icon']}>
                  <svg viewBox="0 0 100 100" fill="none" strokeWidth="1">
                    <circle cx="50" cy="50" r="40" />
                    <circle cx="50" cy="50" r="32" />
                    <circle cx="50" cy="50" r="24" />
                    <circle cx="50" cy="50" r="16" />
                    <circle cx="50" cy="50" r="8" />
                  </svg>
                </div>
              </div>
              <p className={styles['card-description']}>
                AI-powered solutions designed to enhance products, automate complex workflows, and unlock smarter digital experiences.
              </p>
            </div>

            {/* Card 2: Website & Mobile Design */}
            <div className={`${styles['service-card']} ${styles.right}`} id="card-mobile">
              <div className={styles['card-top']}>
                <h2 className={styles['card-title']}>Website &<br/>Mobile Design</h2>
                <div className={styles['card-icon']}>
                  <svg viewBox="0 0 100 100" fill="none" strokeWidth="1">
                    <path d="M 50 10 A 40 40 0 1 1 10 50" />
                    <path d="M 50 18 A 32 32 0 1 1 18 50" />
                    <path d="M 50 26 A 24 24 0 1 1 26 50" />
                    <path d="M 50 34 A 16 16 0 1 1 34 50" />
                    <path d="M 50 42 A 8 8 0 1 1 42 50" />
                    <line x1="10" y1="50" x2="50" y2="50" />
                  </svg>
                </div>
              </div>
              <p className={styles['card-description']}>
                High-quality website and mobile app experiences meticulously crafted to attract users and maintain engagement.
              </p>
            </div>

            {/* Card 3: Web Development */}
            <div className={`${styles['service-card']} ${styles.left}`} id="card-web">
              <div className={styles['card-top']}>
                <h2 className={styles['card-title']}>Web<br/>Development</h2>
                <div className={styles['card-icon']}>
                  <svg viewBox="0 0 100 100" fill="none" strokeWidth="1">
                    <circle cx="50" cy="50" r="40" />
                    <circle cx="50" cy="50" r="32" />
                    <circle cx="50" cy="50" r="24" />
                    <circle cx="50" cy="50" r="16" />
                    <circle cx="50" cy="50" r="8" />
                  </svg>
                </div>
              </div>
              <p className={styles['card-description']}>
                Custom web development delivered with a product-focused mindset, high-performance architecture, and design precision.
              </p>
            </div>

            {/* Card 4: WordPress Development */}
            <div className={`${styles['service-card']} ${styles.right}`} id="card-wordpress">
              <div className={styles['card-top']}>
                <h2 className={styles['card-title']}>WordPress<br/>Development</h2>
                <div className={styles['card-icon']}>
                  <svg viewBox="0 0 100 100" fill="none" stroke-width="1">
                    <path d="M 50 10 A 40 40 0 1 1 10 50" />
                    <path d="M 50 18 A 32 32 0 1 1 18 50" />
                    <path d="M 50 26 A 24 24 0 1 1 26 50" />
                    <path d="M 50 34 A 16 16 0 1 1 34 50" />
                    <path d="M 50 42 A 8 8 0 1 1 42 50" />
                    <line x1="10" y1="50" x2="50" y2="50" />
                  </svg>
                </div>
              </div>
              <p className={styles['card-description']}>
                WordPress development centered on high speed, modular flexibility, and digital experiences that convert.
              </p>
            </div>

          </div>

          {/* Bottom Action & Status Bar */}
          <div className={styles['bottom-bar']}>
            <div className={styles['sub-caption']}>
              {captionText}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
