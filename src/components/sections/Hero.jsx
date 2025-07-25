"use client";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
export default function HeroSection() {
    const [showBg, setShowBg] = useState(false);

    useEffect(() => {
        setShowBg(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="relative flex items-center justify-center min-h-screen w-full bg-[#030303] py-24 px-4">
            <div
                className={`animated-glow absolute inset-0 z-0 pointer-events-none${
                    showBg ? " visible" : ""
                }`}
            ></div>
            <motion.div
                className="relative z-10 space-y-8 max-w-[80%] w-full flex flex-col items-center justify-center md:block"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="space-y-6">
                    <motion.h1
                        className="text-5xl md:text-6xl max-w-3xl text-center md:text-left font-headings font-medium text-white leading-tight tracking-tighter"
                        variants={itemVariants}
                    >
                        Making Your Business Look <br />{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Professional{" "}
                        </span>
                        Online.
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-300 text-center md:text-left max-w-xl"
                        variants={itemVariants}
                    >
                        We help small business owners turn their vision into a
                        stunning, modern website that builds trust with their
                        audience.
                    </motion.p>
                </div>

                <motion.div variants={itemVariants} className="mt-12  md:mt-24">
                    <Button
                        href="/contact"
                        className="group text-base px-8 py-4"
                        fullWidth={false}
                    >
                        Contact Us
                        <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
