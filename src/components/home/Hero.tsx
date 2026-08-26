'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TOTAL_FRAMES = 410;

// Module-level image cache to prevent duplicate loads during React StrictMode / re-renders
const globalImagesCache: HTMLImageElement[] = [];
let isPreloadingStarted = false;

// 3D Procedural Fallback Mesh Data
const stone3DVertices = [
  [-1.0, -1.8, -0.8], [ 1.0, -1.8, -0.8], [ 1.2, -1.8,  0.8], [-1.0, -1.8,  0.8],
  [-1.4, -0.6, -1.2], [ 1.5, -0.6, -1.1], [ 1.6, -0.6,  1.1], [-1.3, -0.6,  1.2],
  [-1.6,  0.6, -1.3], [ 1.7,  0.6, -1.0], [ 1.5,  0.6,  1.3], [-1.5,  0.6,  1.1],
  [-0.9,  1.8, -0.7], [ 0.9,  1.8, -0.8], [ 1.1,  1.8,  0.7], [-1.0,  1.8,  0.9],
  [ 0.0, -2.2,  0.0], [ 0.0,  2.2,  0.0]
];

const stone3DFaces = [
  { v: [0, 1, 16], baseCol: [50, 60, 80] }, { v: [1, 2, 16], baseCol: [70, 80, 105] },
  { v: [2, 3, 16], baseCol: [60, 70, 95] }, { v: [3, 0, 16], baseCol: [45, 52, 70] },
  { v: [0, 1, 5, 4], baseCol: [80, 95, 125] }, { v: [1, 2, 6, 5], baseCol: [110, 125, 160] },
  { v: [2, 3, 7, 6], baseCol: [90, 105, 135] }, { v: [3, 0, 4, 7], baseCol: [60, 70, 95] },
  { v: [4, 5, 9, 8], baseCol: [100, 115, 150] }, { v: [5, 6, 10, 9], baseCol: [130, 150, 190] },
  { v: [6, 7, 11, 10], baseCol: [110, 125, 160] }, { v: [7, 4, 8, 11], baseCol: [75, 88, 115] },
  { v: [8, 9, 13, 12], baseCol: [95, 110, 140] }, { v: [9, 10, 14, 13], baseCol: [125, 145, 185] },
  { v: [10, 11, 15, 14], baseCol: [90, 105, 135] }, { v: [11, 8, 12, 15], baseCol: [65, 75, 100] },
  { v: [12, 13, 17], baseCol: [115, 130, 170] }, { v: [13, 14, 17], baseCol: [145, 165, 210] },
  { v: [14, 15, 17], baseCol: [110, 125, 160] }, { v: [15, 12, 17], baseCol: [80, 95, 125] }
];

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stoneWrapperRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const cardAiRef = useRef<HTMLDivElement>(null);
  const cardMobileRef = useRef<HTMLDivElement>(null);
  const cardWebRef = useRef<HTMLDivElement>(null);
  const cardWordpressRef = useRef<HTMLDivElement>(null);
  const ambientParticlesRef = useRef<{ x: number; y: number; z: number; r: number; }[]>([]);

  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [useProceduralFallback, setUseProceduralFallback] = useState(false);
  const [captionText, setCaptionText] = useState('✦ DESIGN WITH INTENT. BUILT TO WORK.');

  const stoneObjRef = useRef({ frame: 1 });
  const lastRenderedIndexRef = useRef<number>(0);

  // Get frame image URL format
  const getFrameUrl = (index: number, extension = 'webp') => {
    const frameNum = String(index).padStart(4, '0');
    return `/images/stone/frame_${frameNum}.${extension}`;
  };

  // 3D Procedural Engine Fallback Renderer (High-Contrast Cybernetic Wireframe)
  const renderProceduralStone3D = useCallback((
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
      const x = v[0], y = v[1], z = v[2];
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;
      const fov = 4.5;
      const scaleProj = fov / (fov + z2);
      return {
        px: cx + x1 * scale * scaleProj,
        py: cy + y2 * scale * scaleProj,
        z: z2
      };
    });

    // Render ambient orbital dust particles
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ambientParticlesRef.current.forEach(p => {
      const px = cx + (p.x * cosY - p.z * sinY) * scale * 0.5;
      const py = cy + p.y * scale * 0.5;
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

    // Draw faces with bright glowing lines
    sortedFaces.forEach(({ face }) => {
      const pts = face.v.map(idx => transformedVerts[idx]);
      ctx.beginPath();
      ctx.moveTo(pts[0].px, pts[0].py);
      for (let k = 1; k < pts.length; k++) {
        ctx.lineTo(pts[k].px, pts[k].py);
      }
      ctx.closePath();

      const lightFactor = Math.max(0.4, Math.min(1.2, 0.8 + (pts[0].z * -0.25)));
      const r = Math.min(255, Math.floor(face.baseCol[0] * lightFactor));
      const g = Math.min(255, Math.floor(face.baseCol[1] * lightFactor));
      const b = Math.min(255, Math.floor(face.baseCol[2] * lightFactor));

      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1.5 * dpr;
      ctx.stroke();
    });
  }, []);

  // Render Frame on Canvas with Nearest-Frame Fallback
  const renderFrame = useCallback((frameIndex: number, forceProcedural = false) => {
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

    if (useProceduralFallback || forceProcedural) {
      renderProceduralStone3D(ctx, canvas, frameIndex, dpr);
      return;
    }

    const targetIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.floor(frameIndex))) - 1;
    let img = globalImagesCache[targetIndex];

    // Nearest-Frame Retention: If target frame is still buffering, search adjacent frames
    if (!img || !img.complete || img.naturalWidth === 0) {
      // 1. Try last successfully rendered frame first
      const lastIndex = lastRenderedIndexRef.current;
      if (lastIndex >= 0 && globalImagesCache[lastIndex] && globalImagesCache[lastIndex].complete && globalImagesCache[lastIndex].naturalWidth > 0) {
        img = globalImagesCache[lastIndex];
      } else {
        // 2. Search backward from target
        for (let i = targetIndex - 1; i >= 0; i--) {
          if (globalImagesCache[i] && globalImagesCache[i].complete && globalImagesCache[i].naturalWidth > 0) {
            img = globalImagesCache[i];
            break;
          }
        }
        // 3. Search forward from target
        if (!img || !img.complete || img.naturalWidth === 0) {
          for (let i = targetIndex + 1; i < globalImagesCache.length; i++) {
            if (globalImagesCache[i] && globalImagesCache[i].complete && globalImagesCache[i].naturalWidth > 0) {
              img = globalImagesCache[i];
              break;
            }
          }
        }
      }
    }

    if (img && img.complete && img.naturalWidth > 0) {
      lastRenderedIndexRef.current = targetIndex;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = canvas.width / canvas.height;

      let drawWidth: number;
      let drawHeight: number;

      if (canvasAspect > imgAspect) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgAspect;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgAspect;
      }

      const drawX = (canvas.width - drawWidth) / 2;
      const drawY = (canvas.height - drawHeight) / 2;

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      return;
    }

    // High-contrast procedural fallback if zero images are available
    renderProceduralStone3D(ctx, canvas, frameIndex, dpr);
  }, [useProceduralFallback, renderProceduralStone3D]);

  // Handle Initial Mount
  useEffect(() => {
    setIsMounted(true);
    gsap.registerPlugin(ScrollTrigger);

    ambientParticlesRef.current = Array.from({ length: 50 }, () => ({
      x: (Math.random() - 0.5) * 6,
      y: (Math.random() - 0.5) * 6,
      z: (Math.random() - 0.5) * 6,
      r: Math.random() * 2 + 1
    }));
  }, []);

  // Preload Images Sequence into Global Cache (Runs ONCE across re-renders)
  useEffect(() => {
    if (!isMounted) return;

    if (isPreloadingStarted && globalImagesCache.length === TOTAL_FRAMES) {
      // Already preloaded or in progress
      let ready = 0;
      globalImagesCache.forEach(img => { if (img.complete && img.naturalWidth > 0) ready++; });
      setLoadedCount(ready);
      if (ready > 0) {
        setIsLoaded(true);
        setTimeout(() => renderFrame(1), 50);
      }
      return;
    }

    isPreloadingStarted = true;
    let localLoaded = 0;
    let localFailed = 0;

    // Safety timeout: Unlock UI quickly once initial frames arrive
    const fallbackTimeout = setTimeout(() => {
      setIsLoaded(true);
      if (localLoaded === 0) {
        setUseProceduralFallback(true);
      }
    }, 4000);

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i, 'webp');

      img.onload = () => {
        localLoaded++;
        setLoadedCount(localLoaded);

        if (localLoaded === 1) {
          // Paint frame 1 immediately
          renderFrame(1);
        }

        // Show page as soon as first 10 frames are ready (progressive background load)
        if (localLoaded >= 10) {
          setIsLoaded(true);
          clearTimeout(fallbackTimeout);
        }

        if (localLoaded === TOTAL_FRAMES) {
          clearTimeout(fallbackTimeout);
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        if (!img.dataset.triedJpg) {
          img.dataset.triedJpg = 'true';
          img.src = getFrameUrl(i, 'jpg');
        } else {
          localFailed++;
          if (localFailed > 20 && localLoaded === 0) {
            setUseProceduralFallback(true);
            setIsLoaded(true);
            clearTimeout(fallbackTimeout);
          }
        }
      };

      globalImagesCache.push(img);
    }

    return () => {
      clearTimeout(fallbackTimeout);
    };
  }, [isMounted, renderFrame]);

  // Handle Window Resize
  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      renderFrame(stoneObjRef.current.frame);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted, isLoaded, renderFrame]);

  // Initialize GSAP Animation Timeline with Direct Ref Bindings & Deterministic Bidirectional Tweens
  useEffect(() => {
    if (!isMounted || !isLoaded) return;

    const ctx = gsap.context(() => {
      const stoneObj = stoneObjRef.current;
      renderFrame(1);

      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
          onUpdate: (self) => {
            renderFrame(stoneObj.frame);

            // Synchronize theme class & caption symmetrically in forward and reverse scroll
            if (self.progress > 0.08) {
              document.body.classList.add('dark-mode');
            } else {
              document.body.classList.remove('dark-mode');
            }

            if (self.progress > 0.12) {
              setCaptionText('✦ DIFFERENT DISCIPLINES. ONE STANDARD OF CRAFT.');
            } else {
              setCaptionText('✦ DESIGN WITH INTENT. BUILT TO WORK.');
            }
          },
          onLeaveBack: () => {
            document.body.classList.remove('dark-mode');
            setCaptionText('✦ DESIGN WITH INTENT. BUILT TO WORK.');
            renderFrame(1);
          },
          onEnter: () => renderFrame(stoneObj.frame),
          onEnterBack: () => renderFrame(stoneObj.frame),
          onRefresh: () => renderFrame(stoneObj.frame)
        }
      });

      // 1. Theme transition & Hero Headline Fade Out
      tl.to(document.body, {
        backgroundColor: '#000000',
        color: '#ffffff',
        duration: 1,
        ease: 'power2.inOut'
      }, 0);

      if (heroTextRef.current) {
        tl.fromTo(heroTextRef.current,
          { opacity: 1, scale: 1 },
          { opacity: 0, scale: 0.85, duration: 1, ease: 'power2.inOut' },
          0
        );
      }

      // 2. Full-screen 3D Stone Canvas drops into center & scales up smoothly
      if (stoneWrapperRef.current) {
        tl.fromTo(stoneWrapperRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' },
          0.3
        );
      }

      // 3. Scrub stone 3D rotation frame sequence
      tl.fromTo(stoneObj,
        { frame: 1 },
        { frame: TOTAL_FRAMES, ease: 'none', duration: 8 },
        0.5
      );

      // 4. Floating Interactive Service Cards Sequence
      // Stage 1: AI & Mobile Design
      if (cardAiRef.current) {
        tl.fromTo(cardAiRef.current,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power2.out' },
          1.5
        );
      }
      if (cardMobileRef.current) {
        tl.fromTo(cardMobileRef.current,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power2.out' },
          1.8
        );
      }
      
      const stage1Cards = [cardAiRef.current, cardMobileRef.current].filter(Boolean);
      if (stage1Cards.length > 0) {
        tl.to(stage1Cards, { opacity: 0, y: -60, duration: 1, ease: 'power2.in' }, 3.5);
      }

      // Stage 2: Web & WordPress Development
      if (cardWebRef.current) {
        tl.fromTo(cardWebRef.current,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power2.out' },
          4.0
        );
      }
      if (cardWordpressRef.current) {
        tl.fromTo(cardWordpressRef.current,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power2.out' },
          4.3
        );
      }

      const stage2Cards = [cardWebRef.current, cardWordpressRef.current].filter(Boolean);
      if (stage2Cards.length > 0) {
        tl.to(stage2Cards, { opacity: 0, y: -60, duration: 1, ease: 'power2.in' }, 6.0);
      }

    }, containerRef);

    return () => {
      ctx.revert();
      if (typeof window !== 'undefined') {
        document.body.classList.remove('dark-mode');
      }
    };
  }, [isMounted, isLoaded, renderFrame]);

  if (!isMounted) return null;

  return (
    <div ref={containerRef}>
      {/* Loading Screen Overlay */}
      {!isLoaded && (
        <div className={styles.preloader}>
          <div className={styles.preloaderSpinner} />
          <div className={styles.preloaderText}>
            {useProceduralFallback 
              ? 'INITIALIZING 3D STONE ENGINE...' 
              : `LOADING 3D STONE ASSETS (${Math.floor((loadedCount / TOTAL_FRAMES) * 100)}%)`}
          </div>
        </div>
      )}

      {/* Pinned Services Scroll Section */}
      <section ref={sectionRef} className={styles.heroPinnedContainer}>
        <div className={styles.stickyViewport}>
          
          {/* Phase 1 Text Headline Overlay */}
          <div ref={heroTextRef} className={styles.heroTextOverlay}>
            <h1 className={styles.heroTitle}>
              <span>A.I.</span>
              <span>DESIGN</span>
              <span>DEVELOPMENT</span>
              <span>BRANDING</span>
            </h1>
          </div>

          {/* Phase 2 Full-Screen 3D Stone Canvas */}
          <div ref={stoneWrapperRef} className={styles.stoneCanvasWrapper}>
            <canvas ref={canvasRef} id="stone-canvas" className={styles.stoneCanvas} />
          </div>

          {/* Phase 3 Floating Interactive Service Cards */}
          <div className={styles.servicesCardsLayer}>
            
            {/* Card 1: AI & Intelligent Automation */}
            <div ref={cardAiRef} className={`${styles.serviceCard} ${styles.left}`} id="card-ai">
              <div className={styles.cardTop}>
                <h2 className={styles.cardTitle}>AI & Intelligent<br/>Automation</h2>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 100 100" fill="none" strokeWidth="1">
                    {Array.from({ length: 12 }).map((_, i) => {
                      const x = 17 + i * 6;
                      return <line key={i} x1={x} y1="10" x2={x} y2="90" />;
                    })}
                  </svg>
                </div>
              </div>
              <p className={styles.cardDescription}>
                AI-powered solutions designed to enhance products, automate complex workflows, and unlock smarter digital experiences.
              </p>
            </div>

            {/* Card 2: Website & Mobile Design */}
            <div ref={cardMobileRef} className={`${styles.serviceCard} ${styles.right}`} id="card-mobile">
              <div className={styles.cardTop}>
                <h2 className={styles.cardTitle}>Website &<br/>Mobile Design</h2>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 100 100" fill="none" strokeWidth="1">
                    <path d="M 20,10 A 40,40 0 0,1 20,90" />
                    <path d="M 20,20 A 30,30 0 0,1 20,80" />
                    <path d="M 20,30 A 20,20 0 0,1 20,70" />
                    <path d="M 20,40 A 10,10 0 0,1 20,60" />
                    
                    <path d="M 80,10 A 40,40 0 0,0 80,90" />
                    <path d="M 80,20 A 30,30 0 0,0 80,80" />
                    <path d="M 80,30 A 20,20 0 0,0 80,70" />
                    <path d="M 80,40 A 10,10 0 0,0 80,60" />
                  </svg>
                </div>
              </div>
              <p className={styles.cardDescription}>
                High-quality website and mobile app experiences meticulously crafted to attract users and maintain engagement.
              </p>
            </div>

            {/* Card 3: Web Development */}
            <div ref={cardWebRef} className={`${styles.serviceCard} ${styles.left}`} id="card-web">
              <div className={styles.cardTop}>
                <h2 className={styles.cardTitle}>Web<br/>Development</h2>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 100 100" fill="none" strokeWidth="1">
                    <circle cx="50" cy="50" r="40" />
                    <circle cx="50" cy="50" r="32" />
                    <circle cx="50" cy="50" r="24" />
                    <circle cx="50" cy="50" r="16" />
                    <circle cx="50" cy="50" r="8" />
                  </svg>
                </div>
              </div>
              <p className={styles.cardDescription}>
                Custom web development delivered with a product-focused mindset, high-performance architecture, and design precision.
              </p>
            </div>

            {/* Card 4: WordPress Development */}
            <div ref={cardWordpressRef} className={`${styles.serviceCard} ${styles.right}`} id="card-wordpress">
              <div className={styles.cardTop}>
                <h2 className={styles.cardTitle}>WordPress<br/>Development</h2>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 100 100" fill="none" strokeWidth="1">
                    {Array.from({ length: 6 }).map((_, i) => {
                      const r = 40 - i * 5;
                      return (
                        <path
                          key={i}
                          d={`M 85,${50 - r} L 45,${50 - r} A ${r},${r} 0 0,0 45,${50 + r} L 85,${50 + r} A ${r},${r} 0 0,0 ${85 - r},50 L 50,50`}
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>
              <p className={styles.cardDescription}>
                WordPress development centered on high speed, modular flexibility, and digital experiences that convert.
              </p>
            </div>

          </div>

          {/* Bottom Action & Status Bar */}
          <div className={styles.bottomBar}>
            {/* Center: Cookie Notification Box + Monospace Sub-Caption */}
            <div className={styles.bottomCenter}>
              <div className={styles.cookieBanner}>
                <span>WE USE COOKIES TO ENHANCE YOUR EXPERIENCE.</span>
                <div className={styles.cookieButtons}>
                  <button type="button" className={styles.cookieBtn} onClick={() => {}}>DECLINE</button>
                  <button type="button" className={styles.cookieBtn} onClick={() => {}}>ACCEPT</button>
                </div>
              </div>
              <div className={styles.subCaption}>
                {captionText}
              </div>
            </div>

            {/* Right: View Services Link */}
            <Link href="/services" className={styles.viewServicesLink}>
              <span>VIEW SERVICES</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
