import "@/lib/fontAwesome.js";
import "@/styles/globals.css";
import PropTypes from "prop-types";
import NavWrapper from "@/components/nav/NavWrapper";
import ContactForm from "@/components/form/ContactForm";

export const metadata = {
    title: "TimelessWeb | Web Design",
    description: "Modern websites tailored for your brand — TimelessWeb.com.au",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="overflow-x-hidden">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="min-h-screen flex flex-col">
                <NavWrapper />
                <main className="flex-grow">{children}</main>

                <footer className="bg-gray-100 w-full">
                    <div className="bg-black w-full px-5 py-5">
                        <p className="font-semibold text-sm text-white text-left">
                            {" "}
                            © {new Date().getFullYear()} TimelessWeb{" "}
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}

RootLayout.propTypes = { children: PropTypes.node.isRequired };
