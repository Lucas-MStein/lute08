import React, { useState } from 'react';
import ImpressumModal from './ImpressumModal';
import DatenschutzModal from './DatenschutzModal';

const Footer = () => {
    const [isImpressumOpen, setIsImpressumOpen] = useState(false);
    const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);

    const year = new Date().getFullYear();

    return (
        <footer className="text-center text-sm text-gray-500 py-10 border-t border-gray-700 mt-16">
            <div className="flex flex-col items-center gap-3">
                {/* Zeile 1 (mobil immer alleine) */}
                <div className="whitespace-nowrap">
                    &copy; {year} lute
                </div>

                {/* Zeile 2 (Links) – ab sm in eine Reihe mit Pipes */}
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={() => setIsImpressumOpen(true)}
                        className="text-sky-400 hover:underline focus:outline-none"
                    >
                        Impressum
                    </button>

                    <span className="hidden sm:inline text-gray-600">|</span>

                    <button
                        onClick={() => setIsDatenschutzOpen(true)}
                        className="text-sky-400 hover:underline focus:outline-none"
                    >
                        Datenschutz
                    </button>
                </div>
            </div>

            {/* Modals */}
            <ImpressumModal
                isOpen={isImpressumOpen}
                onClose={() => setIsImpressumOpen(false)}
            />

            <DatenschutzModal
                isOpen={isDatenschutzOpen}
                onClose={() => setIsDatenschutzOpen(false)}
            />
        </footer>
    );
};

export default Footer;