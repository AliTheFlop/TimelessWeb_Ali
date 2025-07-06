// src/components/sections/FinalCTA.jsx
"use client";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center py-32 bg-slate-50 inset-shadow-sm"
        >
            <div className="w-full max-w-[80%] flex flex-col items-center gap-8 h-auto text-purple-600">
                <h2 className="font-primary font-bold text-3xl lg:text-4xl text-center lg:text-left ">
                    Let&apos;s Build Something You&apos;re Proud To Share.
                </h2>
                <p className="font-text text-lg text-center lg:text-left ">
                    Get a clean, modern site built around your vision - with
                    clear communication every step of the way.
                </p>
                <Button
                    href="/contact"
                    className="group text-base px-8 py-4"
                    fullWidth={false}
                >
                    Get A Free Quote
                    <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </motion.section>
    );
}
