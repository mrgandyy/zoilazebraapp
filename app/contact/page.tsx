import { Mail, MessageCircle, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 font-heading sm:text-5xl mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have a question about our books? Want to schedule a visit? Just want to say hi? We'd love to hear from you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 font-heading mb-8">Contact Information</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-full text-blue-500">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Email Us</h3>
                                    <p className="text-gray-600">zoilathezebra@gmail.com</p>
                                    <p className="text-sm text-gray-400 mt-1">We usually reply within 24 hours.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-50 rounded-full text-green-500">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Social Media</h3>
                                    <p className="text-gray-600">Follow us for updates!</p>
                                    <div className="flex gap-4 mt-2">
                                        <a href="https://www.facebook.com/zoilathezebra" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">Facebook</a>
                                        <a href="https://www.instagram.com/zoilathezebra" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 font-medium">Instagram</a>
                                        <a href="https://x.com/zoilathezebra" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black font-medium">X (Twitter)</a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">Send a Message</h2>
                        <form action="https://formspree.io/f/xojqrdwj" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Your name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <select id="subject" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                    <option>General Inquiry</option>
                                    <option>School Visit Request</option>
                                    <option>Book Order Question</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 px-6 bg-primary hover:bg-green-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
