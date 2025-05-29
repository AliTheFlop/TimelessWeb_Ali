'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import FormLabel from '@/components/form/FormLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { handleContactFormSubmit } from '@/lib/validation/handleContactForm.js';

export default function ContactForm() {
    const [contactMode, setContactMode] = useState('email');
    const isEmail = contactMode === 'email';

    const toggleContactMode = () => {
        setContactMode((prev) => (prev === 'email' ? 'phone' : 'email'));
    };

    const [form, setForm] = useState({
        name: '', contact: '', subject: '', message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = handleContactFormSubmit(form, contactMode);
        if (!result.success) { console.warn('Validation failed:', result.errors); }
    };

    return (
        <form id="contact-form" onSubmit={handleSubmit} className="bg-white shadow-md rounded px-5 py-5 w-full max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>

            <FormLabel htmlFor="name" label="Full Name" hint="What do we call you?">
                <input
                    id="name" name="name" type="text" value={form.name} 
                    placeholder='Jack Jones' onChange={handleChange} required
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                />
            </FormLabel>

            <FormLabel htmlFor="contact" label={isEmail ? "Email Address" : "Mobile Number"}>
                <div className="relative">
                    <input
                        id="contact" name="contact" value={form.contact} onChange={handleChange} required
                        type={isEmail ? 'email' : 'tel'}
                        autoComplete={isEmail ? 'email' : 'tel'}
                        placeholder={isEmail ? 'you@example.com' : '0400 000 000'}
                        className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 pr-12"
                    />

                    <button
                        title={`Switch to ${isEmail ? 'mobile' : 'email'} input`}
                        type="button" onClick={toggleContactMode} aria-label="Toggle contact input mode"
                        className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-black transition cursor-pointer"
                    >

                        <FontAwesomeIcon icon={isEmail ? faEnvelope : faPhone} className="text-xl" />
                    </button>
                </div>

                <div className="w-full text-center">
                    <Button
                        onClick={toggleContactMode} variant="ghost" fullWidth={false}
                        className="text-xs underline mt-1"
                    >
                        Prefer to use your {isEmail ? 'phone' : 'email'}? Click here
                    </Button>
                </div>
            </FormLabel>

            <FormLabel htmlFor="subject" label="Subject" hint="What can we do for you?">
                <select
                    id="subject" name="subject" value={form.subject} onChange={handleChange} required
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                >
                    <option value="" disabled>Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="hosting">Hosting</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="other">Other</option>
                </select>
            </FormLabel>

            <FormLabel htmlFor="message" label="Additional Details">
                <textarea
                    id="message" name="message" value={form.message} onChange={handleChange} rows={5} required
                    placeholder="Any details we'd need to consider?"
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                />
            </FormLabel>

            <Button type="submit"> Send Message </Button>
        </form>
    );
}