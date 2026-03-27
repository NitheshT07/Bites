import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import QualityPromise from './components/QualityPromise';
import Gallery from './components/Gallery';
import Celebrations from './components/Celebrations';
import OrderSteps from './components/OrderSteps';
import FAQ from './components/FAQ';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
    return (
        <div className="bg-[var(--color-primary-base)] min-h-screen text-[var(--color-text-light)] selection:bg-[var(--color-accent)] selection:text-white flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <Features />
                <OrderSteps />
                <QualityPromise />
                <Menu />
                <Celebrations />
                <Gallery />
                <FAQ />
                <Testimonials />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;
