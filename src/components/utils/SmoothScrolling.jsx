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

            const handleScroll = () => ScrollTrigger.update();
            lenis.on("scroll", handleScroll);

            const tickerCallback = (time) => {
                lenis.raf(time * 1000);
            };

            gsap.ticker.add(tickerCallback);
            gsap.ticker.lagSmoothing(0);

            return () => {
                lenis.off("scroll", handleScroll);
                gsap.ticker.remove(tickerCallback);
                gsap.ticker.lagSmoothing(1000, 16);
            };
        }
        return undefined;
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
