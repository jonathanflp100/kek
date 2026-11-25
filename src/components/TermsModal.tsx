import { useEffect } from 'react';
import { X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface TermsModalProps {
  open: boolean;
  onClose: () => void;
}

export function TermsModal({ open, onClose }: TermsModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white border-2 border-[#F2B705] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 mb-2" aria-hidden="true">
              <span className="inline-block h-[3px] w-6 rounded-full bg-[#1E8F3A]" />
              <span className="inline-block h-[3px] w-6 rounded-full bg-[#F2B705]" />
            </div>
            <h3 id="terms-modal-title" className="text-xl sm:text-2xl font-bold text-[#0B4A2A]">
              {siteConfig.terms.title}
            </h3>
            <p className="text-xs text-neutral-500 mt-1">{siteConfig.terms.updatedAt}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar Termos e Condições"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A8A2A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-5 text-sm sm:text-[15px] leading-relaxed text-neutral-700">
          {siteConfig.terms.sections.map((section) => (
            <div key={section.heading}>
              <h4 className="font-bold text-[#0B4A2A] mb-1.5">{section.heading}</h4>
              <p>{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-neutral-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-7 py-2.5 rounded-full bg-[#0A8A2A] hover:bg-[#087323] text-white text-sm font-bold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A8A2A]"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}
