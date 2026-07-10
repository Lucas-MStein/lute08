import React, { useEffect, useRef, useState } from 'react';
import {
    FaInstagram,
    FaTiktok,
    FaYoutube,
    FaTwitch,
    FaDiscord,
    FaPlay,
} from 'react-icons/fa';
import { HiOutlineTrendingUp } from 'react-icons/hi';
import HeroImage from '../assets/lute1.webp';

const SOCIALS = [
    {
        label: 'TikTok',
        handle: '@lute_08',
        href: 'https://www.tiktok.com/@lute_08',
        Icon: FaTiktok,
        color: '#FF2066',
    },
    {
        label: 'YouTube',
        handle: '@lute_08',
        href: 'https://www.youtube.com/@lute_08',
        Icon: FaYoutube,
        color: '#FF0000',
    },
    {
        label: 'Instagram',
        handle: '@lute.08',
        href: 'https://www.instagram.com/lute.08/',
        Icon: FaInstagram,
        color: '#E1306C',
    },
    {
        label: 'Twitch',
        handle: 'lute_08',
        href: 'https://www.twitch.tv/lute_08',
        Icon: FaTwitch,
        color: '#9146FF',
    },
    {
        label: 'Discord',
        handle: 'Server',
        href: 'https://discord.gg/a2McB9g3qg',
        Icon: FaDiscord,
        color: '#5865F2',
    },
];

const Hero = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: '-10% 0px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="hero"
            className="relative w-full min-h-[100svh] overflow-hidden bg-bg flex items-center"
        >
            {/* Background layers */}
            <div className="absolute inset-0 bg-glow pointer-events-none" />
            <div className="absolute inset-0 bg-grid pointer-events-none" />

            <div
                ref={sectionRef}
                className={[
                    'relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-36',
                    'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center',
                    'transition-all duration-1000 ease-out',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                ].join(' ')}
            >
                {/* LEFT: Text */}
                <div className="flex flex-col gap-7">
                    {/* Headline */}
                    <h1 className="font-display italic font-black text-ink leading-[0.92] tracking-tight text-[clamp(64px,10vw,130px)] m-0">
                        DER
                        <br />
                        <span className="text-neon">CONTENT</span>
                        <br />
                        <span className="text-outline">DEN DU</span>
                        <br />
                        BRAUCHST.
                    </h1>

                    {/* Subline */}
                    <p className="max-w-md text-[17px] leading-relaxed text-mute">
                        Comedy, harte Reactions, krasse Clips — lute liefert Content, der bleibt.
                        Kein Cringe, kein Filler, nur echte Unterhaltung.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3.5">
                        <a
                            href="#clips"
                            className="inline-flex items-center gap-2.5 bg-neon text-bg px-7 py-4 rounded-xl font-display font-black uppercase tracking-wider text-base transition-all duration-150 hover:-translate-y-0.5 hover:shadow-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                        >
                            <FaPlay className="text-sm" />
                            Highlights anschauen
                        </a>
                        <a
                            href="https://www.tiktok.com/@lute_08"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-transparent text-ink border border-white/15 px-7 py-4 rounded-xl font-display font-extrabold uppercase tracking-wider text-base transition-colors duration-200 hover:border-neon hover:text-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                        >
                            Folgen
                        </a>
                    </div>

                    {/* Social pills */}
                    <div className="flex flex-wrap lg:flex-nowrap gap-2 mt-1">
                        {SOCIALS.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${s.label} öffnen`}
                                style={{ '--social-color': s.color }}
                                className="group inline-flex items-center gap-2 lg:gap-1.5 bg-surface border border-white/[0.08] text-mute px-3.5 py-2 lg:px-3 lg:py-1.5 rounded-full text-[13px] lg:text-xs font-medium whitespace-nowrap transition-colors duration-200 hover:text-[color:var(--social-color)] hover:bg-[color:var(--social-color)]/10 hover:border-[color:var(--social-color)]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--social-color)]"
                            >
                                <s.Icon className="text-base lg:text-sm" />
                                <span>{s.handle}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Visual */}
                <div className="relative hidden lg:flex justify-center">
                    {/* Glow */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(212,255,0,0.2) 0%, transparent 70%)',
                            filter: 'blur(40px)',
                        }}
                    />

                    {/* Image frame */}
                    <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden border border-neon/20">
                        <img
                            src={HeroImage}
                            alt="lute – Comedy, Reactions & Clips"
                            loading="eager"
                            fetchpriority="high"
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-bg to-transparent" />

                        <div className="absolute inset-x-6 bottom-6 flex flex-col gap-1">
                            <span className="font-display italic font-black text-neon text-[42px] leading-none">
                                lute
                            </span>
                            <span className="text-[13px] uppercase tracking-[0.08em] text-ink/60">
                                Comedy · Reactions · Clips
                            </span>
                        </div>
                    </div>

                    {/* Stat floater (top right) — Platzhalter-Werte */}
                    {/* TODO(stats): echte TikTok-Followerzahl eintragen */}
                    <div className="absolute -right-2 top-8 bg-surface border border-white/10 rounded-2xl px-4 py-3.5 backdrop-blur-sm">
                        <div className="font-display italic font-black text-neon text-2xl leading-none">
                            25K+
                        </div>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.08em] text-mute">
                            TikTok Follower
                        </div>
                    </div>

                    {/* Views floater (bottom right) */}
                    {/* TODO(stats): gesamte Views eintragen */}
                    <div className="absolute -right-5 bottom-24 bg-hot/[0.12] border border-hot/30 rounded-xl px-3.5 py-2.5 flex items-center gap-2">
                        <span className="text-base">🔥</span>
                        <div>
                            <div className="font-display italic font-black text-hot text-base leading-tight">
                                ∞ Views
                            </div>
                            <div className="text-[11px] text-mute">gesamt</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
                <span className="text-[11px] uppercase tracking-[0.12em] text-ink">Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-ink/50 to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
