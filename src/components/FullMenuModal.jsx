import React from 'react';
import { motion } from 'framer-motion';
import { X, Pizza, Coffee, Utensils, Zap, Flame, IceCream, Cake } from 'lucide-react';

const FullMenuModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const menuSections = [
        {
            title: 'Chinese Main Course',
            icon: <Zap className="w-5 h-5 text-[var(--color-accent)]" />,
            note: 'Schezwan it, if needed',
            items: [
                { name: 'Veggie Rice/Noodles', price: '₹70', description: 'Classic wok-tossed vegetables.' },
                { name: 'Sweet Corn Rice/Noodles', price: '₹80', description: 'Fresh corn kernels with mild spices.' },
                { name: 'Paneer Rice/Noodles', price: '₹100', description: 'Soft paneer cubes with aromatic rice/noodles.' },
                { name: 'Mushroom Rice/Noodles', price: '₹100', description: 'Sautéed mushrooms in Chinese style.' },
                { name: 'Baby Corn Rice/Noodles', price: '₹100', description: 'Crunchy baby corn tossed in the wok.' },
                { name: 'Gobi Rice/Noodles', price: '₹100', description: 'Crispy gobi florets in every bite.' },
            ]
        },
        {
            title: 'Veg Starters (Manchurian/Fry)',
            icon: <Flame className="w-5 h-5 text-[var(--color-accent)]" />,
            items: [
                { name: 'Paneer Manchurian/Fry', price: '₹100 / ₹80', description: 'Deep fried paneer in spicy sauce or dry fry.' },
                { name: 'Mushroom Manchurian/Fry', price: '₹100 / ₹80', description: 'Classic mushroom starter favorites.' },
                { name: 'Baby Corn Manchurian/Fry', price: '₹90 / ₹70', description: 'Crispy baby corn in tangy manchurian.' },
                { name: 'Gobi Manchurian/Fry', price: '₹80 / ₹60', description: 'Thokkavadi style crispy gobi.' },
                { name: 'Veg 65', price: '₹65', description: 'Spicy and crispy traditional veg starter.' },
            ]
        },
        {
            title: 'Burgers (Veg & Non-Veg)',
            icon: <Pizza className="w-5 h-5 text-[var(--color-accent)]" />,
            items: [
                { name: 'Veggie Burger', price: '₹80', description: 'Traditional veg patty burger.' },
                { name: 'Cheese / Mushroom Burger', price: '₹90', description: 'Loaded with melted cheese or mushrooms.' },
                { name: 'Paneer Burger', price: '₹100', description: 'Fresh paneer patty with signature sauces.' },
                { name: 'Chicken Burger', price: '₹100 / ₹110(Cheese)', description: 'Succulent chicken patty with fresh fixings.' },
                { name: 'Double Cheese Burger', price: '₹120 / ₹130(NV)', description: 'Extra cheese, extra happiness.' },
                { name: 'MK Special Burger', price: '₹120', description: 'Our chef special loaded creation.' },
            ]
        },
        {
            title: 'Fast Bites & Shakes',
            icon: <Coffee className="w-5 h-5 text-[var(--color-accent)]" />,
            items: [
                { name: 'Veg / Paneer Roll', price: '₹70 / ₹90', description: 'Classic rolls wrapped with flavor.' },
                { name: 'French Fries / Smiles', price: '₹80 / ₹70', description: 'The perfect crispy side.' },
                { name: 'Momos (Paneer/Cheese)', price: '₹50 / ₹60', description: 'Steamed packets of delight.' },
                { name: 'Legendary Milkshakes', price: '₹110+', description: 'Thick, creamy, and famous across KSR.' },
            ]
        },
        {
            title: 'Ice Cream & Desserts',
            icon: <IceCream className="w-5 h-5 text-[var(--color-accent)]" />,
            items: [
                { name: 'Vanilla Classic', price: '₹40', description: 'Timeless smooth vanilla bean flavor.' },
                { name: 'Chocolate Loaded', price: '₹60', description: 'Rich cocoa with chocolate chips.' },
                { name: 'Strawberry Delight', price: '₹50', description: 'Fresh strawberry swirls in creamy milk.' },
                { name: 'Mango Alphonso', price: '₹60', description: 'Real Alphonso mango pulp goodness.' },
                { name: 'Butterscotch Crunch', price: '₹70', description: 'Crunchy nuts with caramelized butterscotch.' },
                { name: 'Pista Green', price: '₹70', description: 'Authentic roasted pista flavor.' },
                { name: 'Black Current', price: '₹80', description: 'Deep purple berries with a tangy twist.' },
                { name: 'Brownie with Ice Cream', price: '₹120', description: 'Warm fudgy brownie topped with vanilla.' },
                { name: 'MK Special Sundae', price: '₹150', description: 'Our signature loaded dessert masterpiece.' },
                { name: 'Cold Coffee with Ice Cream', price: '₹90', description: 'Perfect blend of caffeine and cream.' },
            ]
        },
        {
            title: 'Cakes & Pastries',
            icon: <Cake className="w-5 h-5 text-[var(--color-accent)]" />,
            items: [
                { name: 'Black Forest Pastry', price: '₹70', description: 'Classic German layers with whipped cream and cherries.' },
                { name: 'Red Velvet Slice', price: '₹90', description: 'Velvety smooth cocoa with cream cheese frosting.' },
                { name: 'Choco Lava Cake', price: '₹80', description: 'Warm cake with a molten chocolate center.' },
                { name: 'Honey Cake', price: '₹60', description: 'Soft sponge soaked in honey syrup with coconut.' },
                { name: 'Butterscotch Slice', price: '₹70', description: 'Rich butterscotch flavor with crunchy pralines.' },
                { name: 'Pineapple Pastry', price: '₹60', description: 'Light sponge with fresh pineapple and cream.' },
                { name: 'Plum Cake (Box)', price: '₹150', description: 'Traditional fruit-loaded rich tea cake.' },
            ]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden"
        >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={onClose}></div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                className="relative w-full max-w-5xl max-h-[85vh] glass bg-black/40 border-white/10 rounded-[3rem] overflow-hidden flex flex-col"
            >
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-20 group"
                >
                    <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>

                <div className="px-8 sm:px-12 py-12 overflow-y-auto custom-scrollbar">
                    <div className="text-center mb-16">
                        <span className="text-[var(--color-accent)] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Hasty & Tasty</span>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
                            Our Full <span className="text-[var(--color-accent)]">Menu.</span>
                        </h2>
                        <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
                        {menuSections.map((section, idx) => (
                            <div key={idx} className="space-y-8">
                                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-[var(--color-accent)]/10 rounded-2xl">
                                            {section.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider">{section.title}</h3>
                                            {section.note && <p className="text-[var(--color-accent)]/60 text-[10px] uppercase font-bold tracking-[0.2em]">{section.note}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    {section.items.map((item, i) => (
                                        <div key={i} className="flex justify-between items-start group">
                                            <div className="max-w-[70%]">
                                                <h4 className="text-white font-bold text-lg mb-1 group-hover:text-[var(--color-accent)] transition-colors">{item.name}</h4>
                                                <p className="text-gray-500 text-sm font-body leading-relaxed">{item.description}</p>
                                            </div>
                                            <span className="text-white font-bold font-heading bg-white/5 px-4 py-1.5 rounded-full text-sm">{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center border-t border-white/5 pt-12 pb-4">
                        <a
                            href="https://wa.me/916381550065?text=Hi%20MK%20Little%20Bites!%20I'd%20like%20to%20place%20an%20order."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-12 py-5 border border-transparent rounded-full shadow-2xl text-lg font-bold text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Order Now: +91 63815 50065
                        </a>
                        <p className="text-gray-600 text-[10px] font-body mt-8 uppercase tracking-[0.2em]">
                            * Freshly prepared daily at Thokkavadi, Tiruchengode.
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FullMenuModal;
