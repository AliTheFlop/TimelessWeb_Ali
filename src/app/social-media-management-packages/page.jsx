import Button from "@/components/ui/Button";
import { Check, X, Minus } from "lucide-react";

const packagesData = [
    {
        name: "Starter",
        tagline:
            "Perfect for creators or small businesses getting started with consistent posting.",
        price: "$69/mo",
        postsPerWeek: 3,
        platforms: 1,
        features: {
            "Content planning & calendar": true,
            "Hashtag research": true,
            "Weekly analytics reports": true,
            "Community engagement": false,
            "Monthly strategy call": false,
        },
    },
    {
        name: "Growth",
        tagline:
            "Ideal for growing brands ready to build an engaged audience and consistent presence.",
        price: "$99/mo",
        postsPerWeek: 5,
        platforms: 2,
        features: {
            "Content planning & calendar": true,
            "Hashtag research": true,
            "Weekly analytics reports": true,
            "Community engagement": true,
            "Monthly strategy call": true,
        },
    },
    {
        name: "Pro",
        tagline:
            "For ambitious businesses that want strategic growth and high-quality social storytelling.",
        price: "$129/mo",
        postsPerWeek: 7,
        platforms: 3,
        features: {
            "Content planning & calendar": true,
            "Hashtag research": true,
            "Weekly analytics reports": true,
            "Community engagement": true,
            "Monthly strategy call": true,
        },
    },
];

const featureList = [
    "Posts per week",
    "Platforms",
    ...new Set(packagesData.flatMap((pkg) => Object.keys(pkg.features))),
];

export default function SocialMediaManagement() {
    return (
        <section className="bg-white py-32">
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-headings font-bold text-gray-800">
                        Social Media Management Packages
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
                        We'll help you build your social presence so you can
                        focus on your business.
                    </p>
                </div>

                {/* Mobile view */}
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

                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    <span className="font-semibold">
                                        Posts per week:
                                    </span>{" "}
                                    {pkg.postsPerWeek}
                                </p>
                                <p className="font-medium text-gray-700 mb-2">
                                    <span className="font-semibold">
                                        Platforms:
                                    </span>{" "}
                                    {pkg.platforms}
                                </p>

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

                {/* Desktop table */}
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
                                            {feature === "Posts per week" ? (
                                                <span className="text-gray-800 font-semibold">
                                                    {pkg.postsPerWeek}
                                                </span>
                                            ) : feature === "Platforms" ? (
                                                <span className="text-gray-800 font-semibold">
                                                    {pkg.platforms}
                                                </span>
                                            ) : pkg.features[feature] ? (
                                                <Check className="w-5 h-5 text-purple-600 mx-auto" />
                                            ) : (
                                                <X className="w-5 h-5 text-gray-400 mx-auto" />
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}

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
