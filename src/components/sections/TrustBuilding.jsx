import Button from "@/components/ui/Button";
import { Check, Star } from "lucide-react";

export default function TrustBuilding() {
    const trustBullets = [
        "Custom Website Design",
        "SEO Optimised Structure",
        "E-commerce Solutions",
        "100% Ownership Rights",
        "FREE Website Training",
        "Ongoing Support",
    ];

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white min-h-[60vh] flex flex-col justify-center items-center relative py-20 lg:py-0">
            <div className="container mx-auto px-4 py-42 text-center">
                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-headings font-bold text-gray-900 mb-6 leading-tight">
                    Book Your <span className="text-purple-600">FREE</span> Business Consultation
                </h1>

                {/* Sub-headline */}
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                    Not sure which website package is right for you? <br className="hidden md:block" />
                    Talk to our experts and see how we can help your business grow.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <Button href="/contact" variant="primary" className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg shadow-purple-600/20">
                        Book Your Free Consultation
                    </Button>
                    <Button href="/contact" variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4">
                        Get A Free Demo
                    </Button>
                </div>

                {/* Trust Line */}
                <p className="text-sm text-gray-500 mb-12">
                    No pressure. No hidden charges. Just honest advice for your business.
                </p>

                {/* Trust Bullets */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 max-w-4xl mx-auto">
                    {trustBullets.map((bullet, index) => (
                        <div key={index} className="flex items-center justify-center sm:justify-start gap-2 text-gray-700 font-medium">
                            <div className="bg-purple-100 p-1 rounded-full shrink-0">
                                <Check className="w-4 h-4 text-purple-600" />
                            </div>
                            <span className="text-left">{bullet}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
