import BookCard from "../components/BookCard";
import { featuredBooks } from "../data/books";

export default function BooksPage() {
    return (
        <div className="bg-white">
            <div className="bg-secondary/10 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 font-heading sm:text-5xl mb-4">
                        The Collection
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans">
                        Explore all the wonderful stories from Zoila&apos;s world. Each book is crafted with love to teach and entertain.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featuredBooks.map((book) => (
                        <BookCard key={book.id} {...book} />
                    ))}
                </div>

                {/* Soft closing message replacing Coming Soon */}
                <div className="mt-20 py-12 border-t border-gray-100 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 font-heading mb-3">
                        More adventures are always growing in Zoila&apos;s world.
                    </h2>
                    <p className="text-base text-gray-500 max-w-2xl mx-auto font-sans leading-relaxed">
                        Stay tuned as we continue to write and illustrate new journeys filled with kindness, emotional literacy, and inclusive adventures for children everywhere.
                    </p>
                </div>
            </div>
        </div>
    );
}
