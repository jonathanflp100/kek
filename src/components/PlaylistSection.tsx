import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Heart, Music, Headphones } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from './SectionHeading';
import { FadeIn } from './FadeIn';

export function PlaylistSection() {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const tracks = siteConfig.playlist.tracks;
  const currentTrack = tracks[activeTrackIndex] ?? tracks[0];

  const handlePrev = () => {
    setActiveTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const handleNext = () => {
    setActiveTrackIndex((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
    setIsPlaying(true);
  };

  return (
    <section
      id="playlist"
      className="py-16 sm:py-24 bg-white"
      aria-labelledby="playlist-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Coluna esquerda: texto + botão Spotify */}
          <FadeIn direction="left" className="lg:col-span-6">
            <div id="playlist-heading">
              <SectionHeading prefix={siteConfig.playlist.title} align="left" />
            </div>

            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-neutral-600">
              {siteConfig.playlist.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={siteConfig.playlist.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-9 py-3.5 rounded-full bg-[#0A8A2A] hover:bg-[#087323] text-white text-sm sm:text-base font-bold tracking-wide shadow-md transition-all duration-150 hover:scale-[1.02] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A8A2A]"
              >
                <Music className="w-4 h-4" aria-hidden="true" />
                <span>{siteConfig.playlist.ctaLabel}</span>
              </a>
            </div>
          </FadeIn>

          {/* Coluna direita: mockup de celular Spotify com fones de ouvido */}
          <FadeIn direction="right" className="lg:col-span-6 flex justify-center">
            <div className="relative flex items-center justify-center py-6 px-4 sm:px-8">
              {/* Círculo suave decorativo de fundo */}
              <div
                className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-[#FDFDF0] border border-[#F2B705]/40 -z-0"
                aria-hidden="true"
              />

              {/* Ilustração estilizada de fones de ouvido sobre a lateral */}
              <div
                className="hidden sm:block absolute -left-8 bottom-8 z-20 pointer-events-none select-none"
                aria-hidden="true"
              >
                <svg
                  width="124"
                  height="136"
                  viewBox="0 0 124 136"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-xl"
                >
                  {/* Arco do fone */}
                  <path
                    d="M22 80C22 44 40 18 62 18C84 18 102 44 102 80"
                    stroke="#1F2937"
                    strokeWidth="11"
                    strokeLinecap="round"
                  />
                  <path
                    d="M25 78C25 46 42 22 62 22C82 22 99 46 99 78"
                    stroke="#F2B705"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Concha esquerda */}
                  <rect x="8" y="68" width="24" height="44" rx="12" fill="#111827" />
                  <rect x="24" y="73" width="8" height="34" rx="4" fill="#374151" />
                  <circle cx="18" cy="90" r="5" fill="#2E9B63" />
                  {/* Concha direita */}
                  <rect x="92" y="68" width="24" height="44" rx="12" fill="#111827" />
                  <rect x="92" y="73" width="8" height="34" rx="4" fill="#374151" />
                  <circle cx="106" cy="90" r="5" fill="#2E9B63" />
                </svg>
              </div>

              {/* Smartphone Mockup */}
              <div className="relative z-10 w-[280px] sm:w-[300px] rounded-[2.4rem] bg-[#121212] p-3 shadow-2xl shadow-black/25 border-[4px] border-neutral-800">
                {/* Notch superior */}
                <div
                  className="mx-auto w-24 h-4 rounded-b-xl bg-[#121212] absolute top-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="w-10 h-1 rounded-full bg-neutral-700" />
                </div>

                {/* Tela do app Spotify */}
                <div className="rounded-[1.85rem] overflow-hidden bg-gradient-to-b from-[#0E5933] via-[#12261C] to-[#121212] text-white pt-8 pb-5 px-4">
                  {/* Topo Spotify */}
                  <div className="flex items-center justify-between text-[11px] text-white/80 mb-4">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[#1DB954]">
                      <Headphones className="w-3.5 h-3.5" aria-hidden="true" />
                      Spotify
                    </span>
                    <span className="font-medium text-white/70">Playlist K&amp;K</span>
                  </div>

                  {/* Capa do álbum da playlist */}
                  <div className="relative mx-auto w-40 h-40 rounded-xl overflow-hidden shadow-lg border border-[#F2B705]/50 bg-[#0B4A2A]">
                    <img
                      src={siteConfig.hero.image}
                      alt="Capa da Playlist Universo K&K"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-2.5 left-3 right-3 text-left">
                      <p className="font-script text-2xl leading-none text-[#F2B705]">
                        Universo K&amp;K
                      </p>
                      <p className="text-[10px] font-semibold text-white/90 mt-0.5">
                        Família Pereira
                      </p>
                    </div>
                  </div>

                  {/* Título da música atual */}
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white truncate">
                        {currentTrack.title}
                      </p>
                      <p className="text-xs text-white/65 truncate">{currentTrack.artist}</p>
                    </div>
                    <Heart
                      className="w-4 h-4 text-[#1DB954] fill-[#1DB954] shrink-0"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Barra de progresso */}
                  <div className="mt-3" aria-hidden="true">
                    <div className="w-full h-1 rounded-full bg-white/20 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-[#1DB954] transition-all duration-300 ${
                          isPlaying ? 'w-3/5' : 'w-2/5'
                        }`}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-white/55 mt-1 tabular-nums">
                      <span>1:42</span>
                      <span>{currentTrack.duration}</span>
                    </div>
                  </div>

                  {/* Controles do player */}
                  <div className="mt-2 flex items-center justify-center gap-6">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Faixa anterior"
                      className="text-white/80 hover:text-white transition-colors p-1.5 cursor-pointer"
                    >
                      <SkipBack className="w-5 h-5 fill-current" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsPlaying((prev) => !prev)}
                      aria-label={isPlaying ? 'Pausar prévia visual' : 'Reproduzir prévia visual'}
                      className="w-11 h-11 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Próxima faixa"
                      className="text-white/80 hover:text-white transition-colors p-1.5 cursor-pointer"
                    >
                      <SkipForward className="w-5 h-5 fill-current" />
                    </button>
                  </div>

                  {/* Lista de faixas */}
                  <ul className="mt-4 pt-3 border-t border-white/10 space-y-1.5">
                    {tracks.map((track, idx) => {
                      const active = idx === activeTrackIndex;
                      return (
                        <li key={track.id}>
                          <button
                            type="button"
                            onClick={() => {
                              setActiveTrackIndex(idx);
                              setIsPlaying(true);
                            }}
                            className={`w-full flex items-center justify-between gap-2 px-2 py-1.5 rounded-md text-left transition-colors cursor-pointer ${
                              active
                                ? 'bg-white/10 text-[#1DB954]'
                                : 'text-white/75 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <span className="text-[11px] font-medium truncate">
                              {track.title}
                            </span>
                            <span className="text-[10px] text-white/50 tabular-nums shrink-0">
                              {track.duration}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
