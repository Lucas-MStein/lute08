import React, { useEffect, useRef, useState } from 'react';
import { MdEmail } from 'react-icons/md';

const EMAIL = 'lute08.anfragen@gmail.com';

const SocialLinks = () => {
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
            { threshold: 0.2, rootMargin: '-10% 0px' }
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
            // Fallback: falls Clipboard API blockiert ist
            const textarea = document.createElement('textarea');
            textarea.value = EMAIL;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1400);
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className={[
                'bg-[#0b0f1a] text-white py-16 border-t border-white/5',
                'transition-all duration-700 ease-out',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
        >
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-sky-500">
                    Kontakt & Kollaborationen
                </h2>

                <p className="mt-4 text-base md:text-lg text-white/75 max-w-prose mx-auto">
                    Für geschäftliche Anfragen, Kooperationen oder Pressekontakte schreib gerne eine E-Mail.
                </p>

                {/* Contact Card */}
                <div className="mt-10 mx-auto max-w-xl rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-xl shadow-black/20 p-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <div className="inline-flex items-center gap-2 text-white/90">
                            <MdEmail className="text-pink-400 text-2xl" />
                            <span className="font-medium">E-Mail:</span>
                        </div>

                        <a
                            href={`mailto:${EMAIL}`}
                            className="text-pink-300 hover:text-pink-200 underline-offset-4 hover:underline transition-colors
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded"
                        >
                            {EMAIL}
                        </a>
                    </div>

                    <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href={`mailto:${EMAIL}`}
                            className="inline-flex justify-center rounded-full bg-pink-500/90 px-6 py-3 text-sm font-semibold text-white
                         hover:bg-pink-500 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                        >
                            E-Mail schreiben
                        </a>

                        <button
                            type="button"
                            onClick={handleCopy}
                            className="inline-flex justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white
                         hover:bg-white/15 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        >
                            {copied ? 'Kopiert ✓' : 'Adresse kopieren'}
                        </button>
                    </div>
                </div>

                <p className="mt-10 text-sm text-white/70">
                    Vielen Dank für deinen Besuch ✨
                </p>
            </div>
        </section>
    );
};

export default SocialLinks;