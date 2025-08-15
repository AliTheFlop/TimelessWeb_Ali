'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../ui/Logo';
import clsx from 'clsx';

export default function Navbar({ isScrolled }) {
    const pathname = usePathname();

    const linkClass = (href, isButton = false) => {
        let classes = `text-white hover:underline transition ${
            pathname === href
                ? 'font-semibold underline underline-offset-4'
                : ''
        }`;
        if (isButton) {
            classes = `bg-white text-purple-600 font-semibold px-4 py-2 rounded hover:bg-purple-100 transition ${
                pathname === href ? 'ring-2 ring-purple-300' : '' // Example active style for button
            }`;
        }
        return classes;
    };

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 z-50 w-full flex items-center justify-center py-4 transition-all duration-300',
                {
                    'bg-black shadow-md': isScrolled,
                    'bg-transparent': !isScrolled,
                }
            )}
        >
            <div className="w-full max-w-[80%] flex items-center justify-between">
                <div className="text-white text-2xl font-bold font-lexend tracking-tight">
                    <Link href="/">
                        <Logo width="120" height="70" className="" />
                    </Link>
                </div>
                <div className="flex items-center gap-6 font-primary">
                    <Link href="/" className={linkClass('/')}>
                        Home
                    </Link>
                    {/* <Link href="/services" className={linkClass("/services")}>
                        Our Services
                    </Link>
                    <Link href="/work" className={linkClass("/work")}>
                        Our Work
                    </Link>
                    <Link href="/about" className={linkClass("/about")}>
                        About Us
                    </Link> */}
                    <Link href="/blog" className={linkClass('/blog')}>
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className={linkClass('/contact', true)}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}
