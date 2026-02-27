
import { getSortedPostsData, getPostData } from "@/lib/blog";
import BlogPostContent from "@/components/BlogPostContent";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;

    if (!resolvedParams?.slug) {
        notFound();
    }

    try {
        const postData = await getPostData(resolvedParams.slug);
        return <BlogPostContent post={postData as any} />;
    } catch (error) {
        console.error(`Error loading post ${resolvedParams.slug}:`, error);
        notFound();
    }
}
