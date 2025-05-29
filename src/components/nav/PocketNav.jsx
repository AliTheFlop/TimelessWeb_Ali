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

    return (
        <>
            <div className="fixed top-0 left-0 right-0 p-4 bg-purple-600 flex justify-between items-center text-white z-50">
                <Button
                    onClick={handleOpen}
                    variant="ghost"
                    fullWidth={false}
                    aria-label="Open menu"
                    className="text-white"
                >
                    <FontAwesomeIcon icon={faBars} />
                </Button>
                <div className="text-xl font-bold">TimelessWeb</div>
            </div>

            <div
                className={`fixed top-0 left-0 h-screen w-screen z-50 transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <Button
                    onClick={handleClose}
                    variant="overlay"
                    fullWidth={false}
                    aria-label="Close Menu Overlay"
                ></Button>

                <div className="relative bg-white h-full w-4/5 max-w-sm p-6 shadow-lg z-50">
                    <Button
                        onClick={handleClose}
                        variant="ghost"
                        fullWidth={false}
                        aria-label="Close menu"
                        className="self-end text-2xl"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>

                    <nav className="flex flex-col gap-6 mt-10 text-lg font-medium">
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link href="/services" onClick={() => setIsOpen(false)}>
                            Our Services
                        </Link>
                        <Link href="/work" onClick={() => setIsOpen(false)}>
                            Our Work
                        </Link>
                        <Link href="/about" onClick={() => setIsOpen(false)}>
                            About Us
                        </Link>
                        <a
                            href="#contact-form"
                            onClick={() => setIsOpen(false)}
                            className="text-purple-600"
                        >
                            Contact Us
                        </a>
                    </nav>
                </div>
            </div>
        </>
    );
}
