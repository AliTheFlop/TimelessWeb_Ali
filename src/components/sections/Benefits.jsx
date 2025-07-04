// src/components/sections/Benefits.jsx
"use client";
import { AppWindowMac, Cog, GlobeLock } from "lucide-react";
import { motion } from "framer-motion";

export default function Benefits() {
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
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex flex-col items-center justify-center bg-slate-50 py-32"
        >
            <div className="w-full max-w-[80%] flex flex-col items-center h-auto">
                <div className="flex flex-col gap-8">
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col gap-2 mb-10"
                    >
                        <h2 className="font-primary text-3xl lg:text-4xl text-center lg:text-left text-purple-600">
                            We Save You Time & Effort
                        </h2>
                        <p className="font-text text-lg text-center lg:text-left">
                            There&apos;s no need to learn technical mumbo jumbo.
                            We&apos;re here to do it for you.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 gap-y-12 grid-rows-1 gap-x-4 lg:gap-x-12 xl:grid-cols-3 lg:grid-cols-2"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="border-purple-600 bg-white shadow-xl border flex flex-col items-center justify-center px-8 py-12 min-h-80 rounded-xl"
                        >
                            <AppWindowMac className="w-12 h-12 text-purple-600" />
                            <h3 className="font-medium font-headings text-2xl text-center mt-2">
                                Hosting
                            </h3>
                            <p className="font-text text-center  pt-4">
                                Your website will be online 24/7 with a 99%
                                uptime guarantee.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="border-purple-600  bg-white shadow-xl border flex flex-col items-center justify-center px-8 py-12 rounded-xl"
                        >
                            <Cog className="w-12 h-12 text-purple-600" />
                            <h3 className="font-medium font-headings text-2xl text-center mt-2">
                                Maintenance
                            </h3>
                            <p className="font-text text-center pt-4">
                                You run your business, we handle the website.
                                Includes content & security updates.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="border-purple-600  bg-white shadow-xl border flex flex-col items-center justify-center px-8 py-12 rounded-xl"
                        >
                            <GlobeLock className="w-12 h-12 text-purple-600" />
                            <h3 className="font-medium font-headings text-2xl text-center mt-2">
                                Security
                            </h3>
                            <p className="font-text text-center  pt-4">
                                Get enterprise-grade security to keep hackers{" "}
                                <span className="italic">out</span> of your
                                business.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
