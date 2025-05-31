"use client";
import clsx from "clsx";
import PropTypes from "prop-types";
import Link from "next/link";

export default function Button({
    children,
    type = "button",
    onClick,
    variant = "primary",
    fullWidth = true,
    className = "",
    href = "#",
    ...props
}) {
    const widthClass = fullWidth ? "w-full" : "w-auto";
    const base =
        "rounded px-8 py-3 font-medium transition text-center font-primary font-extrabold cursor-pointer";

    const variants = {
        primary:
            "bg-purple-600 text-white hover:bg-purple-700 hover:bg-white hover:text-purple-600 hover:ring-purple-600 hover:ring",
        secondary:
            "bg-white text-purple-600 border border-purple-600 hover:bg-purple-700 hover:text-white",
        ghost: "bg-transparent text-gray-600 hover:text-black",
        danger: "bg-red-600 text-white hover:bg-red-700",
        overlay:
            "absolute inset-0 bg-black opacity-75 hover:bg-black active:bg-black focus:outline-none",
    };

    return (
        <Link href={href}>
            <button
                type={type}
                onClick={onClick}
                className={clsx(base, widthClass, variants[variant], className)}
                {...props}
            >
                {children}
            </button>
        </Link>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(["primary", "secondary", "ghost", "danger"]),
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
};
