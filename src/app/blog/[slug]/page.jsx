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
        <div className="bg-white min-h-screen pt-32 pb-16 px-4 md:px-6">
            <div className="container mx-auto max-w-3xl">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm px-6 md:px-10 py-10 md:py-14">
                    <article
                        className="prose prose-base md:prose-lg prose-neutral max-w-none 
            prose-headings:font-primary 
            prose-headings:text-purple-600 
            prose-p:text-gray-800 
            prose-a:text-purple-600 hover:prose-a:underline 
            prose-strong:text-purple-600 
            prose-li:marker:text-purple-600"
                    >
                        <h1>{postData.title}</h1>

                        <p className="text-sm text-gray-500">
                            By {postData.author} ·{" "}
                            <time dateTime={postData.date}>
                                {postData.date}
                            </time>
                        </p>

                        <hr className="my-6 border-gray-200" />

                        <ReactMarkdown>{postData.content}</ReactMarkdown>
                    </article>
                </div>
            </div>
        </div>
    );
}
