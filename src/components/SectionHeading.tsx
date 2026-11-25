interface SectionHeadingProps {
  prefix: string;
  scriptWord?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'green';
  scriptBlock?: boolean;
  className?: string;
}

export function SectionHeading({
  prefix,
  scriptWord,
  align = 'left',
  theme = 'light',
  scriptBlock = true,
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isGreen = theme === 'green';

  return (
    <div className={`${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {/* Detalhe recorrente: dois tracinhos horizontais lado a lado (verde e dourado) */}
      <div
        className={`flex items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : 'justify-start'}`}
        aria-hidden="true"
      >
        <span
          className={`inline-block h-[3px] w-7 rounded-full ${
            isGreen ? 'bg-white' : 'bg-[#1E8F3A]'
          }`}
        />
        <span className="inline-block h-[3px] w-7 rounded-full bg-[#F2B705]" />
      </div>

      <h2
        className={`font-bold leading-tight tracking-tight text-balance ${
          isGreen
            ? 'text-[#F2B705] text-3xl sm:text-4xl'
            : 'text-[#262626] text-2xl sm:text-3xl lg:text-[2.15rem]'
        }`}
      >
        <span>{prefix}</span>
        {scriptWord && (
          <span
            className={`font-script font-bold leading-none ${
              scriptBlock ? 'block mt-1' : 'inline-block ml-2'
            } ${
              isGreen
                ? 'text-white text-5xl sm:text-6xl'
                : 'text-[#1E8F3A] text-4xl sm:text-5xl lg:text-[3.25rem]'
            }`}
          >
            {scriptWord}
          </span>
        )}
      </h2>
    </div>
  );
}
