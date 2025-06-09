// src/app/blog/[slug]/page.jsx
import { getPostData, getAllPostIds } from "@/lib/posts";
import { notFound } from "next/navigation";

// SEO: Generate static pages for all posts at build time
export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({ slug: path.params.slug }));
}

// SEO: Generate dynamic metadata for each post
export async function generateMetadata({ params }) {
    try {
        // FIX: Removed incorrect 'await' for params. The 'params' object is not a promise.
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
        // FIX: Removed incorrect 'await' for params.
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
                                {
                                    /* FIX: Formatted the date to be consistent with the blog index page.
                                       This prevents a mismatch between server and client render. */
                                    new Date(postData.date).toLocaleDateString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }
                                    )
                                }
                            </time>
                        </p>
                    </div>

                    <div
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                    />
                </div>
            </div>
        </article>
    );
}
