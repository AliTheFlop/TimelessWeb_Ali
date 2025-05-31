// src/components/nav/PocketNav.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function PocketNav() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    // Function to close menu and then navigate
    const handleLinkClick = (e, href) => {
        // This component doesn't use next/navigation, so we can't use router.push directly here.
        // Next/link handles navigation. We just need to close the menu.
        setIsOpen(false);
    };

    return (
        <>
            <div className="fixed top-0 left-0 right-0 p-4 bg-purple-600 flex justify-between items-center text-white z-50">
                <Button
                    onClick={handleOpen}
                    variant="ghost"
                    fullWidth={false}
                    aria-label="Open menu"
                    className="text-white" // Ensures icon is white
                >
                    <FontAwesomeIcon icon={faBars} />
                </Button>
                <div className="text-xl font-bold font-lexend">TimelessWeb</div>{" "}
                {/* Added font-lexend */}
            </div>

            <div
                className={`fixed top-0 left-0 h-screen w-screen z-50 transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Overlay to close menu */}
                <button // Changed to a button for accessibility and semantics
                    onClick={handleClose}
                    aria-label="Close Menu Overlay"
                    className="absolute inset-0 bg-black opacity-75 w-full h-full cursor-default" // Simplified overlay button
                ></button>

                <div className="relative bg-white h-full w-4/5 max-w-sm p-6 shadow-lg z-[51]">
                    {" "}
                    {/* Increased z-index */}
                    <Button
                        onClick={handleClose}
                        variant="ghost"
                        fullWidth={false}
                        aria-label="Close menu"
                        className="self-end text-2xl absolute top-4 right-4 text-gray-700 hover:text-black" // Positioned close button
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>
                    <nav className="flex flex-col gap-6 mt-16 text-lg font-medium font-primary">
                        {" "}
                        {/* Added font-primary and mt */}
                        <Link
                            href="/"
                            onClick={handleLinkClick}
                            className="text-gray-800 hover:text-purple-600"
                        >
                            Home
                        </Link>
                        <Link
                            href="/services"
                            onClick={handleLinkClick}
                            className="text-gray-800 hover:text-purple-600"
                        >
                            Our Services
                        </Link>
                        <Link
                            href="/work"
                            onClick={handleLinkClick}
                            className="text-gray-800 hover:text-purple-600"
                        >
                            Our Work
                        </Link>
                        <Link
                            href="/about"
                            onClick={handleLinkClick}
                            className="text-gray-800 hover:text-purple-600"
                        >
                            About Us
                        </Link>
                        <Link // Changed from <a> to <Link>
                            href="/contact" // Changed href
                            onClick={handleLinkClick}
                            className="text-purple-600 font-semibold hover:underline" // Matched styling
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
}
