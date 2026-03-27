import React from 'react';
import { motion } from 'framer-motion';
import { Tablet, PhoneCall, PackageCheck } from 'lucide-react';

const OrderSteps = () => {
    const steps = [
        {
            icon: <Tablet className="w-8 h-8" />,
            title: "1. Browse Menu",
            description: "Check out our full digital menu and pick your cravings."
        },
        {
            icon: <PhoneCall className="w-8 h-8" />,
            title: "2. Call or WhatsApp",
            description: "Place your order directly via call or WhatsApp message."
        },
        {
            icon: <PackageCheck className="w-8 h-8" />,
            title: "3. Eat & Enjoy",
            description: "Wait for our pickup call or delivery to enjoy your hot meal."
        }
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        How to <span className="text-[var(--color-accent)]">Order.</span>
                    </motion.h2>
                    <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto">
                        Simple, fast, and student-friendly. Just follow these three steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connection line for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent -translate-y-20"></div>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="text-center relative z-10"
                        >
                            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full glass bg-[var(--color-accent)]/10 border-[var(--color-accent)]/20 text-[var(--color-accent)] shadow-[0_0_30px_rgba(255,90,54,0.1)]">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase tracking-wider">{step.title}</h3>
                            <p className="text-gray-500 font-body leading-relaxed max-w-xs mx-auto">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OrderSteps;
