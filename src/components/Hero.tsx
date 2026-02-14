'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative bg-neutral-900 h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&w=2848&auto=format&fit=crop")',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-neutral-50/0" />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-md">
                        Since 1917
                    </span>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                        Authentic Ayurveda for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                            Modern Wellness
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg sm:text-2xl text-neutral-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
                >
                    Discover pure, natural products directly from Baidyanath Store, Rampurhat.
                    Experience the power of nature in every drop.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Link
                        href="/products"
                        className="group relative px-8 py-4 bg-green-600 text-white font-bold rounded-full overflow-hidden shadow-lg shadow-green-600/40 transition-all hover:scale-105 active:scale-95"
                    >
                        <span className="relative z-10">Shop Now</span>
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-green-500/50" />
                    </Link>
                    <Link
                        href="/about"
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-full transition-all border border-white/20 hover:border-white/40"
                    >
                        Learn More
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
            </motion.div>
        </div>
    );
}
