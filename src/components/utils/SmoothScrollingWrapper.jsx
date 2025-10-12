"use client";

import dynamic from "next/dynamic";

const SmoothScrolling = dynamic(
    () => import("@/components/utils/SmoothScrolling"),
    {
        ssr: false,
    }
);

export default function SmoothScrollingWrapper({ children }) {
    return <SmoothScrolling>{children}</SmoothScrolling>;
}
