import React from 'react'
import {BlogProps} from "@/components/blog/Blog";
import {ArrowRight, ArrowUpRight} from "lucide-react";

const BlogCard = ({id, title, img,time,category}:BlogProps) => {
    return (
        <>
            <div key={id}>
                <div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <div className={'flex items-center justify-between'}>
                            <h1>{title}</h1>
                            <div className={'bg-slate-200 rounded-sm p-1'}>
                            <ArrowRight className={'size-4 stroke-2'}/>
                            {/*<ArrowUpRight/>*/}
                            </div>
                        </div>
                        <div>
                            <p>{category} <span> . </span>{time}min</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogCard
