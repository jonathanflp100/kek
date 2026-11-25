import { useState, type FormEvent } from 'react';
import { CheckCircle2, Share2, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from './SectionHeading';
import { FadeIn } from './FadeIn';

interface FormValues {
  name: string;
  whatsapp: string;
  email: string;
}

interface FormErrors {
  name?: string;
  whatsapp?: string;
  email?: string;
}

function formatBrazilianPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function CommunityNewsletter() {
  const [values, setValues] = useState<FormValues>({
    name: '',
    whatsapp: '',
    email: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (data.name.trim().length < 2) {
      nextErrors.name = 'Informe seu nome completo.';
    }
    const phoneDigits = data.whatsapp.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      nextErrors.whatsapp = 'Informe um WhatsApp válido com DDD.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email.trim())) {
      nextErrors.email = 'Informe um endereço de e-mail válido.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const storageKey = siteConfig.community.storageKey;
      const existingRaw = window.localStorage.getItem(storageKey);
      const existingList = existingRaw ? JSON.parse(existingRaw) : [];
      const nextList = Array.isArray(existingList) ? existingList : [];
      nextList.push({
        name: values.name.trim(),
        whatsapp: values.whatsapp.trim(),
        email: values.email.trim().toLowerCase(),
        createdAt: new Date().toISOString(),
      });
      window.localStorage.setItem(storageKey, JSON.stringify(nextList));
    } catch {
      // Continua fluxo de confirmação mesmo se o navegador restringir localStorage
    }

    setSubmitted(true);
    setValues({ name: '', whatsapp: '', email: '' });
  };

  const handleShare = async () => {
    const shareData = {
      title: `${siteConfig.brand.name} – ${siteConfig.brand.subtitle}`,
      text: 'Conheça a Indústria K&K Alimentos e entre para a comunidade de receitas com Farinha de Trigo K&K!',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareFeedback('Compartilhado com sucesso!');
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setShareFeedback('Link copiado para compartilhar!');
      }
    } catch {
      // Usuário cancelou o diálogo nativo de compartilhamento
      return;
    }

    window.setTimeout(() => setShareFeedback(null), 3000);
  };

  return (
    <section
      id="comunidade"
      className="pt-20 sm:pt-24 pb-10 bg-white"
      aria-labelledby="comunidade-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <div id="comunidade-heading">
            <SectionHeading
              prefix={siteConfig.community.titlePrefix}
              scriptWord={siteConfig.community.titleScript}
              align="center"
            />
          </div>

          <p className="mt-6 text-sm sm:text-base leading-relaxed text-neutral-600">
            {siteConfig.community.description}
          </p>

          <p className="mt-4 text-sm sm:text-base font-bold text-neutral-800">
            {siteConfig.community.highlightText}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-9">
          {submitted ? (
            <div
              role="status"
              className="rounded-2xl bg-[#FDFDF0] border-2 border-[#2E9B63] p-7 sm:p-8 text-center shadow-sm"
            >
              <CheckCircle2
                className="w-11 h-11 text-[#0A8A2A] mx-auto mb-3"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold text-[#0B4A2A]">
                {siteConfig.community.successTitle}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-neutral-700 leading-relaxed max-w-lg mx-auto">
                {siteConfig.community.successMessage}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 px-7 py-2.5 rounded-full bg-[#0A8A2A] hover:bg-[#087323] text-white text-sm font-bold transition-colors cursor-pointer"
              >
                Cadastrar outro contato
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4 max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="community-name"
                    className="block text-xs font-semibold text-neutral-700 mb-1.5"
                  >
                    Nome
                  </label>
                  <input
                    id="community-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Seu nome completo"
                    value={values.name}
                    onChange={(e) => {
                      setValues((prev) => ({ ...prev, name: e.target.value }));
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'community-name-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg bg-[#FDFDF0] border text-sm text-neutral-800 placeholder:text-neutral-400 transition-colors focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2E9B63]/30 ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-neutral-300 focus:border-[#2E9B63]'
                    }`}
                  />
                  {errors.name && (
                    <p
                      id="community-name-error"
                      className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="community-whatsapp"
                    className="block text-xs font-semibold text-neutral-700 mb-1.5"
                  >
                    WhatsApp
                  </label>
                  <input
                    id="community-whatsapp"
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(87) 9 9999-9999"
                    value={values.whatsapp}
                    onChange={(e) => {
                      const formatted = formatBrazilianPhone(e.target.value);
                      setValues((prev) => ({ ...prev, whatsapp: formatted }));
                      if (errors.whatsapp)
                        setErrors((prev) => ({ ...prev, whatsapp: undefined }));
                    }}
                    aria-invalid={Boolean(errors.whatsapp)}
                    aria-describedby={errors.whatsapp ? 'community-whatsapp-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg bg-[#FDFDF0] border text-sm text-neutral-800 placeholder:text-neutral-400 transition-colors focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2E9B63]/30 ${
                      errors.whatsapp
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-neutral-300 focus:border-[#2E9B63]'
                    }`}
                  />
                  {errors.whatsapp && (
                    <p
                      id="community-whatsapp-error"
                      className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      {errors.whatsapp}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="community-email"
                  className="block text-xs font-semibold text-neutral-700 mb-1.5"
                >
                  E-mail
                </label>
                <input
                  id="community-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="seuemail@exemplo.com.br"
                  value={values.email}
                  onChange={(e) => {
                    setValues((prev) => ({ ...prev, email: e.target.value }));
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'community-email-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg bg-[#FDFDF0] border text-sm text-neutral-800 placeholder:text-neutral-400 transition-colors focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2E9B63]/30 ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-neutral-300 focus:border-[#2E9B63]'
                  }`}
                />
                {errors.email && (
                  <p
                    id="community-email-error"
                    className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="pt-3 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto min-w-[210px] px-10 py-3.5 rounded-full bg-[#0A8A2A] hover:bg-[#087323] text-white text-sm sm:text-base font-bold tracking-wide shadow-md transition-all duration-150 hover:scale-[1.01] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A8A2A]"
                >
                  {siteConfig.community.submitLabel}
                </button>
              </div>
            </form>
          )}
        </FadeIn>
      </div>

      {/* Linha verde horizontal com ícone dourado de compartilhar no centro */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="relative flex items-center justify-center">
          <div className="w-full h-[2px] bg-[#2E9B63]" aria-hidden="true" />
          <button
            type="button"
            onClick={handleShare}
            aria-label="Compartilhar o site da Indústria K&K Alimentos"
            title="Compartilhar"
            className="absolute inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#2E9B63] text-[#F2B705] shadow-sm transition-transform duration-150 hover:scale-110 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B705]"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        {shareFeedback && (
          <p
            role="status"
            className="mt-4 text-center text-xs font-semibold text-[#1E8F3A]"
          >
            {shareFeedback}
          </p>
        )}
      </div>
    </section>
  );
}
