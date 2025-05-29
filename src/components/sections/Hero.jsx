import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center py-16 md:py-0">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col gap-8 text-center lg:text-left">
                        <div className="space-y-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headings font-bold tracking-tight leading-[1.1]">
                                Build The Website Your Business{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                    Deserves
                                </span>
                                .
                            </h1>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                                Every day potential customers are judging your business based on your website. 
                                We create websites that actively work to grow your business 24/7.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                href="#contact-form"
                                className="group inline-flex items-center justify-center"
                            >
                                Get in Touch
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                            </Button>
                            <Button
                                href="/work"
                                variant="secondary"
                                className="inline-flex items-center justify-center"
                            >
                                View Our Work
                            </Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
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
        </section>
    );
}