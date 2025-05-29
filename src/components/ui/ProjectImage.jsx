'use client';

import { useRef, useEffect } from 'react';

export default function ProjectImage({ project }) {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (containerRef.current && imageRef.current) {
            const containerHeight = containerRef.current.offsetHeight; // Height of the outer container (h-96)
            const imageHeight = imageRef.current.offsetHeight; // Full height of the image
            const translateY = imageHeight - containerHeight; // Calculate the difference

            // Set the CSS variable for the translate value
            containerRef.current.style.setProperty(
                '--translate-y',
                `-${translateY}px`
            );
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden group shadow-2xl rounded-2xl"
        >
            {/* Inner container that scrolls */}
            <div className="relative transition-transform duration-2000 ease-in-out group-hover:translate-y-[var(--translate-y)]">
                <img
                    ref={imageRef}
                    src={project.imgSrc}
                    alt={`${project.name}'s Website Design`}
                    className="w-full h-auto object-cover object-top"
                />
            </div>
        </div>
    );
}
