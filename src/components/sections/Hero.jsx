import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-purple-50 via-white to-white py-20 lg:py-0">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl xl:text-6xl font-primary font-bold leading-tight">
                                Fast Websites That{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    Look Good
                                </span>
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                                We build websites that load quickly and look great on any device. No fuss, no jargon - just results.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                href="#contact-form"
                                className="group text-base px-8 py-4"
                                fullWidth={false}
                            >
                                Start Your Project
                                <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                href="/work"
                                variant="secondary"
                                className="text-base px-8 py-4"
                                fullWidth={false}
                            >
                                See Our Work
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="pt-8 border-t border-gray-100">
                            <div className="grid grid-cols-3 gap-6 items-center">
                                <div className="text-center">
                                    <div className="font-bold text-2xl text-purple-600">24hr</div>
                                    <div className="text-sm text-gray-600">Turnaround</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-bold text-2xl text-purple-600">100%</div>
                                    <div className="text-sm text-gray-600">Satisfaction</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-bold text-2xl text-purple-600">5★</div>
                                    <div className="text-sm text-gray-600">Rated</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative order-first lg:order-last">
                        <div className="relative w-full max-w-2xl mx-auto">
                            <div className="aspect-square relative z-10">
                                <img
                                    src="/homepage/illustration.svg"
                                    alt="Web Design Illustration"
                                    className="w-full h-full object-contain"
                                    loading="eager"
                                />
                            </div>
                            {/* Background Decoration */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}