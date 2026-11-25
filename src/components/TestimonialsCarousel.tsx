import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { FadeIn } from './FadeIn';

export function TestimonialsCarousel() {
  const testimonials = siteConfig.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedAvatars, setFailedAvatars] = useState<Record<string, boolean>>({});
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeItem = testimonials[currentIndex] ?? testimonials[0];
  const showAvatarImage = Boolean(activeItem.avatar && !failedAvatars[activeItem.id]);

  return (
    <section
      id="depoimentos"
      className="py-20 sm:py-24 bg-[#F6F2E8]"
      aria-label="Depoimentos de clientes"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          {/* Ícone dourado de balão de conversa */}
          <div className="flex justify-center mb-7" aria-hidden="true">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm border border-[#F2B705]/40 text-[#F2B705]">
              <MessageCircle className="w-7 h-7 fill-[#F2B705]/20" />
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            {/* Botão anterior */}
            {testimonials.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Depoimento anterior"
                className="hidden sm:inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/80 hover:bg-white border border-neutral-200 text-[#0B4A2A] shadow-xs transition-colors shrink-0 mr-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A8A2A]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Conteúdo do slide */}
            <div className="w-full max-w-2xl min-h-[250px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={activeItem.id}
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  <blockquote className="text-base sm:text-lg lg:text-[1.2rem] italic leading-relaxed text-neutral-700 font-medium">
                    “{activeItem.quote}”
                  </blockquote>

                  <figcaption className="mt-8 flex flex-col items-center">
                    {showAvatarImage ? (
                      <img
                        src={activeItem.avatar!}
                        alt={`Foto de ${activeItem.name}`}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedAvatars((prev) => ({ ...prev, [activeItem.id]: true }))
                        }
                        className="w-20 h-20 rounded-full object-cover border-[3px] border-[#F2B705] shadow-md"
                      />
                    ) : (
                      <div
                        className="w-20 h-20 rounded-full bg-[#0B4A2A] border-[3px] border-[#F2B705] shadow-md flex items-center justify-center text-white text-xl font-bold"
                        aria-hidden="true"
                      >
                        {activeItem.initials}
                      </div>
                    )}

                    <span className="mt-3 font-script text-3xl sm:text-4xl font-bold text-[#1E8F3A] leading-tight">
                      {activeItem.name}
                    </span>
                    <span className="mt-0.5 text-sm font-semibold text-neutral-600">
                      {activeItem.role}
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Botão próximo */}
            {testimonials.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                aria-label="Próximo depoimento"
                className="hidden sm:inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/80 hover:bg-white border border-neutral-200 text-[#0B4A2A] shadow-xs transition-colors shrink-0 ml-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A8A2A]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Controles inferiores (mobile arrows + indicadores) */}
          {testimonials.length > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Depoimento anterior"
                className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-neutral-200 text-[#0B4A2A] shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2.5" role="tablist" aria-label="Selecionar depoimento">
                {testimonials.map((item, idx) => {
                  const active = idx === currentIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-label={`Ver depoimento de ${item.name}`}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                        active
                          ? 'w-8 bg-[#1E8F3A]'
                          : 'w-2.5 bg-neutral-400/60 hover:bg-[#F2B705]'
                      }`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Próximo depoimento"
                className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-neutral-200 text-[#0B4A2A] shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
