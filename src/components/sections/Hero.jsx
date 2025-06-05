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
                className="relative z-10 space-y-8 max-w-[80%] w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="space-y-6">
                    <motion.h1
                        className="text-5xl md:text-6xl xl:text-7xl font-headings font-medium text-white leading-tight tracking-tighter"
                        variants={itemVariants}
                    >
                        Creating Websites That
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Win Clients
                        </span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-300 max-w-xl"
                        variants={itemVariants}
                    >
                        Whether you need a new website, or want to improve an
                        old one, we approach each of our projects with the
                        passion to strive and push further. Creating
                        high-quality, innovative solutions is what you need, and
                        we're ready for it.
                    </motion.p>
                </div>

                <motion.div variants={itemVariants}>
                    <Button
                        href="/contact"
                        className="group text-base px-8 py-4"
                        fullWidth={false}
                    >
                        Get A Free Quote
                        <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
