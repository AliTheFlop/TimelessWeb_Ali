// src/app/contact/page.jsx
import ContactForm from "@/components/form/ContactForm";

export const metadata = { title: "Contact Us | TimelessWeb" };

export default function ContactPage() {
    return (
        <div className="container min-h-screen mx-auto py-40 px-4 md:px-6">
            <div className="mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-primary font-medium leading-tight mb-4 text-purple-600">
                        Would you like to know what we can do for you?
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-text">
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
