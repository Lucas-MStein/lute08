import React from 'react';
import {
    FaInstagram,
    FaTiktok,
    FaYoutube,
    FaTwitch,
    FaDiscord,
} from 'react-icons/fa';

const SOCIALS = [
    { name: 'TikTok', href: 'https://www.tiktok.com/@lute_08', Icon: FaTiktok },
    { name: 'YouTube', href: 'https://www.youtube.com/@lute_08', Icon: FaYoutube },
    { name: 'Instagram', href: 'https://www.instagram.com/lute.08/', Icon: FaInstagram },
    { name: 'Twitch', href: 'https://www.twitch.tv/lute_08', Icon: FaTwitch },
    { name: 'Discord', href: 'https://discord.gg/a2McB9g3qg', Icon: FaDiscord },
];

const NAV = [
    { label: 'Highlights', href: '#clips' },
    { label: 'Über', href: '#about' },
    { label: 'Community', href: '#community' },
    { label: 'Kontakt', href: '#booking' },
];

const LEGAL = [
    { label: 'Impressum', href: 'https://versteckmich.de/lute08/impressum' },
    { label: 'Datenschutz', href: 'https://versteckmich.de/lute08/datenschutz' },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-bg border-t border-white/5 pt-16 pb-10">
            <div className="max-w-6xl mx-auto px-6">
                {/* Top */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col gap-3">
                        <span className="font-display italic font-black text-neon text-5xl leading-none tracking-tight">
                            lute
                        </span>
                        <span className="text-[13px] tracking-wide text-mute/70">
                            Comedy · Reactions · Clips
                        </span>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-3">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mute/70">
                            Folge lute
                        </span>
                        <div className="flex flex-wrap gap-4">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${s.name} öffnen`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-mute hover:text-neon transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neon rounded"
                                >
                                    <s.Icon className="text-base" />
                                    {s.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav */}
                    <div className="flex flex-col gap-3">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mute/70">
                            Navigation
                        </span>
                        <div className="flex flex-col gap-2">
                            {NAV.map((l) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    className="text-sm text-mute hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neon rounded"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">
                    <span className="text-[13px] text-mute/60">
                        © {year} <span className="text-ink/80 font-medium">lute</span> — Alle Rechte vorbehalten.
                    </span>

                    <div className="flex gap-6">
                        {LEGAL.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[13px] text-mute/60 hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neon rounded"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
