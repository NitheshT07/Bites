import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Info } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="location" className="bg-[#111111] relative border-t border-white/10 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Side: Contact Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-10"
                        >
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                                Drop By <br /> <span className="text-[var(--color-accent)]">For A Bite.</span>
                            </h2>
                            <p className="text-gray-400 font-body text-lg max-w-md">
                                Experience Thokkavadi's favorite spot for mouth-watering bites and premium ambience.
                            </p>
                        </motion.div>

                        <div className="space-y-6 flex flex-col items-start min-w-[300px] w-full max-w-md border border-white/10 rounded-3xl p-8 glass bg-black/40 backdrop-blur-3xl shadow-2xl relative overflow-hidden group hover:border-[var(--color-accent)]/30 transition-colors duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex items-start gap-4 mb-4"
                            >
                                <MapPin className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-heading font-bold text-white mb-1">Address</h4>
                                    <p className="text-gray-400 font-body">
                                        KSR College, opposite Thokavadi,<br />
                                        Thokkavadi, KSR Kalvi Nagar,<br />
                                        Tamil Nadu 637215
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex items-start gap-4 mb-4"
                            >
                                <Clock className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-heading font-bold text-white mb-1">Hours</h4>
                                    <p className="text-gray-400 font-body w-full">Open Daily</p>
                                    <p className="text-gray-400 font-body w-full">Closes at 11:30 PM</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex items-start gap-4 mb-6"
                            >
                                <Info className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-heading font-bold text-white mb-2">Services</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full text-white bg-white/10 border border-white/10">Dine-in</span>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full text-white bg-white/10 border border-white/10">Doorstep Delivery</span>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full text-white bg-white/10 border border-white/10">only whatsapp orders</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                href="tel:+916381550065"
                                className="mt-4 flex items-center justify-center w-full px-6 py-4 border border-transparent rounded-full shadow-[0_0_20px_rgba(255,90,54,0.2)] hover:shadow-[0_0_25px_rgba(255,90,54,0.4)] text-base font-bold text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 transition-all duration-300 transform hover:-translate-y-1 group-hover:scale-[1.02]"
                            >
                                <Phone className="w-5 h-5 mr-3" />
                                Call +91 63815 50065
                            </motion.a>

                        </div>
                    </div>

                    {/* Right Side: Maps Integration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full h-[400px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden glass border border-white/20 relative"
                    >
                        {/* Map overlay purely for aesthetic aesthetic aesthetic */}
                        <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl border border-white/20 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
                        <iframe
                            title="MK Little Bites Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.064434271449!2d77.82672777504865!3d11.366710488819445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9614db2aa6aeb%3A0xe54c1533ad0dbec7!2sMK%20Little%20Bites!5e0!3m2!1sen!2sin!4v1710433000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%) sepia(20%) opacity(70%)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                        ></iframe>
                        <div className="absolute inset-x-0 bottom-4 text-center z-20 pointer-events-none">
                            <p className="text-white/60 text-sm font-body tracking-wider uppercase font-semibold">Hover to interact</p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm font-body">
                        &copy; {new Date().getFullYear()} MK Little Bites. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-body">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-body">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
