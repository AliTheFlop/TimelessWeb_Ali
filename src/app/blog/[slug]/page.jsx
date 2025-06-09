// src/app/blog/[slug]/page.jsx
import { getPostData, getAllPostIds } from "@/lib/posts";
import { notFound } from "next/navigation";

// All other functions (generateStaticParams, generateMetadata) remain the same.

// SEO: Generate static pages for all posts at build time
export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({ slug: path.params.slug }));
}

// SEO: Generate dynamic metadata for each post
export async function generateMetadata({ params }) {
    try {
        const postData = await getPostData(params.slug);
        return {
            title: `${postData.title} | TimelessWeb Blog`,
            description: postData.excerpt,
        };
    } catch (error) {
        return {
            title: "Post Not Found",
            description: "This post could not be found.",
        };
    }
}

export default async function Post({ params }) {
    let postData;
    try {
        postData = await getPostData(params.slug);
    } catch (error) {
        notFound();
    }

    return (
        <article className="bg-white min-h-screen py-40 px-4 md:px-6">
            <div className="container mx-auto">
                <div className="prose lg:prose-xl max-w-3xl mx-auto">
                    <div className="border-b pb-4 mb-8">
                        <h1 className="text-4xl md:text-5xl !text-purple-600 font-primary !mb-3">
                            {postData.title}
                        </h1>
                        <p className="text-base !text-gray-500">
                            By {postData.author} on{" "}
                            <time dateTime={postData.date}>
                                {new Date(postData.date).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </time>
                        </p>
                    </div>

                    {/* --- START DIAGNOSTIC TEST --- */}
                    {/* We are commenting out the dangerous part */}
                    {/*
                    <div
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                    />
                    */}

                    {/* And replacing it with this safe placeholder */}
                    <div>
                        <h2>Testing...</h2>
                        <p>
                            If you can see this text after clicking "Read More",
                            it means the navigation worked and the problem is
                            definitely with the HTML content from the markdown
                            file.
                        </p>
                    </div>
                    {/* --- END DIAGNOSTIC TEST --- */}
                </div>
            </div>
        </article>
    );
}
