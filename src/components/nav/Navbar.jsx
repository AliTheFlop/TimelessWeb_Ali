'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const linkClass = (href) =>
        `text-white hover:underline transition ${
            pathname === href
                ? 'font-semibold underline underline-offset-4'
                : ''
        }`;

    return (
        <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-center py-4 bg-purple-600 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-full max-w-7/8 flex items-center justify-between">
                <div className="text-white text-2xl font-bold font-lexend tracking-tight">
                    <Link href="/">Timeless Web</Link>
                </div>

                <div className="flex items-center gap-6 font-primary">
                    <Link href="/" className={linkClass('/')}>
                        Home
                    </Link>
                    <Link href="/services" className={linkClass('/services')}>
                        Our Services
                    </Link>
                    <Link href="/work" className={linkClass('/work')}>
                        Our Work
                    </Link>
                    <Link href="/about" className={linkClass('/about')}>
                        About Us
                    </Link>
                    <a
                        href="#contact-form"
                        className="bg-white text-purple-600 font-semibold px-4 py-2 rounded hover:bg-purple-100 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
}
