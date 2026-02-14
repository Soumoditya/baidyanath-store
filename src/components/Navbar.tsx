'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart();

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            Baidyanath Store
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-neutral-600 hover:text-green-600 transition-colors">Home</Link>
                        <Link href="/products" className="text-neutral-600 hover:text-green-600 transition-colors">Products</Link>
                        <Link href="/about" className="text-neutral-600 hover:text-green-600 transition-colors">About</Link>
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="p-2 text-neutral-600 hover:text-green-600 transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <Link href="/cart" className="p-2 text-neutral-600 hover:text-green-600 transition-colors relative">
                            <ShoppingCart className="w-5 h-5" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-neutral-600 hover:text-green-600 focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-neutral-200 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            <Link
                                href="/"
                                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-green-600 hover:bg-green-50"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/products"
                                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-green-600 hover:bg-green-50"
                                onClick={() => setIsOpen(false)}
                            >
                                Products
                            </Link>
                            <Link
                                href="/about"
                                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-green-600 hover:bg-green-50"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/cart"
                                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-green-600 hover:bg-green-50"
                                onClick={() => setIsOpen(false)}
                            >
                                Cart (0)
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
