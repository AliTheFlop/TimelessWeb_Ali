"use client";

import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function AnimateOnScroll({
    children,
    delay = 0,
    duration = 0.5,
    y = 20,
}) {
    const variants = {
        hidden: { opacity: 0, y: y },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration,
                delay,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}

AnimateOnScroll.propTypes = {
    children: PropTypes.node.isRequired,
    delay: PropTypes.number,
    duration: PropTypes.number,
    y: PropTypes.number,
};
