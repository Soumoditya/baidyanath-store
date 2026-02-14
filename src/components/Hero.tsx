'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative bg-neutral-900 h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&w=2848&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
                >
                    Authentic Ayurveda for <span className="text-green-400">Modern Wellness</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg sm:text-xl text-neutral-200 mb-10 max-w-2xl mx-auto"
                >
                    Discover pure, natural products directly from Baidyanath Store, Rampurhat.
                    Experience the power of nature in every drop.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/products"
                        className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-600/30"
                    >
                        Shop Now
                    </Link>
                    <Link
                        href="/about"
                        className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-all border border-white/30"
                    >
                        Learn More
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
