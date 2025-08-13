import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageGallery from './components/ImageGallery';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-black text-white font-sans">
            {/* Fixierter Header */}
            <Header />

            {/* Hauptinhalt mit Abstand zum Header */}
            <main className>
                <Hero />
                <ImageGallery />
                <About />
                <SocialLinks />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;