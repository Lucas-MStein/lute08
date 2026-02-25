import React, { useEffect, useMemo, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/lutelogo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = useMemo(
        () => [
            { href: '#hero', label: 'Start' },
            { href: '#highlights', label: 'Highlights' },
            { href: '#about', label: 'Über mich' },
            { href: '#contact', label: 'Kontakt' },
        ],
        []
    );

    // Scroll-Style (statt Nav ein-/ausblenden)
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Body scroll lock + Escape zum Schließen
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };

        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', onKeyDown);
        } else {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [menuOpen]);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <header
            className={[
                'fixed inset-x-0 top-0 z-50 text-white',
                'transition-all duration-300 motion-reduce:transition-none',
                scrolled
                    ? 'bg-black/70 backdrop-blur-md shadow-lg shadow-black/20'
                    : 'bg-black/40 backdrop-blur-sm',
            ].join(' ')}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={handleLinkClick}
                    aria-label="Zur Start-Sektion"
                    className="shrink-0"
                >
                    <img
                        src={Logo}
                        alt="lute Logo"
                        className="h-10 w-auto md:h-12"
                        loading="eager"
                    />
                </a>

                {/* Desktop Nav */}
                <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="rounded transition-colors duration-200 hover:text-pink-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:transition-none"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center rounded-full p-2 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 motion-reduce:transition-none"
                    aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                    onClick={() => setMenuOpen((v) => !v)}
                >
          <span
              className={[
                  'transition-transform duration-200 motion-reduce:transition-none',
                  menuOpen ? 'rotate-90 scale-105' : 'rotate-0 scale-100',
              ].join(' ')}
          >
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </span>
                </button>
            </nav>

            {/* Mobile Overlay */}
            <div
                className={[
                    'md:hidden fixed inset-0 z-40',
                    'transition-opacity duration-200 ease-out motion-reduce:transition-none',
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
                ].join(' ')}
                aria-hidden={!menuOpen}
            >
                {/* Backdrop (click to close) */}
                <div
                    className={[
                        'absolute inset-0 bg-black/80 backdrop-blur-sm',
                        'transition-opacity duration-200 ease-out motion-reduce:transition-none',
                        menuOpen ? 'opacity-100' : 'opacity-0',
                    ].join(' ')}
                    onClick={() => setMenuOpen(false)}
                />

                {/* Panel */}
                <div
                    id="mobile-nav"
                    className={[
                        'relative z-50 flex h-full flex-col items-center justify-center gap-8 text-xl font-semibold',
                        'transition-all duration-300 ease-out motion-reduce:transition-none',
                        menuOpen
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-3 scale-[0.98]',
                    ].join(' ')}
                >
                    {links.map((l, idx) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={handleLinkClick}
                            style={{ transitionDelay: menuOpen ? `${idx * 40}ms` : '0ms' }}
                            className={[
                                'rounded',
                                'transition-all duration-300 ease-out motion-reduce:transition-none',
                                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
                                'hover:text-pink-400',
                                'focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400',
                            ].join(' ')}
                        >
                            {l.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;