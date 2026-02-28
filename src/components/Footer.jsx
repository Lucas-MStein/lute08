import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0b0f1a] border-t border-white/5 mt-16">
            <div className="max-w-6xl mx-auto px-6 py-12 text-center">

                {/* Branding */}
                <p className="text-sm text-white/50">
                    &copy; {year} <span className="text-white/80 font-medium">lute</span>
                </p>

                {/* Links */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                    <a
                        href="https://versteckmich.de/lute08/impressum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 hover:text-sky-300 transition-colors
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                    >
                        Impressum
                    </a>

                    <span className="hidden sm:inline text-white/20">•</span>

                    <a
                        href="https://versteckmich.de/lute08/datenschutz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 hover:text-sky-300 transition-colors
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                    >
                        Datenschutz
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;