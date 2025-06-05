"use client";
import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import useMedia from "use-media";
import Navbar from "@/components/nav/Navbar";
import PocketNav from "@/components/nav/PocketNav";

export default function NavWrapper() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Memoize the media query object to prevent re-creation on every render
    const mediaQuery = useMemo(() => ({ maxWidth: 768 }), []);
    const isMobile = useMedia(mediaQuery);

    useEffect(() => {
        // Define the scroll handler function
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 50);
        };

        // Check if we are on the homepage
        if (pathname === "/") {
            // Set the initial state based on the current scroll position
            handleScroll();

            // Add the scroll event listener
            window.addEventListener("scroll", handleScroll);

            // Return a cleanup function to remove the listener when the component unmounts
            // or when the path changes.
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else {
            // If we are not on the homepage, just set the navbar to the "scrolled" state (purple).
            setIsScrolled(true);
        }
    }, [pathname]); // This effect re-runs whenever the page path changes

    return isMobile ? (
        <PocketNav isScrolled={isScrolled} />
    ) : (
        <Navbar isScrolled={isScrolled} />
    );
}
