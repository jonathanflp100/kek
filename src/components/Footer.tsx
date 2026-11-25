import { Phone, MapPin, Mail } from 'lucide-react';
import { getWhatsAppUrl, siteConfig } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer id="contato" className="bg-[#0B4A2A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Esquerda: Logo circular */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <a
              href="#home"
              aria-label={`Voltar ao topo – ${siteConfig.brand.name}`}
              className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B705]"
            >
              <BrandLogo size="lg" className="transition-transform duration-200 hover:scale-105" />
            </a>
          </div>

          {/* Centro: Coluna Contato */}
          <div className="md:col-span-6 text-center md:text-left">
            <h2 className="font-script text-4xl font-bold text-white leading-none">
              {footer.contactTitle}
            </h2>
            <div
              className="mt-2.5 mb-5 h-[2px] w-28 bg-[#F2B705] mx-auto md:mx-0"
              aria-hidden="true"
            />

            <ul className="space-y-3 text-sm sm:text-[15px] text-white/90">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-[#F2B705] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F2B705] shrink-0" aria-hidden="true" />
                  <span className="tabular-nums font-medium">{footer.phone}</span>
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="w-4 h-4 text-[#F2B705] shrink-0 mt-1" aria-hidden="true" />
                <span>{footer.address}</span>
              </li>
              <li>
                <a
                  href={`mailto:${footer.email}`}
                  className="inline-flex items-center gap-3 hover:text-[#F2B705] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#F2B705] shrink-0" aria-hidden="true" />
                  <span>{footer.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direita: Ícones dourados Facebook, Instagram e YouTube */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end gap-4">
            <a
              href={footer.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Indústria K&K Alimentos"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-[#F2B705] text-[#F2B705] hover:text-[#0B4A2A] transition-all duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B705]"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M13.5 21v-8.2h2.75l.42-3.2H13.5V7.55c0-.93.26-1.56 1.59-1.56h1.7V3.13c-.3-.04-1.31-.13-2.49-.13-2.46 0-4.15 1.5-4.15 4.26v2.34H7.35v3.2h2.8V21h3.35Z" />
              </svg>
            </a>

            <a
              href={footer.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Indústria K&K Alimentos"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-[#F2B705] text-[#F2B705] hover:text-[#0B4A2A] transition-all duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B705]"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22a3.7 3.7 0 0 1-.9 1.38 3.7 3.7 0 0 1-1.38.9c-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.22C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.01-4.76.07-1.02.05-1.58.22-1.95.36-.49.19-.84.42-1.21.79-.37.37-.6.72-.79 1.21-.14.37-.31.93-.36 1.95-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.02.22 1.58.36 1.95.19.49.42.84.79 1.21.37.37.72.6 1.21.79.37.14.93.31 1.95.36 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.02-.05 1.58-.22 1.95-.36.49-.19.84-.42 1.21-.79.37-.37.6-.72.79-1.21.14-.37.31-.93.36-1.95.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.02-.22-1.58-.36-1.95a3.26 3.26 0 0 0-.79-1.21 3.26 3.26 0 0 0-1.21-.79c-.37-.14-.93-.31-1.95-.36-1.24-.06-1.61-.07-4.76-.07Zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9Zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3Zm5.2-3.15a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
              </svg>
            </a>

            <a
              href={footer.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube da Indústria K&K Alimentos"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-[#F2B705] text-[#F2B705] hover:text-[#0B4A2A] transition-all duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B705]"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.52A3.01 3.01 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3.01 3.01 0 0 0 2.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3.01 3.01 0 0 0 2.12-2.13A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.25 3.6-6.25 3.6Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferior de copyright (#04220F) */}
      <div className="bg-[#04220F] py-4 px-4 text-center">
        <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed">
          {footer.copyrightPrefix}{' '}
          <span className="font-semibold text-[#F472B6]">{footer.developerName}</span>
        </p>
      </div>
    </footer>
  );
}
