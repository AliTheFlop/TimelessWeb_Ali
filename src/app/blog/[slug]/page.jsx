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
        // Restore `await params` as seen in the working example
        const awaitedParams = await params;
        const postData = await getPostData(awaitedParams.slug);
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
        // Restore `await params` as seen in the working example
        const awaitedParams = await params;
        postData = await getPostData(awaitedParams.slug);
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
                            {/*
                                KEY FIX: Render the raw date string directly.
                                This avoids date manipulation and prevents the
                                server/client mismatch (hydration error).
                            */}
                            <time dateTime={postData.date}>
                                {postData.date}
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
