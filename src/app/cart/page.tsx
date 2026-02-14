'use client';

import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

    const handleCheckout = () => {
        // UPI Deep Link Construction
        const upiId = "baidya.ent@okhdfcbank";
        const payeeName = "Baidyanath Store";
        const amount = cartTotal.toFixed(2);
        const transactionNote = `Order Payment for ${cart.length} items`;

        // Encode parameters
        const params = new URLSearchParams({
            pa: upiId,
            pn: payeeName,
            am: amount,
            cu: "INR",
            tn: transactionNote,
        });

        const upiUrl = `upi://pay?${params.toString()}`;

        // Redirect to UPI app
        window.location.href = upiUrl;
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <div className="bg-white p-6 rounded-full inline-block mb-6 shadow-sm">
                        <ShieldCheck className="w-12 h-12 text-green-200" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2">Your cart is empty</h2>
                    <p className="text-neutral-500 mb-8">Looks like you haven't added any items yet.</p>
                    <Link
                        href="/products"
                        className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/30"
                    >
                        Start Shopping
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-neutral-900 mb-8">Shopping Cart</h1>

                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
                            <ul className="divide-y divide-neutral-100">
                                {cart.map((item) => (
                                    <li key={item.id} className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                        <div className="w-24 h-24 flex-shrink-0 bg-neutral-100 rounded-xl overflow-hidden">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>

                                        <div className="flex-1 text-center sm:text-left">
                                            <h3 className="text-lg font-semibold text-neutral-900">{item.name}</h3>
                                            <p className="text-neutral-500 text-sm mt-1">{item.category}</p>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 text-sm mt-4 hover:text-red-700 font-medium flex items-center justify-center sm:justify-start"
                                            >
                                                <Trash2 className="w-4 h-4 mr-1" /> Remove
                                            </button>
                                        </div>

                                        <div className="flex flex-col items-center sm:items-end gap-4">
                                            <span className="text-lg font-bold text-neutral-900">₹{item.price * item.quantity}</span>

                                            <div className="flex items-center border border-neutral-200 rounded-lg">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-2 hover:bg-neutral-50 text-neutral-600"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="w-10 text-center font-medium text-neutral-900">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-2 hover:bg-neutral-50 text-neutral-600"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-4 mt-8 lg:mt-0">
                        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6 sticky top-24">
                            <h2 className="text-lg font-bold text-neutral-900 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-neutral-600">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                                <div className="flex justify-between text-neutral-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="border-t border-neutral-100 pt-4 flex justify-between font-bold text-lg text-neutral-900">
                                    <span>Total</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg shadow-green-600/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
                            >
                                Pay Now via UPI
                            </button>

                            <div className="mt-6 text-xs text-neutral-500 text-center bg-neutral-50 p-3 rounded-lg">
                                <p>Secure payment directly through your preferred UPI app (GPay, PhonePe, Paytm, etc).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
