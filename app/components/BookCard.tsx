import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import AnimationWrapper from './AnimationWrapper';

interface BookProps {
    title: string;
    description: string;
    imageSrc: string;
    amazonLink: string;
}

export default function BookCard({ title, description, imageSrc, amazonLink }: BookProps) {
    return (
        <AnimationWrapper animationType="scale" className="h-full">
            <div className="bg-white rounded-super shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary flex flex-col h-full group">
                <div className="relative h-80 w-full bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-zebra opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2">
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className="object-contain drop-shadow-md"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading leading-tight group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow font-sans">{description}</p>
                    <a
                        href={amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center px-6 py-4 border border-transparent rounded-full shadow-lg text-sm font-bold text-white bg-primary hover:bg-pink-600 transition-all gap-2 transform active:scale-95"
                    >
                        <ShoppingCart className="h-4 w-4" />
                        Buy Now
                    </a>
                </div>
            </div>
        </AnimationWrapper>
    );
}
