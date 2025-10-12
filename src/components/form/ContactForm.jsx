"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import FormLabel from "@/components/form/FormLabel";
import { handleContactFormSubmit } from "@/lib/validation/handleContactForm.js"; // Ensure this import is present

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        contact: "", // This will be treated as email by default by handleContactFormSubmit
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Clear submit status on new input
        if (submitStatus) {
            setSubmitStatus(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Perform local validation first (optional, but good practice)
        // Assuming 'email' as the contactMode, adjust if your form has a toggle for phone/email
        const validationResult = handleContactFormSubmit(form, "email");

        if (!validationResult.success) {
            console.warn("Validation failed:", validationResult.errors);
            // You might want to display these errors to the user
            // For now, we'll just log them and stop submission
            setSubmitStatus({
                type: "error",
                message: "Please correct the errors in the form.",
                errors: validationResult.errors,
            });
            setIsSubmitting(false);
            return;
        }

        // If local validation passes, send to Formspark
        try {
            const response = await fetch("https://api.formspark.io/k2BmGYeHC", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                console.log("✅ Form submitted successfully to Formspark!");
                setSubmitStatus({
                    type: "success",
                    message: "Message sent successfully!",
                });
                // Optionally, reset the form
                setForm({
                    name: "",
                    contact: "",
                    subject: "",
                    message: "",
                });
            } else {
                const errorData = await response.json();
                console.error("❌ Formspark submission error:", errorData);
                setSubmitStatus({
                    type: "error",
                    message: `Submission failed. If the issue persists, please try another browser.
                    }`,
                });
            }
        } catch (error) {
            console.error(
                "❌ Network error or other issue during submission:",
                error
            );
            setSubmitStatus({
                type: "error",
                message: "Network error. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            id="contact-form"
            onSubmit={handleSubmit} // onSubmit handler is used
            className="bg-white rounded px-5 py-5 w-full max-w-2xl mx-auto"
        >
            <FormLabel htmlFor="name" label="Full Name" hint="">
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    placeholder="John Doe"
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                    disabled={isSubmitting}
                />
                {submitStatus?.errors?.name && (
                    <p className="text-red-500 text-xs mt-1">
                        {submitStatus.errors.name}
                    </p>
                )}
            </FormLabel>

            <FormLabel
                htmlFor="contact"
                label="Email Address" // Assuming email, as per handleContactFormSubmit default
                hint=""
            >
                <div className="relative">
                    <input
                        id="contact"
                        name="contact"
                        value={form.contact}
                        onChange={handleChange}
                        required
                        type="email" // Assuming email
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 pr-12"
                        disabled={isSubmitting}
                    />
                </div>
                {submitStatus?.errors?.contact && (
                    <p className="text-red-500 text-xs mt-1">
                        {submitStatus.errors.contact}
                    </p>
                )}
            </FormLabel>

            <FormLabel htmlFor="subject" label="Subject" hint="">
                <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                    disabled={isSubmitting}
                >
                    <option value="" disabled>
                        Select a service
                    </option>
                    <option value="web-design">Web Design</option>
                    <option value="hosting">Hosting</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="other">Other</option>
                </select>
                {submitStatus?.errors?.subject && (
                    <p className="text-red-500 text-xs mt-1">
                        {submitStatus.errors.subject}
                    </p>
                )}
            </FormLabel>

            <FormLabel htmlFor="message" label="Additional Details">
                <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Any details we'd need to consider?"
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                    disabled={isSubmitting}
                />
                {submitStatus?.errors?.message && (
                    <p className="text-red-500 text-xs mt-1">
                        {submitStatus.errors.message}
                    </p>
                )}
            </FormLabel>

            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {submitStatus && (
                <p
                    className={`mt-4 text-sm ${
                        submitStatus.type === "success"
                            ? "text-green-600"
                            : "text-red-600"
                    }`}
                >
                    {submitStatus.message}
                </p>
            )}
        </form>
    );
}
