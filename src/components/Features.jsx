import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Pizza, PartyPopper, Sparkles } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Wind className="w-8 h-8 text-[var(--color-accent)]" />,
            title: 'Immaculate Ambience',
            description: 'A refreshing, well-ventilated space designed for your comfort.'
        },
        {
            icon: <Pizza className="w-8 h-8 text-[var(--color-accent)]" />,
            title: 'Diverse Cravings',
            description: 'From cheesy pizzas to authentic Chinese dishes.'
        },
        {
            icon: <PartyPopper className="w-8 h-8 text-[var(--color-accent)]" />,
            title: 'Celebration Ready',
            description: 'The ultimate destination for birthdays and group hangouts.'
        },
        {
            icon: <Sparkles className="w-8 h-8 text-[var(--color-accent)]" />,
            title: 'Uncompromised Hygiene',
            description: 'Spotless dining for a worry-free experience.'
        }
    ];

    return (
        <section id="about" className="py-24 bg-[var(--color-primary-base)] relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--color-accent-alt)]/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-heading font-bold mb-6"
                    >
                        Why We Are <span className="text-[var(--color-accent)]">Loved</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl font-body"
                    >
                        Experience the perfect blend of taste, comfort, and memories at Thokkavadi's premier dining destination.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group"
                        >
                            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/5 group-hover:bg-[var(--color-accent)]/10 transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white mb-3 tracking-wide">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed font-body">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
