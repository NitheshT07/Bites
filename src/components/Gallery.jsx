import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Cheesy Perfection',
            category: 'Pizza'
        },
        {
            url: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Our Clean Interior',
            category: 'Ambience'
        },
        {
            url: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Juicy Burgers',
            category: 'Bites'
        },
        {
            url: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Famous Shakes',
            category: 'Desserts'
        },
        {
            url: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Wok tossed Fried Rice',
            category: 'Chinese'
        },
        {
            url: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Cool Refreshments',
            category: 'Drinks'
        }
    ];

    return (
        <section className="py-24 bg-[#111111]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        The Visual <span className="text-[var(--color-accent)]">Gallery.</span>
                    </motion.h2>
                    <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto">
                        A glimpse into the flavors and atmosphere that make MK Little Bites special.
                    </p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative group overflow-hidden rounded-3xl cursor-pointer"
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                                <h4 className="text-white font-heading font-bold text-xl">{img.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
