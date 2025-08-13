import React, { useState } from 'react';
import ImpressumModal from './ImpressumModal';

const Footer = () => {
    const [isImpressumOpen, setIsImpressumOpen] = useState(false);

    return (
        <footer className="text-center text-sm text-gray-500 py-10 border-t border-gray-700 mt-16">
            <p>
                &copy; {new Date().getFullYear()} freshprinceofberlin |{' '}
                <button
                    onClick={() => setIsImpressumOpen(true)}
                    className="text-sky-400 hover:underline focus:outline-none"
                >
                    Impressum
                </button>
            </p>

            {/* Impressum-Modal */}
            <ImpressumModal
                isOpen={isImpressumOpen}
                onClose={() => setIsImpressumOpen(false)}
            />
        </footer>
    );
};

export default Footer;