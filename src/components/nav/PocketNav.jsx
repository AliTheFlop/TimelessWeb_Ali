"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "lucide-react";
import Logo from "../ui/Logo";
import clsx from "clsx";

export default function PocketNav({ isScrolled }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    // Function to close menu and then navigate
    const handleLinkClick = (e, href) => {
        // This component doesn't use next/navigation, so we can't use router.push directly here.
        // Next/link handles navigation. We just need to close the menu.
        setIsOpen(false);
    };

    const linkClass = (href, isButton = false) => {
        let classes = `text-white hover:underline transition ${
            pathname === href
                ? "font-semibold underline underline-offset-4"
                : ""
        }`;
        if (isButton) {
            classes = `bg-white text-purple-600 font-semibold px-4 py-2 rounded hover:bg-purple-100 transition ${
                pathname === href ? "ring-2 ring-purple-300" : "" // Example active style for button
            }`;
        }
        return classes;
    };

    return (
        <>
            <div
                className={clsx(
                    "fixed top-0 left-0 right-0 p-4 flex justify-between items-center text-white z-50 transition-colors duration-300",
                    {
                        "bg-purple-600": isScrolled,
                        "bg-transparent": !isScrolled,
                    }
                )}
            >
                <Link href="/">
                    <Logo width="120" height="70" className="" />
                </Link>
                <Button
                    onClick={handleOpen}
                    variant="ghost"
                    fullWidth={false}
                    aria-label="Open menu"
                    className="text-white"
                >
                    <Menu width="32" height="32" />
                </Button>
            </div>

            <div
                className={`fixed top-0 left-0 h-screen w-screen z-50 transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Overlay to close menu */}
                <button
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
                        {/* <Link
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
                        </Link> */}
                        <Link
                            href="/blog"
                            onClick={handleLinkClick}
                            className="text-gray-800 hover:text-purple-600"
                        >
                            Blog
                        </Link>
                        <Link // Changed from <a> to <Link>
                            href="/contact" // Changed href
                            onClick={handleLinkClick}
                            className="bg-white text-purple-600 border border-purple-600 font-semibold px-4 py-2 rounded hover:bg-purple-100 transition" // Matched styling
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
}
