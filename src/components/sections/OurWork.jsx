// src/components/sections/OurWork.jsx
"use client";
import ProjectImage from "../ui/ProjectImage";
import { motion } from "framer-motion";

const projectsComplete = [
    {
        name: "Brooklyn Boy Bagels",
        description: "Providing NYC Bagels In Sydney",
        imgSrc: "/homepage/projects/brooklynboybagels.webp",
        colour: "#A90B81",
        key: 1,
        id: "brooklynboybagels",
    },
    {
        name: "Positive Cables",
        description: "Residential Electrician Contractor In Sydney",
        imgSrc: "/homepage/projects/positivecables.webp",
        colour: "#0B3DA9",
        key: 2,
        id: "positivecables",
    },
    {
        name: "Altus Plumbing",
        description: " A Local Plumber Based in Sydney, Australia",
        imgSrc: "/homepage/projects/altusplumbing.webp",
        colour: "#0BA96C",
        key: 3,
        id: "altusplumbing",
    },
];

export default function OurWork() {
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
            className="flex flex-col items-center justify-center bg-slate-50"
        >
            <div className="w-full max-w-[80%] flex flex-col items-center h-auto my-32">
                <div className="flex flex-col gap-8">
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col gap-2 mb-10"
                    >
                        <h2 className="font-primary text-3xl lg:text-4xl text-center lg:text-left text-purple-600">
                            We&apos;ve Done This Before
                        </h2>
                        <p className="font-text text-lg text-center lg:text-left">
                            Here&apos;s some work we&apos;ve done before to show
                            you we mean business:
                        </p>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        className="grid pb-10 grid-cols-1 gap-y-12 grid-rows-1 gap-x-4 lg:gap-x-12 xl:grid-cols-3 lg:grid-cols-2"
                    >
                        {projectsComplete.map((project) => (
                            <motion.div
                                key={project.key}
                                variants={itemVariants}
                                className={`flex flex-col w-full h-full max-h-[400px] p-8 shadow-xl rounded-2xl`}
                                style={{ backgroundColor: project.colour }}
                            >
                                <ProjectImage project={project} />

                                <div className="text-white flex flex-col gap mt-4 items-center">
                                    <h4 className="font-bold text-base">
                                        {project.name}
                                    </h4>
                                    <p className="text-sm">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
