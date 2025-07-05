// src/components/forms/NewsletterSignup.jsx
"use client";
import { useState } from "react";
import FormLabel from "@/components/form/FormLabel";
import Button from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

const FORMSPARK_FORM_ID = "k2BmGYeHC";

export default function NewsletterSignup() {
    const [form, setForm] = useState({ name: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const res = await fetch(
                `https://api.formspark.io/${FORMSPARK_FORM_ID}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        ...form,
                        subject: "Newsletter Signup",
                    }),
                }
            );

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.message || "Something went wrong.");
            }

            setIsSubmitted(true);
            setForm({ name: "", email: "" });
        } catch (err) {
            console.error("Submission error:", err);
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-white rounded-lg p-8 text-center shadow-lg max-w-xl mx-auto">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                    Thanks for signing up!
                </h3>
                <p className="text-gray-600 mb-4">
                    You’ll get the next newsletter when it drops.
                </p>
                <Button
                    variant="outline"
                    onClick={() => {
                        setIsSubmitted(false);
                        setError(null);
                    }}
                >
                    Sign Up Again
                </Button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg p-8 rounded-lg w-full max-w-2xl mx-auto"
        >
            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                    Error: {error}
                </div>
            )}

            <div className="space-y-6">
                <FormLabel htmlFor="name" label="Full Name">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="mt-1 block w-full border border-gray-300 rounded px-4 py-2"
                        disabled={isSubmitting}
                    />
                </FormLabel>

                <FormLabel htmlFor="email" label="Email Address">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="mt-1 block w-full border border-gray-300 rounded px-4 py-2"
                        disabled={isSubmitting}
                    />
                </FormLabel>

                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
            </div>
        </form>
    );
}
