// src/components/nav/NavWrapper.jsx
"use client";
import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import useMedia from "use-media";
import Navbar from "@/components/nav/Navbar";
import PocketNav from "@/components/nav/PocketNav";

export default function NavWrapper() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // FIX: Add a 'hasMounted' state to prevent rendering on the server.
    const [hasMounted, setHasMounted] = useState(false);

    const mediaQuery = useMemo(() => ({ maxWidth: 768 }), []);
    const isMobile = useMedia(mediaQuery);

    useEffect(() => {
        setHasMounted(true);

        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 50);
        };

        if (pathname === "/") {
            handleScroll();
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else {
            setIsScrolled(true);
        }
    }, [pathname]);

    // FIX: Don't render anything until the component has mounted on the client.
    if (!hasMounted) {
        return null;
    }

    return isMobile ? (
        <PocketNav isScrolled={isScrolled} />
    ) : (
        <Navbar isScrolled={isScrolled} />
    );
}
