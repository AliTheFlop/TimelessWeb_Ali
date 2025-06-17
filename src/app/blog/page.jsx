// src/app/blog/page.jsx
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import Button from "@/components/ui/Button";

export const metadata = {
    title: "Blog | TimelessWeb",
    description:
        "Read our latest articles on web design, business growth, and digital strategy.",
};

export default function BlogIndexPage() {
    const allPosts = getSortedPostsData();

    return (
        <div className="bg-slate-50 min-h-screen py-40 px-4 md:px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-primary font-medium leading-tight mb-4 text-purple-600">
                        The Timeless Web Blog
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-text">
                        Insights on web design, development, and growing your
                        business online.
                    </p>
                </div>

                <div className="space-y-12">
                    {allPosts.map(({ id, date, title, excerpt }) => (
                        <article
                            key={id}
                            className="bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105"
                        >
                            <h2 className="text-3xl font-headings text-purple-600 mb-2">
                                <Link
                                    href={`/blog/${id}`}
                                    className="hover:underline "
                                >
                                    {title}
                                </Link>
                            </h2>
                            <div className="text-sm text-gray-500 mb-4">
                                <time dateTime={date}>
                                    {new Date(date).toLocaleDateString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }
                                    )}
                                </time>
                            </div>
                            <p className="font-text text-gray-700 leading-relaxed mb-6">
                                {excerpt}
                            </p>
                            <Button
                                href={`/blog/${id}`}
                                variant="secondary"
                                fullWidth={false}
                                prefetch={false}
                            >
                                Read More
                            </Button>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
