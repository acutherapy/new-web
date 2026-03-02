
import { getSortedPostsData } from "@/lib/blog";
import BlogList from "@/components/BlogList";

export default function BlogIndexPage() {
    // This is a Server Component, so we can fetch data here
    const allPosts = getSortedPostsData();

    // Pass data to Client Component for filtering/rendering
    return <BlogList allPosts={allPosts as any} />;
}
