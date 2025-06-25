import React from 'react'
import BlogCard from "@/components/blog/Blog-Card";
export interface BlogProps {
    title: string;
    id: number;
   img: string;
   time: string;
   category: string;
}

const BlogData:BlogProps[] = [
    {
        id:1,
        img:"https://images.unsplash.com/photo-1750672951701-b9dcb289ea29?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:'Temples',
        time:'5',
        category:'Full Stack',
    },{
        id:2,
        img:"https://images.unsplash.com/photo-1750672951701-b9dcb289ea29?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:'Temples',
        time:'5',
        category:'Full Stack',
    },{
        id:3,
        img:"https://images.unsplash.com/photo-1750672951701-b9dcb289ea29?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:'Temples',
        time:'5',
        category:'Full Stack',
    },
]

const Blog = () => {
    return (
        <>
            <div>
                <div className={'grid auto-rows-min gap-4 md:grid-cols-3'}>
                    {BlogData.map(({id, img, title, time, category}:BlogProps) => (
                        <BlogCard
                            key={id}
                            id={id}
                            img={img}
                            title={title}
                            time={time}
                            category={category}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Blog
