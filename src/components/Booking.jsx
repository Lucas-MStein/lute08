import React, { useEffect, useRef, useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaCopy, FaCheck } from 'react-icons/fa';

const EMAIL = 'lute08.anfragen@gmail.com';

const SERVICES = [
    {
        icon: '🎬',
        title: 'Sponsored Content',
        desc: 'Native Integration in Comedy- und Reaction-Clips auf TikTok, YouTube und Instagram.',
    },
    {
        icon: '📢',
        title: 'Brand Deal',
        desc: 'Langfristige Kooperationen mit authentischem Creator-Content, der wirklich performt.',
    },
    {
        icon: '🎤',
        title: 'Live Events',
        desc: 'Auftritt, Moderation oder Creator-Collab für Events, Messen und Fan-Meetups.',
    },
    {
        icon: '💡',
        title: 'Content Strategy',
        desc: 'Beratung für Marken, die Social-Media-Content erstellen wollen, der wirklich zieht.',
    },
];

const Booking = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [copied, setCopied] = useState(false);
    const sectionRef = useRef(null);

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
            { threshold: 0.1, rootMargin: '-5% 0px' }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1400);
        } catch {
            const ta = document.createElement('textarea');
            ta.value = EMAIL;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1400);
        }
    };

    return (
        <section
            id="booking"
            ref={sectionRef}
            className={[
                'bg-bg py-24 border-t border-white/5',
                'transition-all duration-700 ease-out',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
        >
            {/* Anker-Alias für Bestands-Backlinks */}
            <span id="contact" className="block -mt-24 pt-24" aria-hidden="true" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-neon mb-3">
                        — Business & Kooperationen
                    </span>
                    <h2 className="font-display italic font-black leading-[0.92] tracking-tight text-ink text-[clamp(48px,6vw,96px)] m-0">
                        ZUSAMMEN
                        <br />
                        <span className="text-neon">WIRKEN.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* LEFT: Services */}
                    <div className="flex flex-col gap-8">
                        <p className="text-[17px] leading-relaxed text-mute m-0">
                            Du bist Brand, Agentur oder Eventveranstalter und willst mit lute zusammenarbeiten?
                            Hier ist der richtige Ort. Klar, fair und ohne lange E-Mail-Ketten.
                        </p>

                        <div className="flex flex-col gap-4">
                            {SERVICES.map((s) => (
                                <div
                                    key={s.title}
                                    className="bg-surface border border-white/[0.06] rounded-2xl px-6 py-5 flex gap-4 items-start transition-colors duration-200 hover:border-neon/30"
                                >
                                    <span className="text-2xl shrink-0">{s.icon}</span>
                                    <div>
                                        <div className="font-display font-extrabold text-ink text-lg tracking-wide mb-1">
                                            {s.title}
                                        </div>
                                        <div className="text-sm text-mute leading-relaxed">
                                            {s.desc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Kontakt-Karte */}
                    <div className="bg-surface border border-white/[0.08] rounded-3xl p-8 md:p-10 md:sticky md:top-28">
                        <div className="font-display italic font-black text-ink text-[28px] mb-2">
                            Anfrage senden
                        </div>
                        <p className="text-sm text-mute leading-relaxed mb-7 m-0">
                            Schreib direkt eine E-Mail mit deinem Anliegen — wir melden uns so schnell
                            wie möglich. Versprochen.
                        </p>

                        <div className="bg-bg/40 border border-white/[0.08] rounded-2xl p-5 mb-6">
                            <div className="flex items-center gap-2 text-mute text-xs font-semibold uppercase tracking-wider mb-2">
                                <MdEmail className="text-neon text-base" />
                                E-Mail
                            </div>
                            <a
                                href={`mailto:${EMAIL}`}
                                className="font-display font-extrabold text-ink text-[clamp(18px,2.4vw,24px)] break-all hover:text-neon transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neon rounded"
                            >
                                {EMAIL}
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href={`mailto:${EMAIL}?subject=Anfrage%20-%20Kooperation`}
                                className="inline-flex justify-center items-center gap-2 flex-1 bg-neon text-bg px-6 py-3.5 rounded-xl font-display font-black uppercase tracking-wider text-base transition-all duration-150 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                            >
                                <MdEmail className="text-lg" />
                                E-Mail schreiben
                            </a>
                            <button
                                type="button"
                                onClick={handleCopy}
                                className="inline-flex justify-center items-center gap-2 bg-transparent text-ink border border-white/15 px-6 py-3.5 rounded-xl font-display font-extrabold uppercase tracking-wider text-base transition-colors duration-200 hover:border-neon hover:text-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                                aria-live="polite"
                            >
                                {copied ? <FaCheck /> : <FaCopy />}
                                {copied ? 'Kopiert' : 'Kopieren'}
                            </button>
                        </div>

                        <p className="mt-8 text-xs text-mute/70 text-center">
                            Für Anfragen aller Art – Comedy, Reactions, Live, Brand.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
