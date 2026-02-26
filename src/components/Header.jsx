import React, { useEffect, useMemo, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/lutelogo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('#hero');
    const [lockActiveUntil, setLockActiveUntil] = useState(0);

    const links = useMemo(
        () => [
            { href: '#hero', label: 'Start' },
            { href: '#highlights', label: 'Highlights' },
            { href: '#about', label: 'Über mich' },
            { href: '#contact', label: 'Kontakt' },
        ],
        []
    );

    // Header-Style beim Scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Active Section Highlight (Desktop Pills)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {

                if (Date.now() < lockActiveUntil) return;

                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible?.target?.id) {
                    setActive(`#${visible.target.id}`);
                }
            },
            {
                rootMargin: '-40% 0px -55% 0px',
                threshold: [0.1, 0.2, 0.4, 0.6],
            }
        );

        const ids = links.map((l) => l.href.replace('#', ''));

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();

    }, [links, lockActiveUntil]);

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

    const handleNavClick = (href) => {
        setActive(href); // sofort richtig highlighten
        setMenuOpen(false);

        // Observer kurz pausieren (Smooth scroll dauert je nach Gerät)
        setLockActiveUntil(Date.now() + 800);
    };

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
                    onClick={handleNavClick}
                    aria-label="Zur Start-Sektion"
                    className="shrink-0"
                >
                    <img src={Logo} alt="lute Logo" className="h-10 w-auto md:h-12" loading="eager" />
                </a>

                {/* Desktop Nav (Pills) */}
                <ul className="hidden items-center gap-2 text-sm font-medium md:flex">
                    {links.map((l) => {
                        const isActive = active === l.href;
                        return (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    onClick={() => handleNavClick(l.href)}
                                    className={[
                                        'relative rounded-full px-4 py-2',
                                        'transition duration-200 motion-reduce:transition-none',
                                        'hover:bg-white/10 hover:text-white',
                                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
                                        isActive ? 'bg-white/15 text-white' : 'text-white/80',
                                    ].join(' ')}
                                >
                                    {l.label}
                                </a>
                            </li>
                        );
                    })}
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

            {/* Mobile Overlay (zeichnet sich selbst dunkel) */}
            <div
                className={[
                    'md:hidden fixed inset-0 z-[60] w-screen min-h-[100svh]',
                    'bg-black/80 backdrop-blur-sm',
                    'transition-opacity duration-200 ease-out motion-reduce:transition-none',
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
                ].join(' ')}
                aria-hidden={!menuOpen}
            >
                {/* Close Button oben rechts */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Menü schließen"
                    className="absolute right-5 top-5 z-[70] rounded-full p-2 text-white/90 hover:bg-white/10
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 motion-reduce:transition-none"
                >
                    <FaTimes className="text-2xl" />
                </button>

                {/* Panel */}
                <div
                    id="mobile-nav"
                    className={[
                        'relative z-[65] flex min-h-[100svh] flex-col items-center justify-center gap-8 text-xl font-semibold',
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
                            onClick={() => handleNavClick(l.href)}
                            style={{ transitionDelay: menuOpen ? `${idx * 40}ms` : '0ms' }}
                            className={[
                                'rounded-full px-6 py-3',
                                'transition-all duration-300 ease-out motion-reduce:transition-none',
                                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
                                'bg-white/5 hover:bg-white/10',
                                'text-white hover:text-pink-200',
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