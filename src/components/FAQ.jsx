import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/5 last:border-0 mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <div className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 text-[var(--color-accent)] opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="text-white font-bold font-heading text-lg md:text-xl">{question}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-gray-500 font-body leading-relaxed max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Is there parking available nearby?",
            answer: "Yes, we have dedicated curb-side parking specifically for our customers opposite the KSR College entrance."
        },
        {
            question: "Do you deliver to KSR hostels?",
            answer: "Absolutely! We offer no-contact delivery to hostels and locations within a 2-3km radius. Just WhatsApp us your details."
        },
        {
            question: "How many people can your party space hold?",
            answer: "Our well-ventilated party space can comfortably accommodate groups of up to 25-30 people. Perfect for birthday celebrations!"
        },
        {
            question: "What are your top-selling student hacks?",
            answer: "Our 'Student Saver Combos' featuring Egg Fried Rice + Milkshake are our #1 sellers during exam weeks!"
        },
        {
            question: "Do you accept digital payments?",
            answer: "Yes, we accept all major UPI apps (GPay, PhonePe, Paytm), cards, and cash."
        }
    ];

    return (
        <section className="py-24 bg-[#0a0a0a]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        Got <span className="text-[var(--color-accent)]">Questions?</span>
                    </motion.h2>
                    <p className="text-gray-400 font-body text-lg">
                        Everything you need to know about dining at MK Little Bites.
                    </p>
                </div>

                <div className="glass bg-white/5 border-white/10 rounded-[2.5rem] p-4 md:p-8">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
