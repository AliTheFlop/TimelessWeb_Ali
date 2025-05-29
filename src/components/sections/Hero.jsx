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
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-primary font-semibold tracking-tight leading-[1.1]">
                                Get{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                    20% OFF
                                </span>{" "}
                                Your First Order!
                            </h1>

                            <p className="text-lg text-gray-600 max-w-xl">
                                Visitors judge your business based on your
                                website. Let us make it something fast and
                                beautiful that converts them into customers.
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
                        <div className="relative rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                            <img
                                src="/homepage/illustration.svg"
                                alt="Modern website design showcase"
                                className="w-full h-auto object-contain"
                                style={{ aspectRatio: "1:1" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}