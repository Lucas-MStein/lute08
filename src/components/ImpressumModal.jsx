import React from 'react';

const ImpressumModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            {/* Modal Card */}
            <div className="relative bg-[#0b0f1a] text-white rounded-xl shadow-2xl p-6 max-w-xl w-full mx-4">
                {/* Schließen-Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-2xl text-white hover:text-sky-400"
                    aria-label="Schließen"
                >
                    &times;
                </button>

                {/* Modal-Inhalt */}
                <h2 className="text-2xl font-bold mb-4 text-sky-400 text-center">Impressum</h2>
                <p className="mb-2 text-center">Angaben gemäß § 5 TMG:</p>
                <p className="mb-2 text-center">
                    Max Mustermann<br />
                    Musterstraße 1<br />
                    12345 Berlin
                </p>
                <p className="mb-2 text-center">
                    E-Mail:{' '}
                    <a
                        href="mailto:leobusinessrequests@gmail.com"
                        className="text-pink-400 hover:underline"
                    >
                        leobusinessrequests@gmail.com
                    </a>
                </p>
                <p className="text-sm italic text-center mt-4">
                    Dieses Impressum gilt auch für alle Social-Media-Profile.
                </p>
            </div>
        </div>
    );
};

export default ImpressumModal;