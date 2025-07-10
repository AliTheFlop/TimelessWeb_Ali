"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function FacebookPixelEvents() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // The 'fbq' function might not be available immediately
        if (typeof window.fbq !== "function") {
            return;
        }

        // Trigger a page view event whenever the path changes
        window.fbq("track", "PageView");
    }, [pathname, searchParams]);

    return null; // This component doesn't render anything
}
