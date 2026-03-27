import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FullMenuModal from './FullMenuModal';

const Menu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const menuCategories = [
        {
            title: 'The Fan Favorites',
            subtitle: 'The highly recommended combo',
            items: 'Paneer Butter Gravy & Garlic Naan',
            image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'The Fast Classics',
            subtitle: 'Quick and delicious',
            items: 'Pizzas & Burgers',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Wok Wonders',
            subtitle: 'Authentic flavors',
            items: 'Egg Fried Rice & Chinese Noodles',
            image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Signature Shakes',
            subtitle: 'Thick, creamy, and undeniably famous Milkshakes',
            items: 'Assorted Flavors',
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Ice Cream Delights',
            subtitle: 'Cool & Refreshing',
            items: 'Premium Scoops & Sundaes',
            image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        }
    ];

    return (
        <section id="menu" className="py-24 bg-[#111111] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl font-heading font-bold mb-6"
                        >
                            Menu <span className="text-[var(--color-accent)]">Highlights</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-400 text-lg md:text-xl font-body"
                        >
                            Discover the dishes that keep our customers coming back for more.
                            Prepared fresh and served hot.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="hidden md:inline-flex items-center text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors duration-300 font-medium"
                        >
                            View Full Menu <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {menuCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/9] cursor-pointer"
                        >
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>

                            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-[var(--color-accent)] font-medium text-sm mb-2 tracking-wider uppercase">
                                        {category.subtitle}
                                    </p>
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                                        {category.title}
                                    </h3>
                                    <p className="text-gray-300 font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        Featuring: {category.items}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center text-white bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full transition-colors duration-300 font-medium w-full justify-center"
                    >
                        View Full Menu <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>

                <AnimatePresence>
                    {isModalOpen && (
                        <FullMenuModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Menu;
