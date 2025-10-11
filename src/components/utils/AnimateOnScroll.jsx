"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimateOnScroll({ children, className }) {
    const ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const element = ref.current;

        if (!element) {
            return undefined;
        }

        const animation = gsap.fromTo(
            element,
            {
                opacity: 0,
                y: 50, // Start 50px below its final position
            },
            {
                opacity: 1,
                y: 0,
                duration: 1, // Animation duration of 1 second
                ease: "power3.out", // A nice easing function
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
                    end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
                    toggleActions: "play none none none", // Play the animation once when it enters the viewport
                },
            }
        );

        return () => {
            animation.scrollTrigger?.kill();
            animation.kill();
        };
    }, []);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
