"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SmoothScrolling({ children }) {
    const lenis = useLenis();

    useEffect(() => {
        if (lenis) {
            gsap.registerPlugin(ScrollTrigger);

            lenis.on("scroll", ScrollTrigger.update);

            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });

            gsap.ticker.lagSmoothing(0);
        }
    }, [lenis]);

    return (
        <ReactLenis
            root
            options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}
        >
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
