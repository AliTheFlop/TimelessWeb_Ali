import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center bg-gradient-to-b from-purple-50 to-white">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
            
            <div className="container mx-auto max-w-[80%] px-4 py-16 md:py-24 relative">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content Side */}
                    <div className="flex-1 space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                                </span>
                                <span className="text-sm font-medium">Now accepting new clients</span>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headings font-bold tracking-tight leading-[1.1]">
                                Build The Website 
                                <br className="hidden md:block" /> 
                                Your Business{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                    Deserves
                                </span>
                            </h1>
                            
                            <p className="text-lg text-gray-600 max-w-xl">
                                Every day potential customers are judging your business based on your website. 
                                We create modern, fast websites that convert visitors into customers.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                href="#contact-form"
                                className="group inline-flex items-center justify-center text-base"
                            >
                                Start Your Project
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                            </Button>
                            <Button
                                href="/work"
                                variant="secondary"
                                className="inline-flex items-center justify-center text-base"
                            >
                                View Our Work
                            </Button>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="flex-1 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                            <img
                                src="/homepage/timeless_homepage.png"
                                alt="Modern website design showcase"
                                className="w-full h-auto object-cover"
                                style={{ aspectRatio: "16/9" }}
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}