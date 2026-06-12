import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageGallery from './components/ImageGallery';
import About from './components/About';
import Community from './components/Community';
import Booking from './components/Booking';
import Footer from './components/Footer';
// HOLY-Sponsoren-Sektion: aktuell deaktiviert. Reaktivieren durch Import + Einbindung unten.
// import SponsorSection from './components/Sponsors';

function App() {
    return (
        <div className="min-h-screen bg-bg text-ink font-sans">
            <Header />

            <main>
                <Hero />
                <ImageGallery />
                <About />
                <Community />
                {/* <SponsorSection /> */}
                <Booking />
            </main>

            <Footer />
        </div>
    );
}

export default App;
