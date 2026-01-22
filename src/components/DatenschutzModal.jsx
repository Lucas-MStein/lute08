import React from 'react';

const DatenschutzModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

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

                <h2 className="text-2xl font-bold text-sky-500 mb-4">
                    Datenschutzerklärung
                </h2>

                <div className="text-left text-sm space-y-4">
                    <div>
                        <h3 className="font-semibold text-white">
                            Verantwortlicher im Sinne der DSGVO
                        </h3>
                        <p>
                            Luca Fabien Tenner<br />
                            Künstlername: <span className="italic">lute</span>
                        </p>
                        <p className="mt-2">
                            E-Mail:{' '}
                            <a
                                href="mailto:lute08.anfragen@gmail.com"
                                className="text-pink-400 hover:underline"
                            >
                                lute08.anfragen@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                        <h3 className="font-semibold text-white">
                            Hosting
                        </h3>
                        <p>
                            Diese Website wird bei <strong>Vercel Inc.</strong> gehostet.
                            Beim Aufruf der Website werden durch Vercel automatisch
                            Server-Logfiles (z. B. IP-Adresse, Browsertyp, Zeitpunkt
                            des Zugriffs) erhoben und gespeichert, um den sicheren
                            Betrieb der Website zu gewährleisten.
                        </p>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                        <h3 className="font-semibold text-white">
                            Cookies & Tracking
                        </h3>
                        <p>
                            Diese Website verwendet keine Cookies zu Analyse- oder
                            Marketingzwecken. Es findet kein Tracking des
                            Nutzerverhaltens statt.
                        </p>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                        <h3 className="font-semibold text-white">
                            Rechte der betroffenen Person
                        </h3>
                        <p>
                            Du hast jederzeit das Recht auf Auskunft über die zu deiner
                            Person gespeicherten Daten, deren Herkunft und Empfänger
                            sowie den Zweck der Datenverarbeitung. Zudem hast du ein
                            Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                        </p>
                    </div>

                    <p className="italic text-gray-400 pt-4">
                        Bei Fragen zum Datenschutz kannst du dich jederzeit per E-Mail
                        an mich wenden.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DatenschutzModal;