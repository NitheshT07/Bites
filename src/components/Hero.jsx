import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="MK Little Bites Premium Dining"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#111111]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl flex flex-col items-start gap-8">

                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass px-4 py-2 rounded-full flex items-center gap-2 border border-white/20"
                    >
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <span className="text-sm font-medium text-white">4.8/5 Rating by 90+ food lovers</span>
                    </motion.div>

                    {/* Main Content */}
                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
                        >
                            The Taste That <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-alt)]">
                                Brings People Together.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-300 max-w-2xl font-body leading-relaxed"
                        >
                            Thokkavadi's favorite spot for mouth-watering bites, premium ambience, and unforgettable celebrations.
                        </motion.p>
                    </div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
                    >
                        <a
                            href="#menu"
                            className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 shadow-[0_0_20px_rgba(255,90,54,0.3)] hover:shadow-[0_0_25px_rgba(255,90,54,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Explore Menu
                        </a>
                        <a
                            href="#location"
                            className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-white glass border border-white/20 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <MapPin className="w-4 h-4 mr-2" />
                            Get Directions
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
