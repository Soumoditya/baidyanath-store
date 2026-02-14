'use client';

import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-neutral-100 flex flex-col h-full relative"
        >
            <div className="relative aspect-square overflow-hidden bg-neutral-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Desktop: Hover Button, Mobile: Always Visible (handled via CSS/Tailwind) */}
                <button
                    onClick={handleAddToCart}
                    className={`absolute bottom-4 right-4 p-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 z-10 
                        ${isAdded ? 'bg-green-600 text-white scale-110' : 'bg-white/90 text-green-700 hover:bg-green-600 hover:text-white'}
                        translate-y-0 opacity-100 md:translate-y-12 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100`}
                    title="Add to Cart"
                >
                    <ShoppingCart className="w-5 h-5" />
                </button>
            </div>

            <div className="p-5">
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {product.category}
                </span>
                <h3 className="mt-2 text-lg font-bold text-neutral-800 line-clamp-1">{product.name}</h3>
                <p className="text-sm text-neutral-500 line-clamp-2 mt-1">{product.description}</p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-neutral-900">₹{product.price}</span>
                </div>
            </div>
        </motion.div>
    );
}
