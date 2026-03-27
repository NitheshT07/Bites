import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Wind, Award } from 'lucide-react';

const QualityPromise = () => {
    const promises = [
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "100% Sanitized",
            description: "Safety is our priority. Every corner of our kitchen and dining area is sanitized multiple times daily."
        },
        {
            icon: <Leaf className="w-6 h-6" />,
            title: "Fresh Ingredients",
            description: "No frozen shortcuts. We source our produce and dairy fresh every morning for authentic taste."
        },
        {
            icon: <Wind className="w-6 h-6" />,
            title: "Odor-Free Dining",
            description: "Advanced ventilation systems ensure a fresh environment, perfect for long student hangouts."
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Student's First Choice",
            description: "Providing quality, affordable, and delicious meals for the KSR college community since day one."
        }
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
                            The MK Quality <br />
                            <span className="text-[var(--color-accent)]">Promise.</span>
                        </h2>
                        <p className="text-gray-400 font-body text-lg mb-12 leading-relaxed">
                            At MK Little Bites, we believe that great taste should never come at the cost of hygiene.
                            We've built a space that's as clean as it is delicious, specifically designed for students
                            and families who value quality.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {promises.map((p, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="bg-[var(--color-accent)]/10 p-3 rounded-xl h-fit">
                                        <div className="text-[var(--color-accent)]">{p.icon}</div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2">{p.title}</h4>
                                        <p className="text-gray-500 text-sm font-body leading-relaxed">{p.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                            <img
                                src="/restaurant_interior.png"
                                alt="MK Little Bites Interior"
                                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-10 left-10 right-10 flex items-center gap-6">
                                <div className="bg-[var(--color-accent)] px-6 py-4 rounded-2xl shadow-lg">
                                    <span className="text-white font-heading font-bold text-3xl">4.8</span>
                                    <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Rating</p>
                                </div>
                                <div className="text-white">
                                    <h5 className="font-bold text-lg mb-1">Authentic Flavour</h5>
                                    <p className="text-white/60 text-sm">Trusted by 1000+ local diners</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[var(--color-accent)]/20 rounded-full blur-[100px] pointer-events-none"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default QualityPromise;
