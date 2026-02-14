export default function AboutPage() {
    return (
        <div className="bg-neutral-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-neutral-900 mb-4">About Baidyanath Store</h1>
                    <p className="text-neutral-500 max-w-2xl mx-auto">
                        Serving the community of Rampurhat with authentic Ayurvedic products for generations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&q=80&w=1000"
                            alt="Ayurvedic Store"
                            className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
                        <p className="text-neutral-600 mb-6 leading-relaxed">
                            Founded with a mission to bring the ancient wisdom of Ayurveda to modern lifestyles,
                            Baidyanath Store in Rampurhat has been a trusted name for quality natural medicines and wellness products.
                        </p>
                        <p className="text-neutral-600 mb-6 leading-relaxed">
                            We believe in the power of nature to heal and rejuvenate. Our carefully curated selection includes
                            everything from classic immunity boosters like Chyawanprash to specialized herbal remedies for various ailments.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                                <h3 className="text-xl font-bold text-green-600 mb-2">100%</h3>
                                <p className="text-sm text-neutral-500">Authentic Products</p>
                            </div>
                            <div className="p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                                <h3 className="text-xl font-bold text-green-600 mb-2">500+</h3>
                                <p className="text-sm text-neutral-500">Happy Customers</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-12 bg-green-600 text-white">
                            <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <span className="font-semibold w-24 flex-shrink-0">Address:</span>
                                    <span>Rampurhat, Birbhum,<br />West Bengal, India</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="font-semibold w-24 flex-shrink-0">Phone:</span>
                                    <span>+91 99321 32957</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="font-semibold w-24 flex-shrink-0">Email:</span>
                                    <span>baidya.ent@gmail.com</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="font-semibold w-24 flex-shrink-0">Hours:</span>
                                    <span>Mon - Sat: 10:00 AM - 9:00 PM</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-12">
                            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Send a Message</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"></textarea>
                                </div>
                                <button type="submit" className="w-full py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
