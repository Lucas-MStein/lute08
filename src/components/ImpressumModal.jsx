import React from 'react';

const ImpressumModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-start justify-center pt-16 px-4">
            <div className="bg-[#0b0f1a] text-white p-6 rounded-xl max-w-xl w-full shadow-2xl text-center relative">
                {/* Schließen */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-white text-2xl hover:text-pink-400 transition"
                    aria-label="Close"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold text-sky-500 mb-4">Impressum</h2>
                <p className="text-sm text-gray-300 mb-6">Rechtssichere Angaben gemäß § 5 DDG</p>

                <div className="text-left text-sm space-y-4">
                    <div>
                        <h3 className="font-semibold text-white">Angaben gemäß § 5 DDG</h3>
                        <p>Luca Fabien Tenner<br />
                            Künstlername: <span className="italic">lute_08</span></p>
                        <p className="mt-2">
                            c/o SourceArt<br />
                            Fritz-Thiele-Straße 3<br />
                            28279 Bremen<br />
                            Deutschland
                        </p>
                        <p className="mt-2">E-Mail: <a href="mailto:lute08.anfragen@gmail.com" className="text-pink-400 hover:underline">lute08.anfragen@gmail.com</a></p>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                        <h3 className="font-semibold text-white">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                        <p>Luca Fabien Tenner<br />
                            c/o SourceArt<br />
                            Fritz-Thiele-Straße 3<br />
                            28279 Bremen<br />
                            Deutschland</p>
                    </div>

                    <p className="italic text-gray-400 pt-4">Dieses Impressum gilt auch für alle Social-Media-Profile.</p>
                </div>
            </div>
        </div>
    );
};

export default ImpressumModal;