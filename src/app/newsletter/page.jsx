// src/app/newsletter/page.jsx
import NewsletterSignup from "@/components/form/NewsletterSignup";

export const metadata = {
    title: "Newsletter Signup | TimelessWeb",
    description:
        "Join our newsletter to get practical web marketing tips, no fluff.",
};

export default function NewsletterPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-16 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-headings font-semibold text-purple-600 mb-4">
                    The Ultimate Website Newsletter
                </h1>
                <p className="text-lg text-gray-600 font-text">
                    High-value and actionable website advice. Get tips to help
                    you make your website speak directly to your customers.
                </p>
            </div>
            <NewsletterSignup />
        </div>
    );
}
