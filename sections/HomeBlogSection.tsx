import BlogCard from "@/components/BlogCard";

const HomeBlogSection = () => {
    const posts = [{
        _createdAt: new Date(),
        views:55,
        _id:1,
        description: "This is a description",
        image:"https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category:"Go touch Grass",
        title:"Grass"
    }]
    return (
        <section className={'h-screen section_container'}>
            <p className={'text-30-semibold'}>All Posts</p>
            <ul className={'mt-7 card_grid'}>
                {posts.map((post:BlogCardType, index) => (
                    <BlogCard key={post?._id} post={post}/>
                ))}
            </ul>
        </section>
    )
}
export default HomeBlogSection
