// src/components/forms/NewsletterSignup.jsx
"use client";
import { useState } from "react";
import FormLabel from "@/components/form/FormLabel";
import Button from "@/components/ui/Button";

export default function NewsletterSignup() {
    const [form, setForm] = useState({ name: "", email: "" });
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setStatus(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("https://api.formspark.io/k2BmGYeHC", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    subject: "Newsletter Signup",
                }),
                redirect: "manual",
            });

            if (res.status === 200 || res.status === 204) {
                setStatus("success");
                setForm({ name: "", email: "" });
            } else {
                setStatus("error");
                console.warn(
                    "⚠️ Unexpected response from Formspark:",
                    res.status
                );
            }
        } catch (error) {
            setStatus("error");
            console.error("❌ Submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg p-8 rounded-lg w-full max-w-2xl mx-auto"
        >
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
                        disabled={loading}
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
                        disabled={loading}
                    />
                </FormLabel>

                <Button type="submit" disabled={loading}>
                    {loading ? "Subscribing..." : "Subscribe"}
                </Button>

                {status === "success" && (
                    <p className="text-green-600 mt-4 text-sm text-center">
                        ✅ Thank you for subscribing!
                    </p>
                )}
                {status === "error" && (
                    <p className="text-red-600 mt-4 text-sm text-center">
                        ❌ Something went wrong. Please try again.
                    </p>
                )}
            </div>
        </form>
    );
}
