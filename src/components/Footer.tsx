import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-white mb-4 block">
                            Baidyanath Store
                        </Link>
                        <p className="text-sm text-neutral-400 mb-6">
                            Your trusted source for authentic Ayurvedic medicines and natural wellness products in Rampurhat.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-neutral-400 hover:text-green-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-neutral-400 hover:text-green-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-neutral-400 hover:text-green-500 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-green-400 transition-colors">Home</Link></li>
                            <li><Link href="/products" className="hover:text-green-400 transition-colors">Shop All</Link></li>
                            <li><Link href="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/products?category=health" className="hover:text-green-400 transition-colors">Health & Wellness</Link></li>
                            <li><Link href="/products?category=personal" className="hover:text-green-400 transition-colors">Personal Care</Link></li>
                            <li><Link href="/products?category=food" className="hover:text-green-400 transition-colors">Food & Nutrition</Link></li>
                            <li><Link href="/products?category=supplements" className="hover:text-green-400 transition-colors">Supplements</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                <span>Rampurhat, Birbhum, West Bengal, India</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                <span>+91 99321 32957</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                <span>baidya.ent@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
                    <p>&copy; {new Date().getFullYear()} Baidyanath Store. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-neutral-300">Privacy Policy</a>
                        <a href="#" className="hover:text-neutral-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
