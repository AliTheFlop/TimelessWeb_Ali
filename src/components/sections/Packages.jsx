import Link from "next/link";
import Button from "../ui/Button";

export default function Packages() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Our Packages
                    </h2>
                    <p className="text-gray-600">
                        Choose the perfect plan for your business.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Package 1 */}
                    <div className="border rounded-lg p-8 flex flex-col">
                        <h3 className="text-2xl font-bold text-center mb-4">
                            1 Page Website
                        </h3>
                        <p className="text-5xl font-bold text-center mb-4">
                            $149
                        </p>
                        <ul className="mb-8 space-y-4 text-gray-600">
                            <li>- Single-page layout</li>
                            <li>- Contact form</li>
                            <li>- Mobile responsive</li>
                        </ul>
                        <Button href="/contact" className="w-full mt-auto">
                            Get Started
                        </Button>
                    </div>

                    {/* Package 2 */}
                    <div className="border rounded-lg p-8 flex flex-col">
                        <h3 className="text-2xl font-bold text-center mb-4">
                            3 Page Website
                        </h3>
                        <p className="text-5xl font-bold text-center mb-4">
                            $299
                        </p>
                        <ul className="mb-8 space-y-4 text-gray-600">
                            <li>- Up to 3 pages</li>
                            <li>- Includes everything in the 1-page plan</li>
                            <li>- Basic SEO setup</li>
                        </ul>
                        <Button href="/contact" className="w-full mt-auto">
                            Get Started
                        </Button>
                    </div>

                    {/* Package 3 */}
                    <div className="border rounded-lg p-8 flex flex-col">
                        <h3 className="text-2xl font-bold text-center mb-4">
                            5 Page Website
                        </h3>
                        <p className="text-5xl font-bold text-center mb-4">
                            $399
                        </p>
                        <ul className="mb-8 space-y-4 text-gray-600">
                            <li>- Up to 5 pages</li>
                            <li>- Includes everything in the 3-page plan</li>
                            <li>- Blog setup</li>
                        </ul>
                        <Button href="/contact" className="w-full mt-auto">
                            Get Started
                        </Button>
                    </div>
                </div>
                {/* Custom Solution CTA */}
                <div className="text-center mt-12">
                    <div className="border-2 border-purple-600 rounded-lg p-6 inline-block">
                        <h3 className="text-2xl font-bold text-gray-800">
                            Need a custom solution?
                        </h3>
                        <p className="text-gray-600 my-4">
                            We can build a website tailored to your specific
                            needs.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-purple-600 text-white font-semibold px-6 py-3 rounded hover:bg-purple-700 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
