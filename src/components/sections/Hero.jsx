import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <main className="flex min-h-[80vh] w-full mb-10">
            <div className="container mx-auto my-auto max-w-[80%] lg:px-0 px-0 sm:px-6 py-12 md:py-24">
                <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
                    {/* Text Section */}
                    <div className="flex flex-col w-full lg:w-1/2 gap-8">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headings text-headings font-semibold tracking-tight leading-[1.1]">
                                Build The Website Your Business{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                    Deserves
                                </span>
                                .
                            </h1>
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                                Every day potential customers are judging your
                                business based on your website. We create
                                websites that actively work to grow your
                                business 24/7.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button
                                fullWidth={true}
                                className="flex flex-row items-center justify-center w-full sm:w-auto px-8 py-3 text-sm font-medium transition-all group/viewwork"
                            >
                                GET IN TOUCH
                                <ArrowRight className="ml-2 w-4 h-4 group-hover/viewwork:translate-x-1.5 duration-200 transition-all" />
                            </Button>
                            <Button
                                fullWidth={true}
                                variant="secondary"
                                className="flex flex-row items-center justify-center w-full sm:w-auto px-8 py-3 text-sm font-medium transition-all group/viewwork"
                            >
                                VIEW OUR WORK
                            </Button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl ">
                        <img
                            src="/homepage/timeless_homepage.png"
                            alt="Corporate meeting"
                            className="w-full h-auto object-cover"
                            style={{
                                aspectRatio: "16/9",
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
