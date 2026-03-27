import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Music, Users, Calendar } from 'lucide-react';

const Celebrations = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#0f0f0f] to-[var(--color-accent)]/10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="glass bg-white/5 border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
                                Celebrate Your <br />
                                <span className="text-[var(--color-accent)]">Special Days.</span>
                            </h2>
                            <p className="text-gray-400 font-body text-lg mb-12">
                                Looking for the perfect spot for your next birthday, achievement, or team hangout?
                                MK Little Bites offers special packages and the perfect table setting for large groups
                                and special occasions.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6 mb-12">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-[var(--color-accent)]/10 rounded-xl text-[var(--color-accent)]">
                                    <Gift className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-sm">Theme Decor</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-[var(--color-accent)]/10 rounded-xl text-[var(--color-accent)]">
                                    <Users className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-sm">Large Seating</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-[var(--color-accent)]/10 rounded-xl text-[var(--color-accent)]">
                                    <Music className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-sm">Custom Music</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-[var(--color-accent)]/10 rounded-xl text-[var(--color-accent)]">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-sm">Easy Booking</span>
                            </div>
                        </div>

                        <motion.a
                            href="https://wa.me/916381550065?text=Hi%20MK%20Little%20Bites!%20I'd%20like%20to%20book%20a%20party%20celebration."
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-white font-heading font-bold rounded-2xl shadow-xl transition-all"
                        >
                            Book Your Party Now
                        </motion.a>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                className="w-full h-64 object-cover rounded-3xl"
                                alt="Celebration"
                            />
                            <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                                <h4 className="text-white font-bold mb-1">Birthdays</h4>
                                <p className="text-gray-500 text-xs">Customized combos for students.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4 mt-8"
                        >
                            <div className="bg-[var(--color-accent)] p-6 rounded-3xl text-white">
                                <h4 className="font-bold mb-1">Group Combo</h4>
                                <p className="text-white/80 text-xs font-medium">Flat 10% off for groups &gt; 6</p>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                className="w-full h-64 object-cover rounded-3xl shadow-2xl shadow-[var(--color-accent)]/20"
                                alt="Food spread"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Celebrations;
