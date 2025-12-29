import Link from "next/link";
import Image from "next/image";
import AnimationWrapper from "./AnimationWrapper";

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-20 lg:pb-32">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-zebra"></div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <AnimationWrapper animationType="fadeUp" delay={0.1}>
                            <div className="inline-flex items-center px-4 py-2 rounded-full border border-pink-100 bg-pink-50 text-primary text-sm font-bold mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                                New adventures available now!
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper animationType="fadeUp" delay={0.2}>
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6 font-heading leading-tight">
                                <span className="block">Start a Chain Reaction</span>
                                <span className="block text-primary">of Kindness!</span>
                            </h1>
                        </AnimationWrapper>

                        <AnimationWrapper animationType="fadeUp" delay={0.3}>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Empowering children with social-emotional skills and the courage to live bully-free. Join Zoila in celebrating unique stripes and spreading kindness!
                            </p>
                        </AnimationWrapper>

                        <AnimationWrapper animationType="fadeUp" delay={0.4}>
                            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                                <div className="rounded-full shadow-lg hover:shadow-xl transition-shadow">
                                    <Link
                                        href="/books"
                                        className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-pink-600 md:text-lg md:px-10 transition-all transform hover:-translate-y-1"
                                    >
                                        Explore Books
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0">
                                    <Link
                                        href="/activities"
                                        className="w-full flex items-center justify-center px-8 py-4 border-2 border-primary text-base font-medium rounded-full text-primary bg-transparent hover:bg-pink-50 md:text-lg md:px-10 transition-all transform hover:-translate-y-1"
                                    >
                                        School Visits
                                    </Link>
                                </div>
                            </div>
                        </AnimationWrapper>
                    </div>

                    {/* Image Content */}
                    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                        <AnimationWrapper animationType="scale" delay={0.3} className="relative mx-auto w-full rounded-lg lg:max-w-md">
                            <div className="relative block w-full bg-white rounded-blob shadow-2xl overflow-hidden p-8 border-4 border-pink-100 animate-float">
                                <div className="absolute inset-0 bg-gradient-to-tr from-pink-50 to-blue-50 opacity-50"></div>
                                <Image
                                    src="/images/zoila-sitting.png"
                                    alt="Zoila Waving"
                                    width={600}
                                    height={600}
                                    priority
                                    className="w-full h-auto relative z-10 drop-shadow-2xl"
                                />
                            </div>

                            {/* Floating Elements/Badges */}
                            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-3 animate-float-delayed z-20 border border-gray-100">
                                <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">😊</div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase">Mood</p>
                                    <p className="text-sm font-bold text-gray-900">Happy & Kind</p>
                                </div>
                            </div>
                        </AnimationWrapper>
                    </div>
                </div>
            </div>
        </div>
    );
}
