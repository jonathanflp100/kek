import { siteConfig } from '../config/siteConfig';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses: Record<NonNullable<BrandLogoProps['size']>, string> = {
  sm: 'w-12 h-12',
  md: 'w-14 h-14 sm:w-16 sm:h-16',
  lg: 'w-24 h-24 sm:w-28 sm:h-28',
};

export function BrandLogo({ size = 'md', className = '' }: BrandLogoProps) {
  if (siteConfig.brand.logoUrl) {
    return (
      <img
        src={siteConfig.brand.logoUrl}
        alt={`${siteConfig.brand.name} – ${siteConfig.brand.subtitle}`}
        referrerPolicy="no-referrer"
        className={`${sizeClasses[size]} rounded-full object-cover border-2 border-[#F2B705] shadow-md shrink-0 ${className}`}
      />
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full shrink-0 select-none ${className}`}
      aria-label={`${siteConfig.brand.name} – ${siteConfig.brand.subtitle}`}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
        role="img"
        aria-hidden="true"
      >
        <circle cx="60" cy="60" r="57" fill="#0B4A2A" stroke="#F2B705" strokeWidth="3.5" />
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="#0E5933"
          stroke="#F2B705"
          strokeWidth="1"
          strokeOpacity="0.65"
        />

        {/* Espiga de trigo esquerda */}
        <path
          d="M28 77C21 63 22 47 31 33"
          stroke="#F2B705"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <ellipse cx="23" cy="64" rx="2.4" ry="4.5" transform="rotate(-24 23 64)" fill="#F2B705" />
        <ellipse cx="22.5" cy="52" rx="2.4" ry="4.5" transform="rotate(-8 22.5 52)" fill="#F2B705" />
        <ellipse cx="26" cy="41" rx="2.3" ry="4.2" transform="rotate(14 26 41)" fill="#F2B705" />

        {/* Espiga de trigo direita */}
        <path
          d="M92 77C99 63 98 47 89 33"
          stroke="#F2B705"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <ellipse cx="97" cy="64" rx="2.4" ry="4.5" transform="rotate(24 97 64)" fill="#F2B705" />
        <ellipse cx="97.5" cy="52" rx="2.4" ry="4.5" transform="rotate(8 97.5 52)" fill="#F2B705" />
        <ellipse cx="94" cy="41" rx="2.3" ry="4.2" transform="rotate(-14 94 41)" fill="#F2B705" />

        {/* Pequena espiga superior */}
        <path
          d="M60 19L63 25L60 28L57 25L60 19Z"
          fill="#F2B705"
        />

        {/* Monograma K&K */}
        <text
          x="60"
          y="63"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="27"
          letterSpacing="-0.5"
        >
          K
          <tspan fill="#F2B705" fontSize="22">
            &amp;
          </tspan>
          K
        </text>

        {/* Subtítulo institucional */}
        <text
          x="60"
          y="78"
          textAnchor="middle"
          fill="#F2B705"
          fontFamily="Montserrat, sans-serif"
          fontWeight="700"
          fontSize="7.4"
          letterSpacing="1.6"
        >
          ALIMENTOS
        </text>

        <line
          x1="39"
          y1="84"
          x2="81"
          y2="84"
          stroke="#F2B705"
          strokeWidth="0.9"
          strokeOpacity="0.7"
        />

        <text
          x="60"
          y="94"
          textAnchor="middle"
          fill="#FFFFFF"
          fillOpacity="0.9"
          fontFamily="Montserrat, sans-serif"
          fontWeight="600"
          fontSize="6.2"
          letterSpacing="1.1"
        >
          MOINHO DE TRIGO
        </text>
      </svg>
    </div>
  );
}
