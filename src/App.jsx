import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InstagramSlider from './components/InstagramSlider';
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
                <InstagramSlider />
                <About />
                <SocialLinks />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;