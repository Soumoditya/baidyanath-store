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
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-neutral-100 flex flex-col h-full"
        >
            <div className="relative aspect-square overflow-hidden bg-neutral-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                <button
                    onClick={handleAddToCart}
                    className={`absolute bottom-4 right-4 p-3 rounded-full shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${isAdded ? 'bg-green-600 text-white' : 'bg-white text-green-700 hover:bg-green-600 hover:text-white'}`}
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
