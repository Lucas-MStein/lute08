import React, { useEffect, useRef, useState } from 'react';

/**
 * Community / Social-Proof Sektion.
 *
 * TODO(stats): echte Followerzahlen pflegen.
 * Solange die Zahlen nicht final bestätigt sind, bleibt der `value` auf '—'.
 * Sobald die Zahlen stehen: einfach `value` setzen (z. B. '500K+').
 */
const STATS = [
    {
        platform: 'TikTok',
        handle: '@lute_08',
        value: '25K+',
        label: 'TikTok Follower',
        color: '#FF2066',
    },
    {
        platform: 'YouTube',
        handle: '@lute_08',
        value: '50+',
        label: 'YouTube Abos',
        color: '#FF0000',
    },
    {
        platform: 'Instagram',
        handle: '@lute.08',
        value: '15K+',
        label: 'Instagram Follower',
        color: '#E1306C',
    },
    {
        platform: 'Gesamt',
        handle: 'plattformübergreifend',
        value: '∞',
        label: 'Views gesamt',
        color: '#D4FF00',
    },
];

/**
 * Testimonials — Platzhalter-Inhalte.
 *
 * TODO(testimonials): durch echte Community-Kommentare ersetzen.
 * Die Sektion ist klar als "Beispiele" markiert, damit niemand denkt,
 * das wären echte Quotes echter Follower.
 */
const TESTIMONIALS = [
    { text: 'bro ich hab meinen drink verschüttet weil ich so lachen musste 💀', user: '@swish41' },
    { text: 'das einzige was mich morgens aus dem bett bringt ist lute content', user: '@LeBron James' },
    { text: 'reaction war so unhinged ich hab das mehrfach geschaut', user: '@Olaf Scholz' },
    { text: 'lute trifft jeden trend bevor er viral geht', user: '@Martin Luther King' },
    { text: 'ich will ein Kind von dir', user: '@Tate McRae' },
    { text: 'folge seit tag 1 und es wird immer besser', user: '@Rihanna' },
];

const Community = () => {
    const [isVisible, setIsVisible] = useState(false);
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

    return (
        <section
            id="community"
            ref={sectionRef}
            className={[
                'bg-bg py-24 border-t border-white/5 overflow-hidden',
                'transition-all duration-700 ease-out',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-neon mb-3">
                        — Community & Zahlen
                    </span>
                    <h2 className="font-display italic font-black leading-[0.92] tracking-tight text-ink text-[clamp(48px,7vw,96px)] m-0">
                        DIE ZAHLEN
                        <br />
                        <span className="text-neon">LÜGEN NICHT.</span>
                    </h2>
                </div>

                {/* Stat-Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {STATS.map((s) => (
                        <div
                            key={s.label}
                            className="relative bg-surface border border-white/[0.06] rounded-2xl p-7 flex flex-col gap-2 overflow-hidden"
                        >
                            <div
                                className="absolute top-0 left-6 right-6 h-0.5 rounded-b"
                                style={{ background: s.color }}
                            />
                            <div
                                className="font-display italic font-black leading-none tracking-tight text-[clamp(36px,4vw,56px)]"
                                style={{ color: s.color }}
                            >
                                {s.value}
                            </div>
                            <div className="text-[15px] font-semibold text-ink">{s.label}</div>
                            <div className="text-xs text-mute/80 tracking-wide">{s.handle}</div>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div>
                    <div className="mb-6 flex items-center gap-4">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mute">
                            Was die Community sagt
                        </span>
                        <div className="flex-1 h-px bg-white/5" />
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar snap-x snap-mandatory">
                        {TESTIMONIALS.map((t, i) => (
                            <div
                                key={i}
                                className="snap-start shrink-0 w-[260px] bg-surface border border-white/[0.06] rounded-2xl p-5 flex flex-col gap-3"
                            >
                                <div className="flex gap-0.5 text-neon text-sm" aria-hidden="true">
                                    ★★★★★
                                </div>
                                <p className="text-sm text-ink/80 leading-relaxed m-0 flex-1">
                                    {t.text}
                                </p>
                                <span className="text-xs text-mute font-semibold">{t.user}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
