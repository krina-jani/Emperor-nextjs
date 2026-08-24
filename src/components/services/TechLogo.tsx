import React from "react";

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechLogo({ name, className = "w-8 h-8", size = 32 }: TechLogoProps) {
  const normalized = name.toLowerCase();

  // iOS / Apple / Apple TV
  if (normalized.includes("apple tv")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42 54.4c-.1-7.2 5.9-10.7 6.2-10.9-3.4-4.9-8.6-5.6-10.4-5.7-4.4-.5-8.7 2.6-10.9 2.6-2.3 0-5.7-2.5-9.4-2.5-4.8.1-9.3 2.8-11.8 7.1-5 8.7-1.3 21.6 3.6 28.6 2.4 3.4 5.2 7.3 8.9 7.1 3.6-.1 5-2.3 9.3-2.3 4.3 0 5.6 2.3 9.3 2.2 3.8-.1 6.3-3.5 8.6-6.9 2.8-4 3.9-7.9 4-8.1-.1-.1-7.7-3-7.8-11.2z" fill="#000000" />
        <path d="M37.3 33.2c1.9-2.4 3.2-5.7 2.9-9-2.8.1-6.1 1.9-8.1 4.2-1.7 2-3.2 5.3-2.8 8.5 3.1.2 6.1-1.4 8-3.7z" fill="#000000" />
        <text x="56" y="62" fontSize="22" fontWeight="bold" fontFamily="sans-serif" fill="#000000">TV</text>
      </svg>
    );
  }

  if (normalized === "ios" || normalized.includes("apple") || normalized.includes("swift")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.93-14.3-5.77-8.7-10.28-18.73-13.54-30.08-3.26-11.36-4.89-22.18-4.89-32.48 0-14.57 3.7-26.69 11.1-36.35 7.4-9.67 16.7-14.59 27.91-14.77 4.13 0 9.07 1.14 14.83 3.42 5.76 2.28 9.58 3.47 11.46 3.56 1.63-.12 5.56-1.34 11.78-3.67 6.22-2.33 11.19-3.32 14.92-2.97 12.39.98 22.37 5.68 29.93 14.11-10.88 6.64-16.19 15.69-15.93 27.16.22 8.92 3.69 16.32 10.42 22.21 6.74 5.89 14.68 9.17 23.82 9.85-2.29 6.86-5.07 13.88-8.36 21.08zM119.22 33.02c0-7.07 2.58-13.66 7.74-19.78 5.16-6.12 11.58-9.99 19.25-11.61.11 1.09.16 2.07.16 2.94 0 6.96-2.73 13.66-8.2 20.09-5.46 6.44-12.06 10.23-19.79 11.38-.22-1.09-.34-2.09-.34-3.02z" fill="#000000" />
      </svg>
    );
  }

  // React Native / React
  if (normalized.includes("react")) {
    return (
      <svg className={className} width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
        <g stroke="#00D8FF" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // Android
  if (normalized.includes("android") || normalized.includes("kotlin")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.2 38.6L19 26.2a2 2 0 1 1 3.5-2l7.3 12.6c6.2-2.8 13.1-4.4 20.2-4.4s14 1.6 20.2 4.4l7.3-12.6a2 2 0 1 1 3.5 2l-7.2 12.4C81.2 45.4 86 56.4 86 68.6H14c0-12.2 4.8-23.2 12.2-30z" fill="#3DDC84" />
        <circle cx="34" cy="52" r="3.5" fill="#FFFFFF" />
        <circle cx="66" cy="52" r="3.5" fill="#FFFFFF" />
        <path d="M14 74h72v10a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8V74z" fill="#3DDC84" />
      </svg>
    );
  }

  // Flutter
  if (normalized.includes("flutter")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 166 202" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M101.4 0L0 101.4l31.4 31.4L164.2 0H101.4z" fill="#47C5FB" />
        <path d="M101.4 100.8L46.8 155.4l31.4 31.4L164.2 100.8H101.4z" fill="#47C5FB" />
        <path d="M78.2 186.8l23.2 15.2h62.8L109.6 155.4l-31.4 31.4z" fill="#00569E" />
        <path d="M109.6 155.4L78.2 124l31.4-31.4 31.4 31.4-31.4 31.4z" fill="#00B5F8" />
      </svg>
    );
  }

  // Unity 3D
  if (normalized.includes("unity")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 14L22 30v28l8-4.6V38.8l20-11.5 20 11.5v14.6l8 4.6V30L50 14z" fill="#000000" />
        <path d="M46 54.5L27 65.5l14 24.2 7-4-10.5-18.2 17.5-10.1 7 4 7-4-16-9.4z" fill="#000000" />
        <path d="M54 54.5L73 65.5 59 89.7l-7-4 10.5-18.2-17.5-10.1-7 4-7-4 16-9.4z" fill="#000000" />
      </svg>
    );
  }

  // ASP.NET / .NET
  if (normalized.includes("asp") || normalized.includes(".net") || normalized.includes("c#")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 40h20v48H12z" fill="#512BD4" />
        <path d="M42 40h24c13.3 0 24 10.7 24 24s-10.7 24-24 24H42V40zm20 32c4.4 0 8-3.6 8-8s-3.6-8-8-8h-4v16h4z" fill="#0078D7" />
        <circle cx="106" cy="80" r="8" fill="#512BD4" />
      </svg>
    );
  }

  // Python
  if (normalized.includes("python")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.2 2C27.6 2 29.3 13.5 29.3 13.5l.03 12h25.4v3.6H19.2S2 27.2 2 54.4c0 27.2 15 26.2 15 26.2h8.9v-12.5s-.5-15 14.8-15h25.4s14.3.2 14.3-13.8V15.7S81.8 2 54.2 2zm-13.7 8.2a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8z" fill="#3776AB" />
        <path d="M55.8 108c26.6 0 24.9-11.5 24.9-11.5l-.03-12H55.3v-3.6h35.5s17.2 1.9 17.2-25.3c0-27.2-15-26.2-15-26.2h-8.9v12.5s.5 15-14.8 15H43.9s-14.3-.2-14.3 13.8v23.6s-1.4 13.7 26.2 13.7zm13.7-8.2a4.4 4.4 0 1 1 0-8.8 4.4 4.4 0 0 1 0 8.8z" fill="#FFD43B" />
      </svg>
    );
  }

  // Xamarin
  if (normalized.includes("xamarin")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="#3498DB" />
        <path d="M28 28l44 44M72 28L28 72" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
      </svg>
    );
  }

  // Wearable Devices / Smartwatch
  if (normalized.includes("wearable") || normalized.includes("watch") || normalized.includes("iot")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="36" y="10" width="28" height="80" rx="8" fill="#718096" />
        <rect x="25" y="25" width="50" height="50" rx="14" fill="#2D3748" />
        <rect x="30" y="30" width="40" height="40" rx="10" fill="#1A202C" />
        <path d="M42 46l-4 4 4 4M58 46l4 4-4 4M47 56l6-12" stroke="#63B3ED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Chromecast
  if (normalized.includes("chromecast") || normalized.includes("cast")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="38" stroke="#34A853" strokeWidth="6" />
        <circle cx="50" cy="50" r="24" stroke="#4285F4" strokeWidth="5" />
        <circle cx="50" cy="50" r="10" fill="#EA4335" />
        <rect x="68" y="24" width="18" height="10" rx="3" fill="#FBBC05" />
      </svg>
    );
  }

  // iBeacon
  if (normalized.includes("ibeacon") || normalized.includes("beacon")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="62" r="7" fill="#6B46C1" />
        <path d="M38 50a17 17 0 0 1 24 0M30 42a28 28 0 0 1 40 0M22 34a40 40 0 0 1 56 0" stroke="#6B46C1" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  // AR App
  if (normalized.includes("ar app") || normalized.includes("augmented")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 20l28 16v32L50 84 22 68V36L50 20z" stroke="#3182CE" strokeWidth="4" strokeDasharray="4 4" />
        <path d="M50 32l16 9.2v18.5L50 69 34 59.7V41.2L50 32z" fill="#E53E3E" />
        <path d="M22 75l28 15 28-15" stroke="#4299E1" strokeWidth="6" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // VR App
  if (normalized.includes("vr app") || normalized.includes("virtual")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="34" width="64" height="34" rx="10" fill="#00B4D8" />
        <circle cx="36" cy="51" r="9" fill="#1A202C" />
        <circle cx="64" cy="51" r="9" fill="#1A202C" />
        <path d="M44 60c2-3 4-4 6-4s4 1 6 4" fill="#00B4D8" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="50" cy="20" r="2.5" fill="#9F7AEA" />
        <path d="M42 24a12 12 0 0 1 16 0" stroke="#9F7AEA" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // IONIC
  if (normalized.includes("ionic")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="36" stroke="#3880FF" strokeWidth="12" />
        <circle cx="50" cy="50" r="14" fill="#3880FF" />
        <circle cx="72" cy="28" r="7" fill="#3880FF" />
      </svg>
    );
  }

  // Next.js
  if (normalized.includes("next")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="90" fill="#000000" />
        <path d="M149.508 157.438L69.1415 54H54V125.969H66.1132V69.3789L139.992 164.845C143.332 162.613 146.518 160.133 149.508 157.438Z" fill="#FFFFFF" />
        <rect x="115" y="54" width="12" height="72" fill="#FFFFFF" />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes("typescript")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <path d="M70.08 78.43c2.04 3.4 5.34 5.76 9.4 5.76 4.3 0 7.02-2.19 7.02-5.23 0-3.66-2.93-4.92-7.85-7.01-6.91-2.88-11.41-6.18-11.41-13.09 0-7.22 5.65-12.77 14.34-12.77 6.18 0 10.78 2.3 13.82 7.43l-6.8 4.4c-1.68-2.62-3.77-3.87-7.02-3.87-3.56 0-5.65 2.09-5.65 4.6 0 3.25 2.51 4.5 7.43 6.6 7.43 3.14 11.93 6.39 11.93 13.61 0 8.06-6.28 13.51-15.81 13.51-8.58 0-14.45-3.98-17.27-9.84l7.89-4.1zM34.8 54.36h13.92v48.78H60.2V54.36h13.92V46.6H34.8v7.76z" fill="#ffffff" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8" />
      </svg>
    );
  }

  // Vue.js
  if (normalized.includes("vue")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg">
        <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41B883" />
        <path d="M161.096.001l-30.225 52.351L100.647.001H52.846l78.026 135.145L208.897.001z" fill="#34495E" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes("node")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5z" fill="#339933" />
        <path d="M16 4.8l10.5 6.1v12.2L16 29.2 5.5 23.1V10.9L16 4.8z" fill="#66CC33" />
        <path d="M16 11c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Go (Golang)
  if (normalized.includes("go") || normalized.includes("golang")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="#00ADD8" />
        <path d="M28 50c0-12.2 9.8-22 22-22 7.5 0 14.1 3.7 18.1 9.5l-8.5 6.2c-2.3-3.6-6-5.7-9.6-5.7-6.6 0-12 5.4-12 12s5.4 12 12 12c4.8 0 8.8-2.8 10.6-6.9H48v-8.5h22.2C70.6 62.5 61.2 72 50 72c-12.2 0-22-9.8-22-22z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Laravel / PHP
  if (normalized.includes("laravel") || normalized.includes("php")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#FF2D20" />
        <path d="M98.6 34.2L68.3 16.7c-2.6-1.5-5.9-1.5-8.6 0L29.4 34.2c-2.6 1.5-4.3 4.4-4.3 7.5v35c0 3.1 1.6 5.9 4.3 7.5l30.3 17.5c2.6 1.5 5.9 1.5 8.6 0l30.3-17.5c2.6-1.5 4.3-4.4 4.3-7.5v-35c0-3.1-1.7-6-4.3-7.5zm-34.6-7.8l21.2 12.2-21.2 12.2-21.2-12.2L64 26.4zm-28.9 48.7V48.5l21.2 12.2v26.6L35.1 75.1zm57.8 0L71.7 87.3V60.7l21.2-12.2v26.6z" fill="#FFFFFF" />
      </svg>
    );
  }

  // NestJS
  if (normalized.includes("nest")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#E0234E" />
        <path d="M64 20l36 21v42l-36 21-36-21V41l36-21zm0 14.5L38.5 49.3v27.4L64 91.5l25.5-14.8V49.3L64 34.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // PostgreSQL / pgvector
  if (normalized.includes("postgres") || normalized.includes("pgvector")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#336791" />
        <path d="M64 26c-18.8 0-34 15.2-34 34 0 10.4 4.6 19.6 12 26v16h14v-7.2c2.6.8 5.2 1.2 8 1.2s5.4-.4 8-1.2V102h14V86c7.4-6.4 12-15.6 12-26 0-18.8-15.2-34-34-34zm-8 42c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm16 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Redis
  if (normalized.includes("redis")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#DC382D" />
        <path d="M96 46L64 30 32 46l32 16 32-16zm-64 20l32 16v20L32 86V66zm64 0l-32 16v20l32-16V66z" fill="#FFFFFF" />
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes("mongo")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#13AA52" />
        <path d="M64 20s-16 26.8-16 48.4c0 15.6 9.6 28.2 24 31.6v-80zm0 0s16 26.8 16 48.4c0 15.6-9.6 28.2-24 31.6v-80z" fill="#FFFFFF" />
      </svg>
    );
  }

  // OpenAI / GPT-4o
  if (normalized.includes("openai") || normalized.includes("gpt")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#10A37F" />
        <path d="M19.4 10.4c-.2-.9-.8-1.7-1.6-2.1-.4-.2-.9-.3-1.4-.3v-1c0-1.4-.8-2.7-2-3.4-.8-.4-1.7-.5-2.6-.3-.4-.7-1.1-1.3-1.9-1.6-1.4-.6-3-.2-4 1-.5.6-.8 1.4-.8 2.2H4.1c-1.4 0-2.7.8-3.4 2-.5.8-.6 1.7-.4 2.6-.7.4-1.3 1.1-1.6 1.9-.6 1.4-.2 3 1 4 .6.5 1.4.8 2.2.8v1c0 1.4.8 2.7 2 3.4.8.4 1.7.5 2.6.3.4.7 1.1 1.3 1.9 1.6 1.4.6 3 .2 4-1 .5-.6.8-1.4.8-2.2h1c1.4 0 2.7-.8 3.4-2 .5-.8.6-1.7.4-2.6.7-.4 1.3-1.1 1.6-1.9.6-1.4.2-3-1-4-.1-.2-.2-.3-.2-.5z" stroke="#FFFFFF" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }

  // Anthropic Claude
  if (normalized.includes("anthropic") || normalized.includes("claude")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#D97706" />
        <path d="M64 24v80M24 64h80M35.7 35.7l56.6 56.6M35.7 92.3l56.6-56.6" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
      </svg>
    );
  }

  // LangChain / LangGraph
  if (normalized.includes("langchain") || normalized.includes("langgraph")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#1C3C3C" />
        <path d="M40 44c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v12c0 6.6-5.4 12-12 12H52c-6.6 0-12-5.4-12-12V44zm12 28h24c6.6 0 12 5.4 12 12v12c0 6.6-5.4 12-12 12H52c-6.6 0-12-5.4-12-12V84c0-6.6 5.4-12 12-12z" stroke="#38BDF8" strokeWidth="8" fill="none" />
      </svg>
    );
  }

  // AWS
  if (normalized.includes("aws") || normalized.includes("amazon")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#232F3E" />
        <path d="M34 50l10 24h6l10-24h-6l-7 18-7-18h-6zm26 0h6v24h-6V50zm12 14c0-6 4-10 10-10s10 4 10 10-4 10-10 10-10-4-10-10zm6 0c0 3 2 5 4 5s4-2 4-5-2-5-4-5-4 2-4 5z" fill="#FFFFFF" />
        <path d="M34 84c20 12 40 12 60 0" stroke="#FF9900" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes("docker")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#2496ED" />
        <path d="M32 54h10v10H32zm14 0h10v10H46zm14 0h10v10H60zm14 0h10v10H74zm-28-14h10v10H46zm14 0h10v10H60zm14 0h10v10H74zm14 14h10v10H88zM24 74c0 16 12 26 36 26 26 0 42-12 46-30H24v4z" fill="#FFFFFF" />
      </svg>
    );
  }

  // GitHub Actions
  if (normalized.includes("github")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#181717" />
        <path d="M64 24C41.9 24 24 41.9 24 64c0 17.7 11.5 32.7 27.4 38 2 .4 2.7-.9 2.7-1.9v-6.8c-11.1 2.4-13.5-5.4-13.5-5.4-1.8-4.6-4.4-5.8-4.4-5.8-3.6-2.5.3-2.4.3-2.4 4 .3 6.1 4.1 6.1 4.1 3.6 6.1 9.3 4.3 11.6 3.3.4-2.6 1.4-4.3 2.5-5.3-8.9-1-18.2-4.4-18.2-19.8 0-4.4 1.6-8 4.1-10.8-.4-1-.1.8-4.2.1-4.2 0 0 3.4-1.1 11.1 4.1 3.2-.9 6.7-1.3 10.1-1.3s6.9.4 10.1 1.3c7.7-5.2 11.1-4.1 11.1-4.1 3.4 8.4 1.3 14.6.6 16.2 2.6 2.8 4.1 6.4 4.1 10.8 0 15.4-9.4 18.7-18.3 19.7 1.4 1.2 2.7 3.7 2.7 7.4v11c0 1 .7 2.3 2.8 1.9C92.5 96.7 104 81.7 104 64c0-22.1-17.9-40-40-40z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Cloudflare
  if (normalized.includes("cloudflare")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#F38020" />
        <path d="M88.5 56.4c-1.3-11.2-10.8-19.9-22.3-19.9-9.5 0-17.7 5.9-21 14.3-1.6-.4-3.3-.6-5-.6-11.5 0-20.8 9.3-20.8 20.8 0 1.2.1 2.3.3 3.4H98.6c4.6 0 8.4-3.8 8.4-8.4 0-4.4-3.4-8-7.7-8.4-.3-.4-.5-.8-.8-1.2z" fill="#FFFFFF" />
      </svg>
    );
  }

  // n8n
  if (normalized.includes("n8n")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#EA4B71" />
        <path d="M36 44h18l18 18-18 18H36V44zm56 0H74L56 62l18 18h18V44z" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }

  // Stripe
  if (normalized.includes("stripe")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#635BFF" />
        <path d="M58.7 54.4c0-4.1 3.4-5.8 8.9-5.8 8 0 18.2 2.8 24.3 6.1V35.6c-6.8-2.7-16-4.1-24.3-4.1-20.3 0-33.8 10.6-33.8 28.3 0 27.6 38 23.2 38 35.1 0 4.8-4.2 6.4-10.2 6.4-8.8 0-20.1-3.6-26.6-7.3v19.4c7.6 3.3 17.5 4.9 26.6 4.9 20.8 0 35.2-10.3 35.2-28.4-.1-29.8-38.1-24.6-38.1-35.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // WhatsApp / Twilio
  if (normalized.includes("whatsapp") || normalized.includes("twilio")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#25D366" />
        <path d="M64 28C44.1 28 28 44.1 28 64c0 6.3 1.6 12.3 4.5 17.5L28 100l19.1-5c5 2.7 10.8 4.2 16.9 4.2 19.9 0 36-16.1 36-36s-16.1-35.2-36-35.2zm18.3 47.9c-.8 2.2-4.6 4.2-6.4 4.5-1.7.2-3.8.4-12.4-3.2-10.3-4.3-16.9-14.8-17.4-15.5-.5-.7-4.1-5.5-4.1-10.4s2.6-7.4 3.5-8.4c.9-.9 2-1.2 2.7-1.2.7 0 1.4 0 2 .1.6.1 1.4-.2 2.2 1.7.8 1.9 2.7 6.6 2.9 7.1.2.5.4 1.1.1 1.8-.3.7-.5 1.1-.9 1.7-.5.5-.9 1.2-1.4 1.6-.5.5-1.1 1-.5 2 1.4 2.4 3.1 4.7 5.1 6.5 2.6 2.3 4.8 3 5.8 3.5 1 .5 1.6.4 2.1-.2.6-.6 2.4-2.8 3.1-3.8.6-1 1.3-.8 2.2-.5.9.3 5.7 2.7 6.7 3.2 1 .5 1.7.8 1.9 1.2.3.4.3 2.4-.5 4.6z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Generic Tech Fallback
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#1B365D" />
      <path d="M44 44h40v40H44z" fill="#FFFFFF" opacity="0.3" />
      <path d="M34 64h60M64 34v60" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

const favicons = {
  ios: "/favicons/ios.png",
  react: "/favicons/react.png",
  // ... and so on
};

export function getFavicon(name: string) {
  const normalized = name.toLowerCase();
  // match and return the favicon URL
}
