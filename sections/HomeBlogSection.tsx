import BlogCard, {BlogTypeCard} from "@/components/BlogCard";
import {client} from "@/sanity/lib/client";
import {BLOG_QUERY} from "@/sanity/lib/queries";

const HomeBlogSection = async () => {

    const posts = await client.fetch(BLOG_QUERY)

    console.log(JSON.stringify(posts, null,2))
    return (
        <section className={'h-screen section_container'}>
            <p className={'text-30-semibold'}>All Posts</p>
            <ul className={'mt-7 card_grid'}>
                {posts.map((post:BlogTypeCard) => (
                    <BlogCard key={post?._id} post={post}/>
                ))}
            </ul>
        </section>
    )
}
export default HomeBlogSection
