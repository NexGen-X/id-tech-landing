import type { FC } from 'react';

interface IdTechLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const IdTechLogo: FC<IdTechLogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  animated = true
}) => {
  // Dimension presets
  const sizeMap = {
    sm: { emblem: 'w-8 h-8', textId: 'text-base', textTech: 'text-base', dot: 'w-2 h-2', gap: 'gap-2' },
    md: { emblem: 'w-9 h-9', textId: 'text-lg', textTech: 'text-lg', dot: 'w-2.5 h-2.5', gap: 'gap-2.5' },
    lg: { emblem: 'w-11 h-11', textId: 'text-xl', textTech: 'text-xl', dot: 'w-3 h-3', gap: 'gap-3' }
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center ${currentSize.gap} group select-none ${className}`}>
      {/* ====================================================================
          THE EMBLEM: The Quantum "ID" Cybernetic Core
          ==================================================================== */}
      <div className={`relative ${currentSize.emblem} shrink-0`}>
        {/* Ambient Backlight Glow */}
        <div
          className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 opacity-40 blur-md transition-all duration-500 ${
            animated ? 'group-hover:opacity-85 group-hover:blur-lg' : ''
          }`}
        />

        {/* The Precision Emblem Frame */}
        <div className="relative w-full h-full rounded-xl bg-[#070B14] border border-cyan-500/40 p-1 flex items-center justify-center shadow-lg shadow-black/80 overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-400">
          {/* Subtle Grid Circuit Matrix in Background */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M0 20 H40 M20 0 V40 M10 0 V40 M30 0 V40 M0 10 H40 M0 30 H40"
              stroke="#06B6D4"
              strokeWidth="0.5"
              strokeDasharray="1 3"
            />
          </svg>

          {/* Central Characteristic "ID" Monogram Geometry */}
          <svg
            className="w-full h-full relative z-10 transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Primary Electric Gradient */}
              <linearGradient id="idLogoGrad" x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#818CF8" />
              </linearGradient>

              {/* Quantum Core Diamond Glow */}
              <linearGradient id="coreDiamondGrad" x1="10" y1="8" x2="20" y2="18" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#67E8F9" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>

              {/* Circuit Track Glow */}
              <linearGradient id="circuitTrack" x1="12" y1="20" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Circuit Micro-Interconnects */}
            <path
              d="M6 34 L12 34 M34 12 L38 12 M28 34 L38 34"
              stroke="url(#idLogoGrad)"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.6"
            />
            <circle cx="6" cy="34" r="1.2" fill="#22D3EE" />
            <circle cx="38" cy="12" r="1.2" fill="#818CF8" />

            {/* The "i" Stem: Vertical Laser Conduit */}
            <rect
              x="12"
              y="18"
              width="4.5"
              height="16"
              rx="2.25"
              fill="url(#idLogoGrad)"
            />

            {/* The "i" Dot: Floating Quantum Diamond Nucleus */}
            <g className={animated ? 'origin-center transition-transform duration-500 group-hover:rotate-45' : ''}>
              <path
                d="M 14.25 8 L 18 11.75 L 14.25 15.5 L 10.5 11.75 Z"
                fill="url(#coreDiamondGrad)"
              />
              <circle cx="14.25" cy="11.75" r="1" fill="#FFFFFF" />
            </g>

            {/* The "d" Ascender & Cybernetic Loop */}
            {/* Ascender */}
            <rect
              x="27.5"
              y="9"
              width="4.5"
              height="25"
              rx="2.25"
              fill="url(#idLogoGrad)"
            />

            {/* Geometric Loop of the "d" */}
            <path
              d="M 27.5 20 C 22 20 18.5 23 18.5 27 C 18.5 31 22 34 27.5 34"
              stroke="url(#idLogoGrad)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Inside Loop: Neural Synapse Core */}
            <circle cx="24" cy="27" r="1.5" fill="#22D3EE" className="animate-pulse" />
          </svg>

          {/* Live Operational Beacon (Top-Right of Emblem) */}
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5 pointer-events-none">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border-2 border-[#070B14]" />
          </span>
        </div>
      </div>

      {/* ====================================================================
          THE WORDMARK: Bespoke Characteristic "id-tech" Typography
          ==================================================================== */}
      {showText && (
        <div className="flex items-center tracking-tight font-extrabold leading-none">
          {/* "id" Segment — Lowercase, High-Contrast Cybernetic Precision */}
          <div className="relative flex items-center">
            <span
              className={`${currentSize.textId} font-black bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent tracking-tighter`}
              style={{
                fontFamily: "'JetBrains Mono', 'Plus Jakarta Sans', monospace",
                letterSpacing: '-0.05em'
              }}
            >
              id
            </span>

            {/* Micro Quantum Spark Dot above the 'i' in the wordmark */}
            <span className="absolute -top-1 left-[3px] w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_6px_#22D3EE] animate-pulse" />
          </div>

          {/* Characteristic Connector Glyph (Neural Hyphen / Tech Slash) */}
          <div className="flex items-center px-1 sm:px-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
            <svg
              className="w-3 h-4 text-cyan-400"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Characteristic 45-degree cybernetic slash with micro-pins */}
              <line
                x1="2"
                y1="13"
                x2="10"
                y2="3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="2" cy="13" r="1.2" fill="#38BDF8" />
              <circle cx="10" cy="3" r="1.2" fill="#818CF8" />
            </svg>
          </div>

          {/* "tech" Segment — Futuristic Engineered Aesthetic */}
          <div className="flex items-baseline">
            <span
              className={`${currentSize.textTech} font-black text-white tracking-normal group-hover:text-slate-100 transition-colors`}
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                letterSpacing: '-0.03em'
              }}
            >
              tech
            </span>

            {/* Domain / Cloud Sub-Badge */}
            <span className="ml-1 text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 tracking-widest uppercase hidden sm:inline-block">
              AI
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
