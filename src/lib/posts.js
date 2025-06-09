// src/lib/posts.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// We no longer need remark or remark-html here.
// import { remark } from "remark";
// import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getSortedPostsData() {
    // This function can stay the same
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        return {
            id,
            ...matterResult.data,
        };
    });
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostIds() {
    // This function can also stay the same
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => ({
        params: {
            slug: fileName.replace(/\.md$/, ""),
        },
    }));
}

export async function getPostData(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    // FIX: No more HTML processing. Just return the raw markdown content.
    return {
        id: slug,
        content: matterResult.content, // Changed from contentHtml
        ...matterResult.data,
    };
}
