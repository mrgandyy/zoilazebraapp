import Image from "next/image";
import AnimationWrapper from "../components/AnimationWrapper";

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-primary/5 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 font-heading sm:text-5xl mb-4">
                        About Us
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans">
                        The team behind the stripes.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="prose prose-lg mx-auto text-gray-500">
                    <p className="font-sans">
                        <strong>Zoila the Zebra</strong> was born from a desire to teach children valuable life lessons in a fun and accessible way.
                        Our stories focus on social-emotional learning, helping kids understand their feelings and build healthy relationships with others.
                    </p>

                    <h3 className="font-heading text-2xl text-gray-900 mt-12 mb-6">Meet the Creators</h3>

                    {/* Authors List */}
                    <div className="space-y-12 mb-16">
                        <AnimationWrapper animationType="slideRight">
                            <div className="flex flex-col sm:flex-row gap-8 items-start bg-pink-50/60 rounded-super p-6 border-2 border-white shadow-sm">
                                <div className="w-32 h-32 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                                    <Image
                                        src="/images/author-juanita.jpg"
                                        alt="Juanita Quiñones Gándara"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 font-heading">Juanita Quiñones Gándara, M.Ed.</h4>
                                    <div className="text-gray-600 mt-2 space-y-4 text-sm font-sans leading-relaxed">
                                        <p>
                                            <strong>Bilingual Author • Guest Speaker/Educational Consultant • Founder of an SEL Anti-Bullying System</strong>
                                        </p>
                                        <p>
                                            Juanita Quiñones Gándara, lovingly known as “Zoila the Zebra,” is a passionate advocate for inclusion, literacy, and cultural pride. Her stories are inspired by real children, heartfelt moments, and the magical lessons we learn when we open our hearts to others.
                                        </p>
                                        <p>
                                            Born in Ciudad Juárez, Chihuahua, Mexico, and raised in El Paso, Texas, Juanita proudly embraces her bilingual and bicultural roots. She is a devoted mother of two sons, Mark and Matthew, and a proud “Glamma” to four beautiful grandchildren who inspire her every day.
                                        </p>
                                        <p>
                                            After a fulfilling career as a bilingual educator and school counselor, she now shares her voice as a bilingual author, educational consultant, and storyteller, encouraging children and families to celebrate diversity, literacy, kindness, anti-bullying, and connection.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper animationType="slideRight" delay={0.2}>
                            <div className="flex flex-col sm:flex-row gap-8 items-start bg-blue-50/60 rounded-super p-6 border-2 border-white shadow-sm">
                                <div className="w-32 h-32 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                                    <Image
                                        src="/images/author-mark.jpg"
                                        alt="Mark Bowles"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 font-heading">Mark Bowles, Ph.D.</h4>
                                    <div className="text-gray-600 mt-2 space-y-2 text-sm font-sans leading-relaxed">
                                        <p>
                                            Mark Bowles is a Professor of History at American Military University. He earned his Ph.D. in history from Case Western Reserve University and was the Tomash Fellow at the University of Minnesota. He also has an MBA, an MA in history, and a BA in Psychology.
                                        </p>
                                        <p>
                                            Mark is the co-author of several books in the Zoila series. He is the author of 15 books, including 3 college textbooks. His latest was <em>Just Keep Rowing</em>, a story about Katie Spotz, the youngest person to row a boat, solo and unassisted, across the Atlantic Ocean. He also publishes children’s books.
                                        </p>
                                        <p>
                                            He and his wife, Nancy, are raising their three children, Isabel, Emma, and Sarah in northeast Ohio. Visit him online at <a href="http://ProfessorMDB.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ProfessorMDB.com</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimationWrapper>
                    </div>

                    <h3 className="font-heading text-2xl text-gray-900 mt-12 mb-6">Our Illustrators</h3>

                    {/* Illustrators List */}
                    <div className="space-y-8">
                        <AnimationWrapper animationType="slideRight">
                            <div className="flex flex-col sm:flex-row gap-8 items-start bg-purple-50/60 rounded-super p-6 border-2 border-white shadow-sm">
                                <div className="w-24 h-24 bg-purple-100 rounded-full flex-shrink-0 flex items-center justify-center text-3xl border-4 border-white shadow-md">🎨</div>
                                <div className="font-sans text-sm leading-relaxed text-gray-600">
                                    <h4 className="text-lg font-bold text-gray-900 font-heading mb-1">Christopher Dart</h4>
                                    <p className="font-semibold text-xs text-purple-700 uppercase tracking-wider mb-2">
                                        Illustrator of 3 Books
                                    </p>
                                    <p>
                                        Christopher Dart is the creative artist who lovingly brought Zoila the Zebra and Armando the Armadillo to life. His beautiful, child-friendly illustrations are featured in:
                                    </p>
                                    <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
                                        <li><em>Zoila the Zebra&apos;s WOW Words of Wisdom</em></li>
                                        <li><em>How to Stop Armadillo Tears</em></li>
                                        <li><em>Zoila&apos;s Three Tricks to Help Avoid Getting Sick</em></li>
                                    </ul>
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper animationType="slideRight" delay={0.2}>
                            <div className="flex flex-col sm:flex-row gap-8 items-start bg-amber-50/60 rounded-super p-6 border-2 border-white shadow-sm">
                                <div className="w-24 h-24 bg-amber-100 rounded-full flex-shrink-0 flex items-center justify-center text-3xl border-4 border-white shadow-md">🖌️</div>
                                <div className="font-sans text-sm leading-relaxed text-gray-600">
                                    <h4 className="text-lg font-bold text-gray-900 font-heading mb-1">R.A. Monday</h4>
                                    <p className="font-semibold text-xs text-amber-700 uppercase tracking-wider mb-2">
                                        Illustrator of 1 Book
                                    </p>
                                    <p>
                                        R.A. Monday brings high energy and expressive depth to character designs. He illustrated the heartwarming migration story:
                                    </p>
                                    <ul className="list-disc pl-5 mt-2 text-xs">
                                        <li><em>The Magical Journey of Little Raquel &ldquo;La Churros&rdquo;: Courage of a Migrant Child</em></li>
                                    </ul>
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper animationType="slideRight" delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-8 items-start bg-green-50/60 rounded-super p-6 border-2 border-white shadow-sm">
                                <div className="w-24 h-24 bg-green-100 rounded-full flex-shrink-0 flex items-center justify-center text-3xl border-4 border-white shadow-md">✨</div>
                                <div className="font-sans text-sm leading-relaxed text-gray-600">
                                    <h4 className="text-lg font-bold text-gray-900 font-heading mb-1">Charlote Ellie</h4>
                                    <p className="font-semibold text-xs text-green-700 uppercase tracking-wider mb-2">
                                        Illustrator of the New Release
                                    </p>
                                    <p>
                                        Charlote Ellie brought the vibrant, diverse cast of school friends and the soft pastel rainbow to life in our newest publication:
                                    </p>
                                    <ul className="list-disc pl-5 mt-2 text-xs">
                                        <li><em>Zoila the Zebra Meets Amazing Friends of All Abilities (A Story About Special Needs)</em></li>
                                    </ul>
                                </div>
                            </div>
                        </AnimationWrapper>
                    </div>

                    <h3 className="font-heading text-2xl text-gray-900 mt-16 mb-6">Our Mission</h3>
                    <p className="font-sans text-base text-gray-500 leading-relaxed">
                        Every book we create has a purpose: to start a chain reaction of kindness. We believe that by teaching
                        empathy, understanding, and self-care early on, we can help build a brighter future for everyone.
                    </p>
                </div>
            </div>
        </div>
    );
}
