import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import AnimationWrapper from './AnimationWrapper';
import { Book } from '../data/books';

export default function BookCard({ 
    title, 
    description, 
    shortDescription, 
    imageSrc, 
    retailerName, 
    purchaseUrl, 
    newRelease, 
    themes 
}: Book) {
    const displayDescription = shortDescription || description;

    return (
        <AnimationWrapper animationType="scale" className="h-full">
            <div className="bg-white rounded-super shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary flex flex-col h-full group relative">
                
                {/* Tasteful "NEW" Badge */}
                {newRelease && (
                    <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-20 uppercase tracking-wider">
                        New
                    </span>
                )}

                <div className="relative h-80 w-full bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-zebra opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                        <Image
                            src={imageSrc}
                            alt={`Cover of ${title}`}
                            fill
                            className="object-contain drop-shadow-md"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading leading-tight group-hover:text-primary transition-colors min-h-[3.5rem] flex items-center">
                        {title}
                    </h3>
                    
                    {/* Short description for high readability */}
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-grow font-sans leading-relaxed">
                        {displayDescription}
                    </p>

                    {/* Learning Themes / Outcomes in Book Card */}
                    {themes && themes.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                            {themes.slice(0, 3).map((theme, i) => (
                                <span 
                                    key={i} 
                                    className="text-[11px] bg-pink-50 text-primary border border-pink-100/50 px-2 py-0.5 rounded-full font-medium"
                                >
                                    {theme}
                                </span>
                            ))}
                        </div>
                    )}

                    <a
                        href={purchaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center px-6 py-4 border border-transparent rounded-full shadow-lg text-sm font-bold text-white bg-primary hover:bg-pink-600 transition-all gap-2 transform active:scale-95"
                    >
                        <ShoppingCart className="h-4 w-4" />
                        Buy on {retailerName}
                    </a>
                </div>
            </div>
        </AnimationWrapper>
    );
}
