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
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The team behind the stripes.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="prose prose-lg mx-auto text-gray-500">
                    <p>
                        <strong>Zoila the Zebra</strong> was born from a desire to teach children valuable life lessons in a fun and accessible way.
                        Our stories focus on social-emotional learning, helping kids understand their feelings and build healthy relationships with others.
                    </p>

                    <h3 className="font-heading text-2xl text-gray-900 mt-12 mb-6">Meat the Creators</h3>

                    <div className="space-y-12">
                        <AnimationWrapper animationType="slideRight">
                            <div className="flex flex-col sm:flex-row gap-8 items-start bg-pink-50 rounded-super p-6 border-2 border-white shadow-sm">
                                <div className="w-32 h-32 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                                    <Image
                                        src="/images/author-juanita.jpg"
                                        alt="Juanita Quinones Gandara"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 font-heading">Juanita Quinones Gandara, M.Ed.</h4>
                                    <div className="text-gray-600 mt-2 space-y-2 text-sm">
                                        <p>
                                            <strong>Bilingual (Spanglish) Author • Guest Speaker/Educational Consultant • Founder of an Anti-Bullying system</strong>
                                        </p>
                                        <p>
                                            Juanita writes books for children in Spanglish on purpose to help expedite English learning acquisition while embracing the Spanish language.
                                            Born in Ciudad Juarez Chihuahua, Mexico and raised in El Paso, Texas, she is a proud single mother of two young men and a retired educator
                                            (10 yrs bilingual teacher and 20 yrs school counselor).
                                        </p>
                                        <p>
                                            Today, she is determined to help empower, educate and encourage all stakeholders involved in helping create a better world by sharing her message
                                            on "Promoting a Chain Reaction of Kindness = Bullies No More!"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper animationType="slideRight" delay={0.2}>
                            <div className="flex flex-col sm:flex-row gap-8 items-start bg-blue-50 rounded-super p-6 border-2 border-white shadow-sm">
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
                                    <div className="text-gray-600 mt-2 space-y-2 text-sm">
                                        <p>
                                            Mark Bowles is a Professor of History at American Military University. He earned his Ph.D. in history from Case Western Reserve University
                                            and was the Tomash Fellow at the University of Minnesota. He also has an MBA, an MA in history, and a BA in Psychology.
                                        </p>
                                        <p>
                                            Mark is the author of 15 books, including 3 college textbooks. His latest was <em>Just Keep Rowing</em>, a story about Katie Spotz,
                                            the youngest person to row a boat, solo and unassisted, across the Atlantic Ocean. He also publishes children’s books including
                                            Gina Crawford’s latest, <em>Then the Moon Fills the Sky</em>.
                                        </p>
                                        <p>
                                            He and his wife, Nancy, are raising their three children, Isabel, Emma, and Sarah in northeast Ohio.
                                            Visit him online at <a href="http://ProfessorMDB.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ProfessorMDB.com</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper animationType="slideRight" delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-8 items-start bg-purple-50 rounded-super p-6 border-2 border-white shadow-sm">
                                {/* Illustrator placeholder */}
                                <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center text-4xl border-4 border-white shadow-md">🎨</div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 font-heading">Christopher Dart & R.A. Monday</h4>
                                    <p className="text-gray-600 mt-2">
                                        Illustrators. Bringing Zoila, Armando, and Little Raquel La Churros to life.
                                    </p>
                                </div>
                            </div>
                        </AnimationWrapper>
                    </div>

                    <h3 className="font-heading text-2xl text-gray-900 mt-12 mb-6">Our Mission</h3>
                    <p>
                        Every book we create has a purpose: to start a chain reaction of kindness. We believe that by teaching
                        empathy, understanding, and self-care early on, we can help build a brighter future for everyone.
                    </p>
                </div>
            </div>
        </div>
    );
}
