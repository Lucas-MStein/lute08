import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="text-center text-sm text-gray-500 py-10 border-t border-gray-700 mt-16">
            <div className="flex flex-col items-center gap-3">
                {/* Zeile 1 */}
                <div className="whitespace-nowrap">
                    &copy; {year} lute
                </div>

                {/* Zeile 2 */}
                <div className="flex items-center justify-center gap-4">
                    <a
                        href="https://versteckmich.de/lute08/impressum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 hover:underline"
                    >
                        Impressum
                    </a>

                    <span className="hidden sm:inline text-gray-600">|</span>

                    <a
                        href="https://versteckmich.de/lute08/datenschutz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 hover:underline"
                    >
                        Datenschutz
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;