import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[100vh] w-full flex items-center justify-center bg-gradient-to-b from-purple-50 via-white to-white py-40 lg:py-0 lg:min-h-[90vh]">
            <div className="container mx-auto max-w-[80%]">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl xl:text-6xl font-primary font-medium leading-tight">
                                Creating Websites That{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    Win Clients
                                </span>
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                                We help convert visitors into paying customers
                                with a conversion-focused website that speaks
                                directly to your audience.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                href="/contact"
                                className="group text-base px-8 py-4"
                                fullWidth={false}
                            >
                                Get A Free Quote
                                <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
                            </Button>
                            {/* <Button
                                href="/work"
                                variant="secondary"
                                className="text-base px-8 py-4 "
                                fullWidth={false}
                            >
                                See Our Work
                            </Button> */}
                        </div>
                    </div>

                    {/* Image - Hidden on tablets and below */}
                    <div className="hidden lg:block relative">
                        <div className="relative w-full max-w-2xl mx-auto">
                            <div className="aspect-square relative z-10">
                                <img
                                    src="/homepage/hero_image.svg"
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
