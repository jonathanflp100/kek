import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig, type NavItem } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  activeNav: string;
  onSelectNav: (id: string) => void;
  onOpenTerms: () => void;
}

export function Header({ activeNav, onSelectNav, onOpenTerms }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (item: NavItem, event: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.action === 'terms') {
      event.preventDefault();
      setMobileMenuOpen(false);
      onOpenTerms();
      return;
    }
    onSelectNav(item.id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled || mobileMenuOpen
          ? 'bg-black/92 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-gradient-to-b from-black/80 via-black/45 to-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-[72px] sm:h-20">
          {/* Logo circular à esquerda */}
          <a
            href="#home"
            onClick={() => {
              onSelectNav('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B705]"
            aria-label={`Ir para o início – ${siteConfig.brand.name}`}
          >
            <BrandLogo size="sm" className="sm:w-14 sm:h-14 transition-transform duration-200 hover:scale-105" />
          </a>

          {/* Navegação desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 lg:gap-9"
          >
            {siteConfig.navigation.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`relative py-2 text-sm font-semibold tracking-wide whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B705] rounded-sm ${
                    isActive
                      ? 'text-white'
                      : 'text-white/85 hover:text-[#F2B705]'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 right-0 bottom-0 h-[2.5px] rounded-full bg-[#F2B705] transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Botão hambúrguer no celular */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-white hover:text-[#F2B705] hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B705]"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação mobile"
          className="md:hidden bg-black/95 border-t border-white/10 px-4 py-4"
        >
          <ul className="flex flex-col gap-1">
            {siteConfig.navigation.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-white/10 text-[#F2B705]'
                        : 'text-white/90 hover:bg-white/5 hover:text-[#F2B705]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-[2.5px] w-6 rounded-full bg-[#F2B705]" aria-hidden="true" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
