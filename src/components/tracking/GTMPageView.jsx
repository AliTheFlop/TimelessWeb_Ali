// GTMPageView.tsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GTMPageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (typeof window === "undefined" || !window.dataLayer) return;

        window.dataLayer.push({
            event: "pageview",
            page: pathname + "?" + searchParams.toString(),
        });
    }, [pathname, searchParams]);

    return null;
}
