import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';
import SponsorSection from './components/Sponsors';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white font-sans">

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="pt-24">
                <div className="max-w-6xl mx-auto px-6 space-y-24">
                    <Hero />
                    <ImageGallery />
                    <About />
                    <SocialLinks />
                </div>
            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
}

export default App;