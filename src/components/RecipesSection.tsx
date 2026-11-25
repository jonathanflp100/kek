import { useEffect, useState } from 'react';
import { Clock, ChefHat, Users, X, Check } from 'lucide-react';
import {
  getWhatsAppUrl,
  siteConfig,
  type RecipeItem,
} from '../config/siteConfig';
import { SectionHeading } from './SectionHeading';
import { FadeIn } from './FadeIn';

function RecipeFallbackArtwork({ title }: { title: string }) {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F7E7C8] via-[#EED4A3] to-[#D9B172]"
      role="img"
      aria-label={title}
    >
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="warmGlow" cx="50%" cy="42%" r="60%">
            <stop offset="0%" stopColor="#FFF7E6" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#E9C78C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C49350" stopOpacity="0.95" />
          </radialGradient>
          <radialGradient id="biscuitTop" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#F8D89B" />
            <stop offset="55%" stopColor="#D99B4E" />
            <stop offset="100%" stopColor="#A66624" />
          </radialGradient>
          <linearGradient id="linenCloth" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDF9F0" />
            <stop offset="100%" stopColor="#EAE0CE" />
          </linearGradient>
        </defs>

        <rect width="400" height="300" fill="url(#warmGlow)" />

        {/* Mesa de madeira rústica inferior */}
        <path d="M0 218 H400 V300 H0 Z" fill="#8A572C" fillOpacity="0.28" />
        <line x1="0" y1="218" x2="400" y2="218" stroke="#7A4B23" strokeOpacity="0.3" strokeWidth="2" />

        {/* Prato artesanal com pano de linho */}
        <ellipse cx="200" cy="214" rx="132" ry="38" fill="#5C3A1B" fillOpacity="0.18" />
        <ellipse cx="200" cy="204" rx="126" ry="36" fill="url(#linenCloth)" stroke="#D4C4A8" strokeWidth="2" />
        <ellipse cx="200" cy="200" rx="102" ry="27" fill="#F8F1E3" stroke="#E0D0B4" strokeWidth="1.5" />

        {/* Bolachas Coquinho empilhadas e espalhadas */}
        {/* Fileira traseira */}
        <g transform="translate(148, 158)">
          <ellipse cx="0" cy="14" rx="34" ry="15" fill="#9A5B1F" />
          <ellipse cx="0" cy="8" rx="34" ry="15" fill="url(#biscuitTop)" />
          <circle cx="-11" cy="5" r="2.2" fill="#FFF4D6" fillOpacity="0.85" />
          <circle cx="8" cy="3" r="1.8" fill="#FFF4D6" fillOpacity="0.85" />
          <circle cx="15" cy="10" r="2" fill="#FFF4D6" fillOpacity="0.8" />
          <circle cx="-3" cy="11" r="1.7" fill="#FFF4D6" fillOpacity="0.8" />
        </g>

        <g transform="translate(248, 160)">
          <ellipse cx="0" cy="14" rx="35" ry="15" fill="#9A5B1F" />
          <ellipse cx="0" cy="8" rx="35" ry="15" fill="url(#biscuitTop)" />
          <circle cx="-14" cy="7" r="2" fill="#FFF4D6" fillOpacity="0.85" />
          <circle cx="4" cy="4" r="2.2" fill="#FFF4D6" fillOpacity="0.85" />
          <circle cx="16" cy="9" r="1.7" fill="#FFF4D6" fillOpacity="0.8" />
          <circle cx="-2" cy="12" r="1.9" fill="#FFF4D6" fillOpacity="0.8" />
        </g>

        {/* Pilha central */}
        <g transform="translate(198, 182)">
          <ellipse cx="0" cy="12" rx="39" ry="16" fill="#8B4F19" />
          <ellipse cx="0" cy="6" rx="39" ry="16" fill="url(#biscuitTop)" />
        </g>
        <g transform="translate(196, 162)">
          <ellipse cx="0" cy="12" rx="38" ry="16" fill="#9A5B1F" />
          <ellipse cx="0" cy="6" rx="38" ry="16" fill="url(#biscuitTop)" />
        </g>
        <g transform="translate(200, 141)">
          <ellipse cx="0" cy="12" rx="37" ry="16" fill="#9A5B1F" />
          <ellipse cx="0" cy="5" rx="37" ry="15.5" fill="url(#biscuitTop)" />
          {/* Flocos de coco ralado dourado */}
          <ellipse cx="-14" cy="3" rx="3.2" ry="1.4" transform="rotate(-15 -14 3)" fill="#FFF8E7" />
          <ellipse cx="6" cy="1" rx="3" ry="1.3" transform="rotate(20 6 1)" fill="#FFF8E7" />
          <ellipse cx="16" cy="7" rx="2.8" ry="1.3" transform="rotate(-10 16 7)" fill="#FFF8E7" />
          <ellipse cx="-4" cy="9" rx="3.4" ry="1.4" transform="rotate(12 -4 9)" fill="#FFF8E7" />
          <ellipse cx="-20" cy="8" rx="2.5" ry="1.1" transform="rotate(25 -20 8)" fill="#FFF8E7" />
          <ellipse cx="8" cy="11" rx="2.6" ry="1.2" transform="rotate(-22 8 11)" fill="#FFF8E7" />
        </g>

        {/* Bolacha inclinada em primeiro plano */}
        <g transform="translate(136, 192) rotate(-12)">
          <ellipse cx="0" cy="9" rx="32" ry="13.5" fill="#8C501B" />
          <ellipse cx="0" cy="4" rx="32" ry="13.5" fill="url(#biscuitTop)" />
          <circle cx="-9" cy="2" r="2" fill="#FFF7E2" />
          <circle cx="7" cy="1" r="1.8" fill="#FFF7E2" />
          <circle cx="14" cy="6" r="2" fill="#FFF7E2" />
          <circle cx="-2" cy="7" r="1.6" fill="#FFF7E2" />
        </g>

        <g transform="translate(260, 191) rotate(11)">
          <ellipse cx="0" cy="9" rx="31" ry="13" fill="#8C501B" />
          <ellipse cx="0" cy="4" rx="31" ry="13" fill="url(#biscuitTop)" />
          <circle cx="-11" cy="3" r="1.9" fill="#FFF7E2" />
          <circle cx="4" cy="2" r="2.1" fill="#FFF7E2" />
          <circle cx="13" cy="6" r="1.7" fill="#FFF7E2" />
        </g>

        {/* Espigas de trigo sutis ao fundo */}
        <path
          d="M52 246 C62 195 72 150 92 98"
          stroke="#B57B32"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        <ellipse cx="78" cy="134" rx="4.5" ry="9" transform="rotate(-22 78 134)" fill="#D49A42" fillOpacity="0.65" />
        <ellipse cx="86" cy="116" rx="4.2" ry="8.5" transform="rotate(-18 86 116)" fill="#D49A42" fillOpacity="0.65" />
        <ellipse cx="94" cy="126" rx="4.2" ry="8.5" transform="rotate(20 94 126)" fill="#C68A35" fillOpacity="0.6" />

        {/* Polvilhado leve de farinha / flocos de coco */}
        <circle cx="96" cy="236" r="2" fill="#FFF9EE" fillOpacity="0.7" />
        <circle cx="112" cy="244" r="1.4" fill="#FFF9EE" fillOpacity="0.6" />
        <circle cx="294" cy="239" r="2.2" fill="#FFF9EE" fillOpacity="0.7" />
        <circle cx="312" cy="230" r="1.5" fill="#FFF9EE" fillOpacity="0.55" />
      </svg>
    </div>
  );
}

function RecipeCardImage({ recipe }: { recipe: RecipeItem }) {
  const [hasError, setHasError] = useState(false);

  if (!recipe.image || hasError) {
    return <RecipeFallbackArtwork title={recipe.title} />;
  }

  return (
    <img
      src={recipe.image}
      alt={recipe.imageAlt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export function RecipesSection() {
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem | null>(null);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!selectedRecipe) return;
    setCheckedIngredients({});
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedRecipe(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedRecipe]);

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section
      id="receitas"
      className="py-20 sm:py-24 bg-[#2E9B63] text-white"
      aria-labelledby="receitas-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <div id="receitas-heading">
            <SectionHeading
              prefix={siteConfig.recipesSection.titlePrefix}
              scriptWord={siteConfig.recipesSection.titleScript}
              align="center"
              theme="green"
            />
          </div>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/95">
            {siteConfig.recipesSection.description}
          </p>
        </FadeIn>

        {/* Grid de 3 cards brancos com borda dourada e sombra */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {siteConfig.recipesSection.items.map((recipe, index) => (
            <FadeIn key={recipe.id} delay={index * 0.1} className="flex">
              <article className="group flex flex-col w-full bg-white rounded-xl overflow-hidden border-2 border-[#F2B705] shadow-xl shadow-black/15 transition-transform duration-200 hover:-translate-y-1">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F6F2E8]">
                  <RecipeCardImage recipe={recipe} />
                </div>

                <div className="flex flex-col flex-1 items-center text-center px-6 py-7">
                  <h3 className="text-xl font-bold text-[#D99F00] tracking-tight">
                    {recipe.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                    {recipe.subtitle}
                  </p>

                  <div className="mt-auto pt-6 w-full flex justify-center">
                    <button
                      type="button"
                      onClick={() => setSelectedRecipe(recipe)}
                      className="px-8 py-2.5 rounded-full bg-[#0A8A2A] hover:bg-[#087323] text-white text-sm font-bold tracking-wide shadow-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A8A2A]"
                    >
                      {siteConfig.recipesSection.cardButtonLabel}
                    </button>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Botão "Entre em contato" centralizado abaixo */}
        <FadeIn delay={0.15} className="mt-12 sm:mt-14 text-center">
          <a
            href={getWhatsAppUrl(
              'Olá! Vi as receitas no site da Indústria K&K Alimentos e gostaria de entrar em contato.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-3.5 rounded-full bg-[#0A8A2A] hover:bg-[#087323] text-white text-sm sm:text-base font-bold tracking-wide shadow-lg shadow-black/20 border border-white/25 transition-all duration-150 hover:scale-[1.02] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F2B705] focus-visible:ring-offset-[#2E9B63]"
          >
            {siteConfig.recipesSection.ctaLabel}
          </a>
        </FadeIn>
      </div>

      {/* Modal de Receita Completa */}
      {selectedRecipe && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="recipe-modal-title"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white text-neutral-800 border-2 border-[#F2B705] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Topo com imagem e botão fechar */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#F6F2E8]">
              <RecipeCardImage recipe={selectedRecipe} />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() => setSelectedRecipe(null)}
                aria-label="Fechar receita"
                className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B705]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <p className="text-xs font-semibold text-[#F2B705] tracking-wide">
                  Receita Exclusiva K&amp;K
                </p>
                <h3
                  id="recipe-modal-title"
                  className="text-2xl sm:text-3xl font-bold leading-tight mt-0.5"
                >
                  {selectedRecipe.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Metadados limpos sem pílulas */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pb-5 border-b border-neutral-200 text-xs sm:text-sm text-neutral-600 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#1E8F3A]" aria-hidden="true" />
                  Preparo: {selectedRecipe.prepTime}
                </span>
                <span aria-hidden="true" className="text-neutral-300">
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#1E8F3A]" aria-hidden="true" />
                  Rendimento: {selectedRecipe.yield}
                </span>
                <span aria-hidden="true" className="text-neutral-300">
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ChefHat className="w-4 h-4 text-[#1E8F3A]" aria-hidden="true" />
                  Nível: {selectedRecipe.difficulty}
                </span>
              </div>

              {/* Dica do Moinho */}
              <div className="mt-5 p-4 rounded-xl bg-[#FDFDF0] border border-[#F2B705]/50 text-sm text-neutral-700 leading-relaxed">
                <strong className="text-[#0B4A2A]">Dica do Moinho K&amp;K: </strong>
                {selectedRecipe.flourTip}
              </div>

              {/* Ingredientes com checklist interativo */}
              <div className="mt-6">
                <h4 className="text-base font-bold text-[#0B4A2A] mb-3">Ingredientes</h4>
                <ul className="space-y-2.5">
                  {selectedRecipe.ingredients.map((item, idx) => {
                    const isChecked = !!checkedIngredients[idx];
                    return (
                      <li key={item}>
                        <button
                          type="button"
                          onClick={() => toggleIngredient(idx)}
                          className="w-full text-left flex items-start gap-3 text-sm text-neutral-700 hover:text-neutral-950 transition-colors cursor-pointer"
                        >
                          <span
                            className={`mt-0.5 flex items-center justify-center w-5 h-5 rounded border shrink-0 transition-colors ${
                              isChecked
                                ? 'bg-[#0A8A2A] border-[#0A8A2A] text-white'
                                : 'border-neutral-300 bg-white'
                            }`}
                            aria-hidden="true"
                          >
                            {isChecked && <Check className="w-3.5 h-3.5" />}
                          </span>
                          <span className={isChecked ? 'line-through text-neutral-400' : ''}>
                            {item}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Modo de Preparo */}
              <div className="mt-7">
                <h4 className="text-base font-bold text-[#0B4A2A] mb-3">Modo de preparo</h4>
                <ol className="space-y-3.5">
                  {selectedRecipe.steps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3.5 text-sm leading-relaxed text-neutral-700">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2E9B63] text-white text-xs font-bold shrink-0 mt-0.5 tabular-nums">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Ações do modal */}
              <div className="mt-8 pt-5 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={getWhatsAppUrl(
                    `Olá! Quero saber onde encontrar a Farinha de Trigo K&K para preparar a receita de ${selectedRecipe.title}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0A8A2A] hover:bg-[#087323] text-white text-sm font-bold transition-colors whitespace-nowrap shrink-0"
                >
                  Pedir Farinha K&amp;K no WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedRecipe(null)}
                  className="px-6 py-2.5 rounded-full border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
