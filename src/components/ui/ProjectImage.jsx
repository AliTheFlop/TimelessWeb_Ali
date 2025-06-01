"use client";

import { useRef, useEffect, useState } from "react";

export default function ProjectImage({ project }) {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        if (containerRef.current && imageRef.current) {
            const containerHeight = containerRef.current.offsetHeight;
            const imageHeight = imageRef.current.offsetHeight;
            const translateValue =
                imageHeight > containerHeight
                    ? imageHeight - containerHeight
                    : 0;

            setTranslateY(translateValue);
        }
    }, [project.id]);

    return (
        <>
            <style jsx>{`
                .project-image-${project.id}:hover .inner-container {
                    transform: translateY(-${translateY}px);
                }
            `}</style>
            <div
                ref={containerRef}
                className={`project-image-${project.id} relative w-full h-full overflow-hidden group shadow-2xl rounded-2xl`}
            >
                <div className="inner-container relative transition-transform duration-[2000ms] ease-in-out">
                    <img
                        ref={imageRef}
                        src={project.imgSrc}
                        alt={`${project.name}'s Website Design`}
                        className="w-full h-auto object-cover object-top"
                    />
                </div>
            </div>
        </>
    );
}
