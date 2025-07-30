import {formatDate} from "@/lib/utils";
import {EyeIcon} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";

const BlogCard = ({post}:{post:BlogTypeCard}) => {
    const {_createdAt, views, category,title,_id, image,description } = post;
    return (
        <li className={'blog-card group'}>
            <div className={'flex-between'}>
                <p className={'blog-card_date'}>
                    {formatDate(_createdAt)}
                </p>
                <div className={'flex gap-1.5'}>
                    <EyeIcon className={'size-6 text-primary'} />
                    <span className={'text-16-medium'}>{views}</span>
                </div>
            </div>
            <div className={'flex-between mt-5 gap-5'}>
                <div className={'flex-1'}>
                    <Link href={'https://nathanmwai.com'} target={'_blank'}>
                        <p className={'text-16-medium line-clamp-1'}>Nathan Mwai</p>
                    </Link>
                    <Link href={`/blog/${_id}`}>
                        <h3 className={'text-26-semibold line-clamp-1'}>{title}</h3>
                    </Link>
                </div>
            </div>
            <Link href={`/blog/${_id}`}>
                <p className={'blog-card_desc'}>
                    {description}
                </p>
                <Image src={image} alt={"blogImage"} width={400} height={400} className={'blog-card_img'}/>
            </Link>
            <div className={'flex-between gap-3 mt-5'}>
                <Link href={`/?query=${category.toLowerCase()}`}>
                    <p className={'text-16-medium'}>{category}</p>
                </Link>
                <Button className={"blog-card_btn"} asChild>
                    <Link href={`/blog/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}
export default BlogCard
