import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="flex flex-col items-center justify-center bg-purple-600 py-32">
            <div className="w-full max-w-[80%] flex flex-col items-center gap-8 h-auto">
                <h2 className="font-primary text-3xl lg:text-4xl text-center lg:text-left text-white">
                    Let&apos;s Get Your Business Online
                </h2>
                <p className="font-text text-lg text-center lg:text-left text-white">
                    Contact us to get started
                </p>
                <Link
                    href="/contact"
                    type="secondary"
                    className="group text-base px-8 py-4 bg-white text-purple-600 font-semibold rounded hover:bg-purple-100 transition"
                    fullWidth={false}
                >
                    Get A Free Quote
                    <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
}
