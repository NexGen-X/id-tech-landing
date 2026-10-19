import type { FC } from 'react';

interface IdTechLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  showBadge?: boolean;
}

export const IdTechLogo: FC<IdTechLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  showBadge = true
}) => {
  // Height presets for optimal topbar proportions
  const heightMap = {
    sm: 'h-8',
    md: 'h-9',
    lg: 'h-11'
  };

  const currentHeight = heightMap[size];

  return (
    <div className={`inline-flex items-center group select-none ${className}`}>
      <svg
        className={`${currentHeight} w-auto max-w-full transition-transform duration-300 group-hover:scale-[1.02]`}
        viewBox={showText ? '0 0 224 44' : '0 0 44 44'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="id-tech logo"
      >
        <defs>
          {/* Main Cybernetic Electric Gradient */}
          <linearGradient id="idElectricGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="45%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>

          {/* Core Quantum Diamond Radiant Gradient */}
          <linearGradient id="quantumDiamondGrad" x1="12" y1="8" x2="20" y2="16" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A5F3FC" />
            <stop offset="50%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>

          {/* Letterform Wordmark "id" Gradient */}
          <linearGradient id="wordmarkIdGrad" x1="50" y1="12" x2="84" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="60%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>

          {/* Titanium White with Subtle Metallic Luster for "tech" */}
          <linearGradient id="wordmarkTechGrad" x1="115" y1="10" x2="185" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="85%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          {/* Ambient Glow Filter */}
          <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ==================================================================
            1. THE EMBLEM: Neural Quantum Node (Squircle + Monogram)
            ================================================================== */}
        <g className="emblem-group">
          {/* Subtle Outer Neon Halo */}
          <rect
            x="1.5"
            y="1.5"
            width="41"
            height="41"
            rx="11.5"
            fill="url(#idElectricGrad)"
            opacity="0.18"
            className="transition-opacity duration-300 group-hover:opacity-35"
          />

          {/* Main Emblem Chassis */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="11"
            fill="#060913"
            stroke="url(#idElectricGrad)"
            strokeWidth="1.2"
            className="transition-colors duration-300 group-hover:stroke-cyan-300"
          />

          {/* Circuit Grid Inlay */}
          <path
            d="M5 22 H11 M33 22 H39 M22 5 V11 M22 33 V39"
            stroke="#06B6D4"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.4"
          />

          {/* Circuit Micro-Track Pins */}
          <circle cx="5" cy="22" r="1.2" fill="#22D3EE" opacity="0.8" />
          <circle cx="39" cy="22" r="1.2" fill="#818CF8" opacity="0.8" />

          {/* Emblem Monogram: The "i" Stem */}
          <rect
            x="12"
            y="18"
            width="4.5"
            height="15.5"
            rx="2.25"
            fill="url(#idElectricGrad)"
          />

          {/* Emblem Monogram: Floating Quantum Diamond (i-dot) */}
          <g className="transition-transform duration-500 group-hover:scale-110 origin-[14.25px_11.5px]">
            <polygon
              points="14.25,7.5 18,11.5 14.25,15.5 10.5,11.5"
              fill="url(#quantumDiamondGrad)"
              filter="url(#cyanGlow)"
            />
            <circle cx="14.25" cy="11.5" r="1" fill="#FFFFFF" />
          </g>

          {/* Emblem Monogram: The "d" Ascender */}
          <rect
            x="27.5"
            y="9"
            width="4.5"
            height="24.5"
            rx="2.25"
            fill="url(#idElectricGrad)"
          />

          {/* Emblem Monogram: The "d" Continuous Cybernetic Bowl */}
          <path
            d="M 27.5 19.5 C 21.5 19.5 18 22.5 18 26.5 C 18 30.5 21.5 33.5 27.5 33.5"
            stroke="url(#idElectricGrad)"
            strokeWidth="3.8"
            strokeLinecap="round"
          />

          {/* Inside Synapse Core Dot */}
          <circle cx="23.5" cy="26.5" r="1.5" fill="#22D3EE" />

          {/* Live Operational Status Beacon (Top Right of Emblem) */}
          <g>
            <circle cx="38" cy="6" r="3" fill="#10B981" opacity="0.3" className="animate-ping" />
            <circle cx="38" cy="6" r="2.2" fill="#10B981" stroke="#060913" strokeWidth="1" />
          </g>
        </g>

        {/* ==================================================================
            2. THE WORDMARK: Characteristic "id"
            ================================================================== */}
        {showText && (
          <>
            <g className="wordmark-id">
              {/* The letter 'i' stem */}
              <rect
            x="54"
            y="18"
            width="5"
            height="15.5"
            rx="2.5"
            fill="url(#wordmarkIdGrad)"
          />

          {/* The letter 'i' Quantum Diamond Tittle (Bespoke dot) */}
          <polygon
            points="56.5,8 60,12 56.5,16 53,12"
            fill="url(#quantumDiamondGrad)"
            filter="url(#cyanGlow)"
          />
          <circle cx="56.5" cy="12" r="0.9" fill="#FFFFFF" />

          {/* The letter 'd' Ascender */}
          <rect
            x="76.5"
            y="9.5"
            width="5"
            height="24"
            rx="2.5"
            fill="url(#wordmarkIdGrad)"
          />

          {/* The letter 'd' Geometric Bowl */}
          <path
            d="M 77 19.5 C 70.5 19.5 65.5 22.5 65.5 26.5 C 65.5 30.5 70.5 33.5 77 33.5"
            stroke="url(#wordmarkIdGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>

        {/* ==================================================================
            3. THE CHARACTERISTIC CONNECTOR: Neural Quantum Bridge
            ================================================================== */}
        <g className="connector-group">
          {/* 45-degree Angled Cybernetic Beam with Micro-Nodes */}
          <line
            x1="89"
            y1="31"
            x2="98"
            y2="15"
            stroke="url(#idElectricGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="89" cy="31" r="1.5" fill="#38BDF8" />
          <circle cx="98" cy="15" r="1.5" fill="#818CF8" />
        </g>

        {/* ==================================================================
            4. THE WORDMARK: Engineered Titanium "tech"
            ================================================================== */}
        <g className="wordmark-tech">
          {/* Letter 't' */}
          {/* Vertical Stem */}
          <rect
            x="110.5"
            y="14"
            width="4.5"
            height="19.5"
            rx="2.25"
            fill="url(#wordmarkTechGrad)"
          />
          {/* Crossbar with 45° chamfer cut on left */}
          <path
            d="M 106.5 21.5 L 108.5 18.5 H 120 C 121.2 18.5 122 19.3 122 20.5 C 122 21.7 121.2 22.5 120 22.5 H 107.5 Z"
            fill="url(#wordmarkTechGrad)"
          />

          {/* Letter 'e' */}
          <path
            d="M 137.5 25.5 H 126 C 126.2 22 129 19 133 19 C 137 19 139.5 21.8 139.5 25.5 V 26.5 C 139.5 30.5 136.5 33.5 132.5 33.5 C 127.5 33.5 125 29.5 125 26 C 125 21.5 128.5 18 133 18 C 137.5 18 140.5 21 140.5 24"
            stroke="url(#wordmarkTechGrad)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter 'c' */}
          <path
            d="M 154 21.5 C 152.5 19.5 149.8 18 146.5 18 C 142 18 139 21.5 139 26 C 139 30.5 142 34 146.5 34 C 149.8 34 152.5 32.5 154 30.5"
            stroke="url(#wordmarkTechGrad)"
            strokeWidth="3.6"
            strokeLinecap="round"
          />

          {/* Letter 'h' */}
          {/* Ascender */}
          <rect
            x="159"
            y="9.5"
            width="4.5"
            height="24"
            rx="2.25"
            fill="url(#wordmarkTechGrad)"
          />
          {/* Arch & Right Leg */}
          <path
            d="M 163.5 22 C 166 19.5 169 18 172.5 18 C 176 18 178 20.5 178 24 V 33.5"
            stroke="url(#wordmarkTechGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>

        {/* ==================================================================
            5. THE ENTERPRISE SUB-BADGE: [AI]
            ================================================================== */}
        {showBadge && (
          <g className="badge-ai">
            <rect
              x="188"
              y="16"
              width="26"
              height="15"
              rx="4.5"
              fill="rgba(6, 182, 212, 0.12)"
              stroke="rgba(6, 182, 212, 0.4)"
              strokeWidth="0.9"
            />
            <text
              x="201"
              y="27"
              textAnchor="middle"
              fill="#22D3EE"
              fontSize="9"
              fontFamily="'JetBrains Mono', 'Plus Jakarta Sans', monospace"
              fontWeight="900"
              letterSpacing="0.8"
            >
              AI
            </text>
          </g>
        )}
      </>
    )}
      </svg>
    </div>
  );
};
