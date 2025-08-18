import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import ImageGallery from "./components/ImageGallery";
import SponsorSection from "./components/Sponsors";

function App() {
    return (
        <div className="bg-black text-white font-sans">
            {/* Fixierter Header */}
            <Header />

            {/* Hauptinhalt mit Abstand zum Header */}
            <main className>
                <Hero />
                <ImageGallery />
                <SponsorSection />
                <About />
                <SocialLinks />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;