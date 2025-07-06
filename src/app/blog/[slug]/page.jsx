// src/app/blog/[slug]/page.jsx
import { getPostData, getAllPostIds } from "@/lib/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({ slug: path.params.slug }));
}

export async function generateMetadata({ params }) {
    try {
        const postData = await getPostData(params.slug);
        return {
            title: `${postData.title} | Timeless Web - Sydney Web Designer`,
            description: postData.excerpt,
        };
    } catch {
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
        <article className="bg-white min-h-screen py-28 px-4 md:px-6">
            <div className="container mx-auto max-w-2xl">
                <header className="mb-8">
                    <h1 className="text-3xl text-purple-700 font-primary mb-2">
                        {postData.title}
                    </h1>
                    <p className="text-sm text-gray-500">
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
                </header>

                <div className="prose prose-neutral max-w-none">
                    <ReactMarkdown>{postData.content}</ReactMarkdown>
                </div>
            </div>
        </article>
    );
}
