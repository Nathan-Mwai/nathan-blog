import {client} from "@/sanity/lib/client";
import {BLOG_BY_ID_QUERY} from "@/sanity/lib/queries";
import {notFound} from "next/navigation";
import {formatDate} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import markdownit from 'markdown-it'

const md = markdownit()

const Page = async ({params}: {params : Promise<{id:string}>}) => {
        const id = (await params).id

    const post = await client.fetch(BLOG_BY_ID_QUERY, {id})

    if(!post) return notFound()

    const parsedContent = md.render(post?.idea || "")
    return (
        <>
            <section className="section_container !min-h-[230px] flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <div className="space-y-4 w-full lg:w-1/2">
                    <p className="tag">{formatDate(post?._createdAt)}</p>
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold">{post.title}</h1>
                    <p className="text-base md:text-lg">{post.description}</p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center py-4">
                    <Image 
                        src={post.image} 
                        alt={`${post.title} image`} 
                        width={1000} 
                        height={1000} 
                        className="w-full max-w-[500px] h-auto rounded-lg object-cover"
                    />
                </div>
            </section>

            <section className="section_container">
                <div className={'space-y-5 mt-10 max-w-4xl mx-auto'}>
                    <div className={'flex-between gap-5'}>
                        <Link href={'https://nathanmwai.com'} target={'_blank'} className={'mb-3'}>
                            <div>
                                <p className={'text-16-medium !text-black-300'}>@Nathan Mwai</p>
                            </div>
                        </Link>
                        <p className={'category-tag'}>{post.category}</p>
                    </div>
                    {parsedContent ? (
                        <article
                            className={"prose max-w-4xl text-lg break-all"}
                        dangerouslySetInnerHTML={{ __html: parsedContent }}
                        />
                    ):(
                        <p className={"no-result"}>No details provided</p>
                    )}
                </div>
            </section>
        </>
    )
}
export default Page
