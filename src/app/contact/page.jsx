// src/app/contact/page.jsx
import ContactForm from "@/components/form/ContactForm";

export const metadata = { title: "Contact Us | TimelessWeb" };

export default function ContactPage() {
    return (
        <div className="container min-h-screen mx-auto py-32 px-4 md:px-6">
            <div className="mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-headings font-bold mb-4 text-gray-800">
                        Would you like to know what we can do for you?
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Fill out the form below and we will contact you within
                        24 hours.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
