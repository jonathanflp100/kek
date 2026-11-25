import { getWhatsAppUrl } from '../config/siteConfig';

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Indústria K&K Alimentos pelo WhatsApp"
      title="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-5 z-40 group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-105 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2B705]"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
        aria-hidden="true"
      >
        <path d="M16.01 3.2c-7.06 0-12.8 5.73-12.8 12.79 0 2.26.59 4.46 1.71 6.4L3.1 29l6.79-1.78a12.76 12.76 0 0 0 6.12 1.56h.01c7.05 0 12.79-5.74 12.79-12.79 0-3.42-1.33-6.63-3.75-9.05A12.72 12.72 0 0 0 16.01 3.2Zm0 23.42h-.01a10.6 10.6 0 0 1-5.41-1.48l-.39-.23-4.03 1.06 1.08-3.93-.25-.4a10.56 10.56 0 0 1-1.63-5.65c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.51 3.12a10.55 10.55 0 0 1 3.11 7.52c0 5.86-4.77 10.62-10.62 10.62Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.31.16.21 2.26 3.45 5.47 4.83.76.33 1.36.53 1.82.68.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
