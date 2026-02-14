'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCart() {
    const { cartCount } = useCart();

    return (
        <AnimatePresence>
            {cartCount > 0 && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="fixed bottom-6 right-6 z-40 md:hidden"
                >
                    <Link href="/cart">
                        <div className="relative bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-600/40 flex items-center justify-center transition-transform active:scale-95">
                            <ShoppingCart className="w-6 h-6" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                                {cartCount}
                            </span>
                        </div>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
