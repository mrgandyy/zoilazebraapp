import { Download, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function ActivitiesPage() {
    return (
        <div className="bg-white">
            <div className="bg-accent/10 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 font-heading sm:text-5xl mb-4">
                        Activities & Visits
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Bring Zoila to your classroom or enjoy fun activities at home.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* School Visits */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <Calendar className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 font-heading">School Visits</h2>
                        </div>
                        <div className="prose text-gray-600">
                            <p className="mb-4">
                                <strong>Juanita Quinones Gandara</strong> brings her stories to life! A standard visit helps students connect with the themes of friendship, inclusion, and kindness through an engaging performance.
                            </p>
                            <p className="mb-6">
                                Juanita uses <strong>puppets and Latin music</strong> to bring Zoila, Armando, and Little Raquel La Churros to life, creating a high-energy experience suited for <strong>Elementary and Middle Schools</strong>. She adapts her presentations to fit the specific age group of the audience.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Interactive Storytelling with Puppets
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Latin Music & Dance Elements
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Adaptable for Elementary & Middle School
                                </li>
                            </ul>
                            <a href="/contact" className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-green-600 transition-colors">
                                Request a Visit
                            </a>
                        </div>
                    </div>

                    {/* Downloads */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-accent/10 rounded-full text-accent">
                                <Download className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 font-heading">Free Downloads</h2>
                        </div>
                        <p className="text-gray-600 mb-8">
                            Keep the fun going with these printable color sheets and activities. Perfect for rainy days or classroom free time!
                        </p>

                        <div className="space-y-4">
                            {[
                                { id: 1, title: 'Zoila the Zebra', file: '/coloring/zoila-coloring.png' },
                                { id: 2, title: 'Armando the Armadillo', file: '/coloring/armando-coloring.png' },
                                { id: 3, title: 'Zoila & Armando Reading', file: '/coloring/friends-coloring.png' }
                            ].map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-accent transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                                            <Image
                                                src={item.file}
                                                alt={item.title}
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-contain p-1"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title} Coloring Page</h4>
                                            <p className="text-sm text-gray-500">PNG • Printable</p>
                                        </div>
                                    </div>
                                    <a
                                        href={item.file}
                                        download
                                        className="p-2 text-gray-400 group-hover:text-accent transition-colors block"
                                        title="Download"
                                    >
                                        <Download className="w-5 h-5" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
