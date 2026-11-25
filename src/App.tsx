import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { getWhatsAppUrl, siteConfig } from './config/siteConfig';
import { Header } from './components/Header';
import { SectionHeading } from './components/SectionHeading';
import { FadeIn } from './components/FadeIn';
import { RecipesSection } from './components/RecipesSection';
import { CommunityNewsletter } from './components/CommunityNewsletter';
import { PlaylistSection } from './components/PlaylistSection';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { TermsModal } from './components/TermsModal';

export default function App() {
  const [activeNav, setActiveNav] = useState<string>('moinho');
  const [termsOpen, setTermsOpen] = useState(false);
  const [aboutImgError, setAboutImgError] = useState(false);
  const [historyImgError, setHistoryImgError] = useState(false);
  const prefersReduced = useReducedMotion();
  const bannerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ['start end', 'end start'],
  });
  const bannerParallaxY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-800">
      {/* 1. HEADER + HERO */}
      <Header
        activeNav={activeNav}
        onSelectNav={setActiveNav}
        onOpenTerms={() => setTermsOpen(true)}
      />

      <main className="flex-1">
        {/* HERO TELA CHEIA */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950"
          aria-label="Destaque Indústria K&K Alimentos"
        >
          <img
            src={siteConfig.hero.image}
            alt={siteConfig.hero.imageAlt}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center scale-[1.01]"
          />

          {/* Overlay escuro medido para alto contraste */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-16">
            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-script text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)] select-none">
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[6.25rem] font-bold leading-[0.95]">
                  {siteConfig.hero.lineOne}
                </span>

                <span className="mt-2 sm:mt-3 flex items-center justify-center gap-4 sm:gap-7">
                  <span
                    className="inline-block h-[2px] w-10 sm:w-16 md:w-20 bg-white/85 rounded-full"
                    aria-hidden="true"
                  />
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold leading-none">
                    {siteConfig.hero.lineTwo}
                  </span>
                  <span
                    className="inline-block h-[2px] w-10 sm:w-16 md:w-20 bg-white/85 rounded-full"
                    aria-hidden="true"
                  />
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Indicador suave de rolagem */}
          <a
            href="#sobre"
            onClick={() => setActiveNav('moinho')}
            aria-label="Rolar para conhecer a Indústria K&K Alimentos"
            className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/35 bg-black/25 text-white/90 hover:text-[#F2B705] hover:border-[#F2B705] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B705]"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </section>

        {/* 2. SOBRE / PRODUTOS (fundo branco, 2 colunas) */}
        <section
          id="sobre"
          className="py-20 sm:py-24 bg-white"
          aria-labelledby="sobre-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              <FadeIn direction="left" className="lg:col-span-6">
                <div id="sobre-heading">
                  <SectionHeading
                    prefix={siteConfig.about.titlePrefix}
                    scriptWord={siteConfig.about.titleScript}
                    align="left"
                  />
                </div>

                <p className="mt-6 text-sm sm:text-base leading-[1.75] text-neutral-600">
                  {siteConfig.about.description}
                </p>

                <div className="mt-8">
                  <a
                    href={getWhatsAppUrl(
                      'Olá! Gostaria de conhecer mais sobre as farinhas de trigo da Indústria K&K Alimentos.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#0A8A2A] hover:bg-[#087323] text-white text-sm sm:text-base font-bold tracking-wide shadow-md transition-all duration-150 hover:scale-[1.02] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A8A2A]"
                  >
                    {siteConfig.about.ctaLabel}
                  </a>
                </div>
              </FadeIn>

              <FadeIn direction="right" className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  {!aboutImgError ? (
                    <img
                      src={siteConfig.about.image}
                      alt={siteConfig.about.imageAlt}
                      referrerPolicy="no-referrer"
                      onError={() => setAboutImgError(true)}
                      className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-lg shadow-black/5"
                    />
                  ) : (
                    <div className="aspect-[4/3] w-full rounded-2xl bg-[#FDFDF0] border border-[#F2B705]/40 flex flex-col items-center justify-center p-8 text-center">
                      <span className="font-script text-4xl text-[#1E8F3A] font-bold">
                        Farinhas K&amp;K
                      </span>
                      <p className="mt-2 text-sm text-neutral-600">
                        Pureza garantida e alta performance para panificação
                      </p>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 3. NOSSA HISTÓRIA (fundo creme #FDFDF0, 2 colunas) */}
        <section
          id="historia"
          className="py-20 sm:py-24 bg-[#FDFDF0]"
          aria-labelledby="historia-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
              {/* Esquerda: foto da fachada da loja */}
              <FadeIn direction="left" className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/10 border border-[#F2B705]/35 bg-white">
                  {!historyImgError ? (
                    <img
                      src={siteConfig.history.image}
                      alt={siteConfig.history.imageAlt}
                      referrerPolicy="no-referrer"
                      onError={() => setHistoryImgError(true)}
                      className="w-full h-full aspect-[4/3] object-cover"
                    />
                  ) : (
                    <div className="aspect-[4/3] w-full bg-[#F6F2E8] flex flex-col items-center justify-center p-8 text-center">
                      <span className="font-script text-4xl text-[#1E8F3A] font-bold">
                        Moinho K&amp;K
                      </span>
                      <p className="mt-2 text-sm text-neutral-600">São João - PE</p>
                    </div>
                  )}
                </div>
              </FadeIn>

              {/* Direita: título e 4 parágrafos */}
              <FadeIn direction="right" className="lg:col-span-6">
                <div id="historia-heading">
                  <SectionHeading
                    prefix={siteConfig.history.titlePrefix}
                    scriptWord={siteConfig.history.titleScript}
                    align="left"
                  />
                </div>

                <div className="mt-6 space-y-4 text-sm sm:text-[15.5px] leading-[1.75] text-neutral-600">
                  {siteConfig.history.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 4. ESTRUTURA DO MOINHO (fundo branco, centralizado) */}
        <section
          id="moinho"
          className="py-20 sm:py-24 bg-white"
          aria-labelledby="moinho-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <div id="moinho-heading">
                <SectionHeading
                  prefix={siteConfig.millStructure.titlePrefix}
                  scriptWord={siteConfig.millStructure.titleScript}
                  align="center"
                />
              </div>

              <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-neutral-500">
                {siteConfig.millStructure.subtitle}
              </p>
            </FadeIn>

            {/* Vídeo do YouTube 16:9 com borda dourada fina e sombra */}
            <FadeIn delay={0.1} className="mt-10">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-[#F2B705] shadow-2xl shadow-black/15 bg-neutral-950">
                <iframe
                  src={siteConfig.millStructure.youtubeEmbedUrl}
                  title={siteConfig.millStructure.videoTitle}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </FadeIn>

            {/* Botão largo "Entre em contato" logo abaixo */}
            <FadeIn delay={0.15} className="mt-10">
              <a
                href={getWhatsAppUrl(
                  'Olá! Vi a estrutura do Moinho de Trigo K&K no site e gostaria de falar com um consultor.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[300px] px-12 py-4 rounded-full bg-[#0A8A2A] hover:bg-[#087323] text-white text-sm sm:text-base font-bold tracking-wide shadow-md transition-all duration-150 hover:scale-[1.02] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A8A2A]"
              >
                {siteConfig.millStructure.ctaLabel}
              </a>
            </FadeIn>
          </div>
        </section>

        {/* 5. RECEITAS (fundo verde #2E9B63) */}
        <RecipesSection />

        {/* 6. FAIXA "FAÇA PARTE DA FAMÍLIA K&K" (banner largo com parallax) */}
        <section
          id="familia"
          ref={bannerRef}
          aria-label="Faça parte da Família K&K"
          className="relative min-h-[340px] sm:min-h-[420px] flex items-center justify-center overflow-hidden bg-neutral-900"
        >
          <motion.img
            src={siteConfig.familyBanner.image}
            alt={siteConfig.familyBanner.imageAlt}
            referrerPolicy="no-referrer"
            style={prefersReduced ? undefined : { y: bannerParallaxY }}
            className="absolute inset-x-0 -top-[14%] w-full h-[128%] object-cover object-center will-change-transform"
          />

          {/* Overlay escuro para contraste elevado */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/58 to-black/70"
            aria-hidden="true"
          />

          <FadeIn className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
            <h2 className="text-balance">
              <span className="block text-2xl sm:text-4xl md:text-[2.6rem] font-bold text-[#F2B705] tracking-tight drop-shadow">
                {siteConfig.familyBanner.titlePrefix}
              </span>
              <span className="block font-script text-6xl sm:text-7xl md:text-8xl font-bold text-white leading-none mt-2 drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]">
                {siteConfig.familyBanner.titleScript}
              </span>
            </h2>
          </FadeIn>
        </section>

        {/* 7. COMUNIDADE / NEWSLETTER (fundo branco) */}
        <CommunityNewsletter />

        {/* 8. PLAYLIST (fundo branco, 2 colunas) */}
        <PlaylistSection />

        {/* 9. DEPOIMENTO (fundo bege #F6F2E8) */}
        <TestimonialsCarousel />
      </main>

      {/* 10. RODAPÉ (verde escuro #0B4A2A + copyright #04220F) */}
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppFloat />

      {/* Modal de Termos e Condições */}
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </div>
  );
}
