import Button from "../ui/Button";
import { Check, X, Minus } from "lucide-react";

const packagesData = [
    {
        name: "Launch",
        tagline:
            "Perfect for one-page portfolios or landing pages. Delivered within 5 business days.",
        price: "$149",
        pages: 1,
        revisions: 1,
        pricePerExtraPage: null,
        features: {
            "Mobile responsive design": true,
            "Professional content writing": true,
            "Stock images included": true,
            "Free email support": true,
            "Contact form": true,
            "Basic SEO setup": false,
        },
    },
    {
        name: "Grow",
        tagline:
            "Ideal for small businesses that need a professional online presence. Delivered within 7 business days.",
        price: "$249",
        pages: 3,
        revisions: 2,
        pricePerExtraPage: "$50/page",
        features: {
            "Mobile responsive design": true,
            "Professional content writing": true,
            "Stock images included": true,
            "Free email support": true,
            "Contact form": true,
            "Basic SEO setup": true,
        },
    },
    {
        name: "Thrive",
        tagline:
            "For growing brands ready to level up their online experience. Delivered within 7 business days.",
        price: "$399",
        pages: 6,
        revisions: 3,
        pricePerExtraPage: "$40/page",
        features: {
            "Mobile responsive design": true,
            "Professional content writing": true,
            "Stock images included": true,
            "Free email support": true,
            "Contact form": true,
            "Basic SEO setup": true,
        },
    },
    {
        name: "Scale",
        tagline:
            "Custom solutions for ambitious businesses and evolving brands.",
        price: "$499+",
        pages: "Unlimited",
        revisions: "To Be Discussed",
        pricePerExtraPage: "To Be Discussed",
        features: {
            "Mobile responsive design": true,
            "Professional content writing": true,
            "Stock images included": true,
            "Free email support": true,
            "Contact form": true,
            "Basic SEO setup": true,
            "Blog setup": true,
            "Website strategy session": true,
        },
    },
];

const featureList = [
    "Pages",
    "Revisions",
    "Price per extra page",
    ...new Set(packagesData.flatMap((pkg) => Object.keys(pkg.features))),
];

export default function Packages() {
    return (
        <section className="bg-white py-32">
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-headings font-bold text-gray-800">
                        Website Packages
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
                        Compare features and choose the perfect plan for your
                        business.
                    </p>
                </div>

                {/* Mobile view: stacked cards */}
                <div className="grid gap-8 md:hidden">
                    {packagesData.map((pkg, idx) => (
                        <div
                            key={idx}
                            className="border border-gray-200 rounded-2xl shadow-sm p-6 text-center flex flex-col items-center"
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-1">
                                {pkg.name}
                            </h3>
                            <p className="text-purple-600 text-2xl font-bold mb-2">
                                {pkg.price}
                            </p>
                            <p className="text-sm text-gray-500 mb-4">
                                {pkg.tagline}
                            </p>

                            <div className="mb-6 ">
                                <p className="font-medium text-gray-700 mb-2">
                                    <span className="font-semibold">
                                        Pages:
                                    </span>{" "}
                                    {pkg.pages}
                                </p>
                                <p className="font-medium text-gray-700 mb-2">
                                    <span className="font-semibold">
                                        Revisions:
                                    </span>{" "}
                                    {pkg.revisions}
                                </p>
                                {pkg.pricePerExtraPage && (
                                    <p className="font-medium text-gray-700 mb-2">
                                        <span className="font-semibold">
                                            Extra page:
                                        </span>{" "}
                                        {pkg.pricePerExtraPage}
                                    </p>
                                )}

                                <ul className="mt-4 space-y-2">
                                    {Object.entries(pkg.features).map(
                                        ([feature, enabled]) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-2 text-sm text-gray-700"
                                            >
                                                {enabled ? (
                                                    <Check className="w-4 h-4 text-purple-600" />
                                                ) : (
                                                    <X className="w-4 h-4 text-gray-400" />
                                                )}
                                                {feature}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <Button
                                href="/contact"
                                className="w-full"
                                variant="secondary"
                            >
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Desktop view: comparison table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200 text-center">
                        <thead>
                            <tr>
                                <th className="border border-gray-200 p-4 text-left bg-gray-50 font-semibold">
                                    Features
                                </th>
                                {packagesData.map((pkg, idx) => (
                                    <th
                                        key={idx}
                                        className="border border-gray-200 p-4 bg-gray-50"
                                    >
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold text-lg text-gray-800">
                                                {pkg.name}
                                            </span>
                                            <span className="text-purple-600 text-xl font-bold">
                                                {pkg.price}
                                            </span>
                                            <span className="text-sm text-gray-500 mt-1">
                                                {pkg.tagline}
                                            </span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {featureList.map((feature, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    <td className="border border-gray-200 p-4 text-left font-medium text-gray-700">
                                        {feature}
                                    </td>
                                    {packagesData.map((pkg, j) => (
                                        <td
                                            key={j}
                                            className="border border-gray-200 p-4 align-middle"
                                        >
                                            {feature === "Pages" ? (
                                                <span className="text-gray-800 font-semibold">
                                                    {pkg.pages}
                                                </span>
                                            ) : feature === "Revisions" ? (
                                                <span className="text-gray-800 font-semibold">
                                                    {pkg.revisions}
                                                </span>
                                            ) : feature ===
                                              "Price per extra page" ? (
                                                pkg.pricePerExtraPage ? (
                                                    <span className="text-gray-800 font-semibold">
                                                        {pkg.pricePerExtraPage}
                                                    </span>
                                                ) : (
                                                    <Minus className="w-5 h-5 text-gray-300 mx-auto" />
                                                )
                                            ) : pkg.features[feature] ? (
                                                <Check className="w-5 h-5 text-purple-600 mx-auto" />
                                            ) : (
                                                <X className="w-5 h-5 text-gray-400 mx-auto" />
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}

                            {/* Buttons row */}
                            <tr>
                                <td className="border border-gray-200 p-4 bg-gray-50"></td>
                                {packagesData.map((pkg, i) => (
                                    <td
                                        key={i}
                                        className="border border-gray-200 p-4 bg-gray-50"
                                    >
                                        <Button
                                            href="/contact"
                                            className="w-full whitespace-nowrap"
                                            variant="secondary"
                                        >
                                            Get Started
                                        </Button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
