import Link from "next/link";
import Button from "../ui/Button";
import { Check, X, Minus } from "lucide-react";

const packagesData = [
    {
        name: "1 Page Website",
        price: "$149",
        pages: 1,
        revisions: 1,
        pricePerExtraPage: null,
        features: {
            "Mobile responsive": true,
            "Professional content writing": true,
            "Stock images included": true,
            "Free email support": true,
            "Contact form": false,
            "Basic SEO setup": false,
            "Blog setup": false,
        },
    },
    {
        name: "3 Page Website",
        price: "$299",
        pages: 3,
        revisions: 2,
        pricePerExtraPage: "$50/page",
        features: {
            "Mobile responsive": true,
            "Professional content writing": true,
            "Stock images included": true,
            "Free email support": true,
            "Contact form": true,
            "Basic SEO setup": true,
            "Blog setup": false,
        },
    },
    {
        name: "5 Page Website",
        price: "$499",
        pages: 5,
        revisions: 3,
        pricePerExtraPage: "$40/page",
        features: {
            "Mobile responsive": true,
            "Professional content writing": true,
            "Stock images included": true,
            "Free email support": true,
            "Contact form": true,
            "Basic SEO setup": true,
            "Blog setup": false,
        },
    },
    {
        name: "Custom Website",
        price: "$499+",
        pages: "Unlimited",
        revisions: "To Be Discussed",
        pricePerExtraPage: "To Be Discussed",
        features: {
            "Mobile responsive": true,
            "Professional content writing": true,
            "Stock images included": true,
            "Free email support": true,
            "Contact form": true,
            "Basic SEO setup": true,
            "Blog setup": true,
        },
    },
];

// all rows to show in order
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
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-headings font-bold text-gray-800 mb-3">
                        Our Packages
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Compare features and choose the perfect plan for your
                        business.
                    </p>
                </div>

                {/* Pricing Table */}
                <div className="overflow-x-auto">
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
                                            className="w-full"
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
