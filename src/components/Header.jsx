import React, { useEffect, useMemo, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('#hero');
    const [lockActiveUntil, setLockActiveUntil] = useState(0);

    const links = useMemo(
        () => [
            { href: '#clips', label: 'Highlights' },
            { href: '#about', label: 'Über' },
            { href: '#community', label: 'Community' },
            { href: '#booking', label: 'Booking' },
        ],
        []
    );

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

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
            { rootMargin: '-40% 0px -55% 0px', threshold: [0.1, 0.2, 0.4, 0.6] }
        );

        const ids = links.map((l) => l.href.replace('#', ''));
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [links, lockActiveUntil]);

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
        setActive(href);
        setMenuOpen(false);
        setLockActiveUntil(Date.now() + 800);
    };

    return (
        <header
            className={[
                'fixed inset-x-0 top-0 z-50 text-ink',
                'transition-all duration-300 motion-reduce:transition-none',
                scrolled
                    ? 'bg-bg/90 backdrop-blur-md border-b border-white/[0.06]'
                    : 'bg-transparent border-b border-transparent',
            ].join(' ')}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 h-[68px]">
                {/* Wordmark */}
                <a
                    href="#hero"
                    onClick={() => handleNavClick('#hero')}
                    aria-label="lute – zur Startseite"
                    className="font-display italic font-black text-neon text-3xl leading-none tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-neon rounded"
                >
                    lute
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-10">
                    {links.map((l) => {
                        const isActive = active === l.href;
                        return (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    onClick={() => handleNavClick(l.href)}
                                    className={[
                                        'text-xs font-semibold uppercase tracking-[0.12em]',
                                        'transition-colors duration-200 motion-reduce:transition-none',
                                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-neon rounded',
                                        isActive ? 'text-ink' : 'text-mute hover:text-ink',
                                    ].join(' ')}
                                >
                                    {l.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop CTA */}
                <a
                    href="#booking"
                    onClick={() => handleNavClick('#booking')}
                    className="hidden md:inline-flex font-display font-black uppercase tracking-wider text-sm bg-neon text-bg px-5 py-2.5 rounded-lg transition-transform duration-150 hover:-translate-y-0.5 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                    Kontakt
                </a>

                {/* Mobile Toggle */}
                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-ink transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon motion-reduce:transition-none"
                    aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>
            </nav>

            {/* Mobile Overlay */}
            <div
                className={[
                    'md:hidden fixed inset-0 z-[60] w-screen min-h-[100svh]',
                    'bg-bg/95 backdrop-blur-md',
                    'transition-opacity duration-200 ease-out motion-reduce:transition-none',
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
                ].join(' ')}
                aria-hidden={!menuOpen}
            >
                <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Menü schließen"
                    className="absolute right-5 top-5 z-[70] rounded-full p-2 text-ink hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon motion-reduce:transition-none"
                >
                    <FaTimes className="text-2xl" />
                </button>

                <div
                    id="mobile-nav"
                    className={[
                        'relative z-[65] flex min-h-[100svh] flex-col items-center justify-center gap-6 px-6',
                        'transition-all duration-300 ease-out motion-reduce:transition-none',
                        menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
                    ].join(' ')}
                >
                    {links.map((l, idx) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => handleNavClick(l.href)}
                            style={{ transitionDelay: menuOpen ? `${idx * 40}ms` : '0ms' }}
                            className={[
                                'font-display italic font-black text-4xl tracking-tight',
                                'transition-all duration-300 ease-out motion-reduce:transition-none',
                                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
                                'text-ink hover:text-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-neon rounded',
                            ].join(' ')}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#booking"
                        onClick={() => handleNavClick('#booking')}
                        className="mt-4 inline-flex font-display font-black uppercase tracking-wider text-lg bg-neon text-bg px-7 py-3.5 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    >
                        Kontakt
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
