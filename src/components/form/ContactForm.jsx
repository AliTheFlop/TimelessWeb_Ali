"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import FormLabel from "@/components/form/FormLabel";
import { handleContactFormSubmit } from "@/lib/validation/handleContactForm.js"; // Ensure this import is present

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        contact: "",
        phone: "",
        subject: "",
        websitePackage: "",
        socialMediaPackage: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));

        if (submitStatus) {
            setSubmitStatus(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const validationResult = handleContactFormSubmit(form, "email");

        if (!validationResult.success) {
            console.warn("Validation failed:", validationResult.errors);
            setSubmitStatus({
                type: "error",
                message: "Please correct the errors in the form.",
                errors: validationResult.errors,
            });
            setIsSubmitting(false);
            return;
        }

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
                setForm({
                    name: "",
                    contact: "",
                    phone: "",
                    subject: "",
                    websitePackage: "",
                    socialMediaPackage: "",
                    message: "",
                });
            } else {
                const errorData = await response.json();
                console.error("❌ Formspark submission error:", errorData);
                setSubmitStatus({
                    type: "error",
                    message:
                        "Submission failed. If the issue persists, please try another browser.",
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
            onSubmit={handleSubmit}
            className="bg-white rounded px-5 py-5 w-full max-w-2xl mx-auto"
        >
            {/* Name */}
            <FormLabel htmlFor="name" label="Full Name" hint="">
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    placeholder="Enter your full name"
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

            {/* Email */}
            <FormLabel htmlFor="contact" label="Email Address" hint="">
                <div className="relative">
                    <input
                        id="contact"
                        name="contact"
                        value={form.contact}
                        onChange={handleChange}
                        required
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
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

            {/* Phone (optional) */}
            <FormLabel htmlFor="phone" label="Phone Number (optional)" hint="">
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                    disabled={isSubmitting}
                />
            </FormLabel>

            {/* Service Selection */}
            <FormLabel htmlFor="subject" label="Service Needed" hint="">
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
                    <option value="social-media">
                        Social Media Management
                    </option>
                    <option value="other">Other</option>
                </select>
                {submitStatus?.errors?.subject && (
                    <p className="text-red-500 text-xs mt-1">
                        {submitStatus.errors.subject}
                    </p>
                )}
            </FormLabel>

            {/* Website Package */}
            {form.subject === "web-design" && (
                <FormLabel
                    htmlFor="websitePackage"
                    label="Website Package"
                    hint=""
                >
                    <select
                        id="websitePackage"
                        name="websitePackage"
                        value={form.websitePackage}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                        disabled={isSubmitting}
                    >
                        <option value="" disabled>
                            Select a package
                        </option>
                        <option value="launch">Launch ($149)</option>
                        <option value="grow">Grow ($249)</option>
                        <option value="thrive">Thrive ($399)</option>
                        <option value="scale">Scale ($499+)</option>
                    </select>
                </FormLabel>
            )}

            {/* Social Media Package */}
            {form.subject === "social-media" && (
                <FormLabel
                    htmlFor="socialMediaPackage"
                    label="Social Media Package"
                    hint=""
                >
                    <select
                        id="socialMediaPackage"
                        name="socialMediaPackage"
                        value={form.socialMediaPackage}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                        disabled={isSubmitting}
                    >
                        <option value="" disabled>
                            Select a package
                        </option>
                        <option value="starter">Starter ($69/mo)</option>
                        <option value="growth">Growth ($99/mo)</option>
                        <option value="pro">Pro ($129/mo)</option>
                    </select>
                </FormLabel>
            )}

            {/* Message */}
            <FormLabel htmlFor="message" label="Additional Details" hint="">
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

            {/* Submit Button */}
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {/* Status Message */}
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
