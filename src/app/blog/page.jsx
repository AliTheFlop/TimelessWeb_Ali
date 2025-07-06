// src/app/blog/page.jsx
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export const metadata = {
    title: "Blog | TimelessWeb",
    description:
        "Read our latest articles on web design, business growth, and digital strategy.",
};

export default function BlogIndexPage() {
    const allPosts = getSortedPostsData();

    return (
        <div className="bg-white min-h-screen pt-32 pb-16 px-4 md:px-6">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-primary text-purple-600 mb-3">
                        The Timeless Web Blog
                    </h1>
                    <p className="text-gray-500 text-base">
                        Practical insights on web design and growing your
                        business online.
                    </p>
                </div>

                <div className="space-y-8">
                    {allPosts.map(({ id, date, title, excerpt }) => (
                        <article
                            key={id}
                            className="border border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors"
                        >
                            <h2 className="text-xl font-headings text-purple-700 mb-1">
                                <Link
                                    href={`/blog/${id}`}
                                    className="hover:underline"
                                >
                                    {title}
                                </Link>
                            </h2>
                            <time
                                dateTime={date}
                                className="block text-sm text-gray-400 mb-3"
                            >
                                {date}
                            </time>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {excerpt}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
