This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



## ADD NEW 4-BOX SCROLLING SECTION AFTER SERVICES

In my existing Emperor Smart Solution Next.js website, add a completely separate section **immediately after the Services section**.

Use this video as the visual/animation reference:

```text
D:\emp-new\Emperor-nextjs\public\video\DZ!NR _ Design studio creating bold visual identities - Google Chrome 2026-08-22 17-59-17.mp4
```

Do not modify or remove the existing Services section.

---

# SECTION STRUCTURE

Create a new independent section:

```text
Services Section
        ↓
NEW FOUR BOX SCROLL SECTION
        ↓
Next Existing Section
```

Give this section its own component and CSS.

Recommended:

```text
src/
├── components/
│   └── FourBoxScroll/
│       ├── FourBoxScroll.jsx
│       └── FourBoxScroll.css
```

If the existing project has a different component structure, follow the current project architecture instead of creating unnecessary folders.

---

# MAIN VISUAL BEHAVIOR

The section should contain **4 large content boxes/cards**.

The user should experience them sequentially while scrolling:

```text
SCROLL
  ↓
┌──────────────────────────────┐
│                              │
│          BOX 01              │
│                              │
└──────────────────────────────┘

        ↓ scroll

┌──────────────────────────────┐
│                              │
│          BOX 02              │
│                              │
└──────────────────────────────┘

        ↓ scroll

┌──────────────────────────────┐
│                              │
│          BOX 03              │
│                              │
└──────────────────────────────┘

        ↓ scroll

┌──────────────────────────────┐
│                              │
│          BOX 04              │
│                              │
└──────────────────────────────┘
```

Do NOT show all four boxes moving vertically like a normal list.

Instead, create a **scroll-controlled presentation** where one box is the primary visible/focused box and the next box smoothly replaces it.

---

# STICKY SCROLL EXPERIENCE

Make the section tall enough to create a smooth scroll interaction.

Use a sticky viewport:

```text
.section
    ↓
.sticky-container
    ↓
4 boxes transition inside the same viewport
```

The sticky container should remain pinned while the user scrolls through the section.

Suggested structure:

```jsx
<section className="four-box-scroll">
  <div className="four-box-scroll__sticky">

    <div className="four-box-scroll__box box-1">
      ...
    </div>

    <div className="four-box-scroll__box box-2">
      ...
    </div>

    <div className="four-box-scroll__box box-3">
      ...
    </div>

    <div className="four-box-scroll__box box-4">
      ...
    </div>

  </div>
</section>
```

---

# SCROLL SEQUENCE

The most important requirement:

### BOX 1

When the section first enters the viewport:

```text
BOX 1
opacity: 1
scale: 1
y: 0
```

Box 1 should be completely visible.

As the user continues scrolling:

```text
BOX 1
↓
slightly moves/fades away
```

Then:

```text
BOX 2
↓
smoothly appears
```

---

### BOX 2

Box 2 becomes the main active box.

Then:

```text
BOX 2
↓
smooth exit

BOX 3
↓
smooth entrance
```

---

### BOX 3

Box 3 becomes active.

Then:

```text
BOX 3
↓
smooth exit

BOX 4
↓
smooth entrance
```

---

### BOX 4

Box 4 becomes the final active box.

After Box 4 finishes:

```text
sticky section releases
        ↓
next website section continues
```

Do not loop back to Box 1.

---

# ANIMATION STYLE

The transition should feel:

* Smooth
* Premium
* Cinematic
* Slow
* Controlled by scrolling
* Similar to a high-end creative agency website
* Not like a normal carousel
* Not like an automatic slideshow

Use subtle combinations of:

```text
opacity
transform
scale
translateY
translateX
clip-path
```

Do not use aggressive rotations.

Do not make the boxes bounce.

Do not make the animation too fast.

---

# GSAP IMPLEMENTATION

The existing website uses modern animation techniques, so preferably use:

```text
GSAP
ScrollTrigger
```

If GSAP is already installed, reuse the existing GSAP setup.

Do not install another animation library unnecessarily.

Recommended animation logic:

```javascript
gsap.to(...)
gsap.fromTo(...)
ScrollTrigger.create(...)
```

Use:

```text
pin: true
scrub: 1
```

or an appropriate scrub value to create smooth scroll synchronization.

The animation must respond directly to the user's scroll position.

---

# IMPORTANT — ONE BOX AT A TIME

At the beginning:

```text
BOX 1 = active
BOX 2 = hidden
BOX 3 = hidden
BOX 4 = hidden
```

During scrolling:

```text
BOX 1 → BOX 2
```

Then:

```text
BOX 2 → BOX 3
```

Then:

```text
BOX 3 → BOX 4
```

Avoid showing all four boxes simultaneously.

A small amount of overlap/fade during the transition is allowed, but there must always be one clearly dominant active box.

---

# BOX DESIGN

Make each box large and premium.

Suggested dimensions:

Desktop:

```css
width: min(90vw, 1200px);
height: min(70vh, 720px);
```

The box should be centered horizontally and vertically inside the sticky viewport.

Use:

```text
border-radius: 24px–32px
overflow: hidden
```

Use the existing Emperor Smart Solution website theme.

Do NOT introduce a completely different visual theme.

---

# BOX CONTENT

Create four boxes with placeholders that can easily be replaced later.

### BOX 01

```text
01

SMART DIGITAL EXPERIENCES

We design intelligent digital experiences that connect
business goals with exceptional user experiences.

Explore →
```

### BOX 02

```text
02

WEB & SOFTWARE DEVELOPMENT

Scalable, high-performance digital platforms engineered
for modern businesses and growing enterprises.

Explore →
```

### BOX 03

```text
03

AI & AUTOMATION

Transform repetitive workflows with intelligent automation,
AI-powered systems, and data-driven solutions.

Explore →
```

### BOX 04

```text
04

DIGITAL TRANSFORMATION

Build connected, scalable, and future-ready digital
ecosystems that accelerate business growth.

Explore →
```

These should be easy to replace through a data array.

Example:

```javascript
const boxes = [
  {
    number: "01",
    title: "SMART DIGITAL EXPERIENCES",
    description: "...",
  },
  {
    number: "02",
    title: "WEB & SOFTWARE DEVELOPMENT",
    description: "...",
  },
  {
    number: "03",
    title: "AI & AUTOMATION",
    description: "...",
  },
  {
    number: "04",
    title: "DIGITAL TRANSFORMATION",
    description: "...",
  }
];
```

Render them using `.map()`.

Do not hard-code four separate JSX structures if the project already follows reusable component patterns.

---

# VIDEO REFERENCE

Use the supplied MP4 only as the **visual/animation reference**.

Do not automatically place the video as a background unless that matches the existing website design.

If using the video inside the section, use:

```text
/public/video/
```

and reference it with the correct public path.

Do not use the absolute Windows path in production code.

Correct:

```text
/video/DZ!NR%20_%20Design%20studio%20creating%20bold%20visual%20identities%20-%20Google%20Chrome%202026-08-22%2017-59-17.mp4
```

However, if the video is only being used as a reference for the animation behavior, do not add it to the website.

---

# SECTION HEIGHT

Give enough scroll distance for all four transitions.

For example:

```css
.four-box-scroll {
  position: relative;
  height: 400vh;
}
```

Then:

```css
.four-box-scroll__sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
```

Adjust the height based on the existing website and viewport.

The user should have enough scroll distance to comfortably see:

```text
BOX 1
   ↓
BOX 2
   ↓
BOX 3
   ↓
BOX 4
```

Do not make the scrolling feel rushed.

---

# TRANSITION TIMING

Divide the scroll progress into approximately four stages:

```text
0% – 25%
BOX 1

25% – 50%
BOX 2

50% – 75%
BOX 3

75% – 100%
BOX 4
```

Within each stage:

```text
Entrance
    ↓
Hold
    ↓
Exit
```

Use GSAP/ScrollTrigger progress rather than manually changing state on every scroll event.

Avoid React state updates on every scroll frame because this can cause unnecessary re-renders.

---

# DESKTOP EXPERIENCE

Desktop should have:

```text
                    ┌────────────────────────────┐
                    │                            │
                    │          01                │
                    │                            │
                    │    SMART DIGITAL            │
                    │    EXPERIENCES               │
                    │                            │
                    │    Description...           │
                    │                            │
                    │             Explore →       │
                    │                            │
                    └────────────────────────────┘
```

The box should occupy a large portion of the viewport.

Keep enough margin around the box so the page background remains visible.

---

# OPTIONAL SIDE PROGRESS INDICATOR

Add a minimal progress indicator on the right side.

Example:

```text
01
●
02
○
03
○
04
○
```

When Box 2 becomes active:

```text
01
○
02
●
03
○
04
○
```

When Box 4 becomes active:

```text
01
○
02
○
03
○
04
●
```

Keep this very subtle.

Do not add it if the existing design already feels visually busy.

---

# MOBILE EXPERIENCE

On mobile, maintain the same sequential behavior.

Do NOT allow the boxes to become too large.

Use:

```text
height: 80vh–90vh
width: calc(100% - 32px)
```

The box should remain readable.

The sequence remains:

```text
01
↓
02
↓
03
↓
04
```

Do not create horizontal overflow.

Do not disable the animation completely on mobile.

However, simplify the animation if necessary for performance.

---

# PERFORMANCE

The animation must remain smooth.

Requirements:

* Use GSAP ScrollTrigger efficiently
* Avoid React re-rendering on every scroll frame
* Use transform/opacity for animations
* Avoid expensive layout calculations
* Use `will-change: transform, opacity` only where appropriate
* Kill/revert ScrollTrigger animations on component unmount
* Handle resize correctly
* Avoid memory leaks
* Respect `prefers-reduced-motion`

For reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  /* provide simple non-scroll animation */
}
```

---

# EXISTING WEBSITE COMPATIBILITY

Very important:

Do NOT modify:

* Header
* Navbar
* Hero
* Services
* Existing project section
* Footer
* Existing color system
* Existing typography system
* Existing routing
* Existing global layout

Only insert the new section:

```text
Services
   ↓
Four Box Scroll Section
   ↓
Existing Next Section
```

The new section must be completely self-contained.

---

# FINAL USER EXPERIENCE

The final website should feel like this:

```text
                 SERVICES
                    ↓
          ┌──────────────────┐
          │                  │
          │     BOX 01       │
          │                  │
          └──────────────────┘
                    ↓
              smooth scroll
                    ↓
          ┌──────────────────┐
          │                  │
          │     BOX 02       │
          │                  │
          └──────────────────┘
                    ↓
              smooth scroll
                    ↓
          ┌──────────────────┐
          │                  │
          │     BOX 03       │
          │                  │
          └──────────────────┘
                    ↓
              smooth scroll
                    ↓
          ┌──────────────────┐
          │                  │
          │     BOX 04       │
          │                  │
          └──────────────────┘
                    ↓
          NEXT WEBSITE SECTION
```

The key requirement is:

**ONE BOX → SMOOTH SCROLL → NEXT BOX → SMOOTH SCROLL → NEXT BOX → SMOOTH SCROLL → FINAL BOX**

Make the animation feel premium, deliberate, and cinematic rather than like a basic slider.
