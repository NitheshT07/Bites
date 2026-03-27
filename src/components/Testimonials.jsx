import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            text: "Tastes so good especially paneer butter gravy and garlic naan! (yummy 😋)",
            name: "Happy Customer",
            rating: 5,
        },
        {
            text: "MK Little Bites ambience and ventilation is very good. Neat and clean. We celebrated a birthday and loved the pizza and fried rice!",
            name: "Shankar Raja",
            rating: 5,
        },
        {
            text: "All food is good. Milkshake is very nice. Super restaurant!",
            name: "Food Lover",
            rating: 5,
        }
    ];

    return (
        <section id="reviews" className="py-24 bg-[var(--color-primary-base)] relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white"
                    >
                        What Our <span className="text-[var(--color-accent)]">Guests Say</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl font-body"
                    >
                        Join hundreds of happy students and families near KSR College.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-3xl relative group hover:bg-white/10 transition-colors duration-300"
                        >
                            <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 group-hover:text-[var(--color-accent)]/10 transition-colors duration-300" />

                            <div className="flex gap-1 mb-6 text-yellow-500">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-300 font-body leading-relaxed mb-6 italic relative z-10">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-alt)] flex justify-center items-center text-white font-bold font-heading">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-white tracking-wide">
                                        {testimonial.name}
                                    </h4>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
