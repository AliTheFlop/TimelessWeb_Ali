import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
    title: "Thank You | Timeless Web",
    description: "Thank you for contacting us.",
};

export default function ThankYouPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold font-headings text-gray-900 md:text-5xl">
                Thank You!
            </h1>
            <p className="mb-8 max-w-md text-lg text-gray-600">
                We&apos;ve received your message and will be in touch shortly.
            </p>
            <Button href="/" variant="primary" fullWidth={false} className="w-full sm:w-auto px-8">
                Back to Home
            </Button>
        </main>
    );
}
