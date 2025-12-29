import Link from "next/link";
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
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore all the wonderful stories from Zoila's world. Each book is crafted with love to teach and entertain.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featuredBooks.map((book, index) => (
                        <BookCard key={index} {...book} />
                    ))}
                </div>

                <div className="mt-20 bg-blue-50 rounded-3xl p-8 sm:p-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 font-heading mb-4">Coming Soon!</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        We are working on new adventures for Zoila and her friends. Stay tuned for more stories about courage, honesty, and having fun!
                    </p>

                </div>
            </div>
        </div>
    );
}
