import {defineQuery} from "groq";

export const BLOG_QUERY = defineQuery(`*[_type=="blog" && defined(slug.current)] | order(_createdAt desc){
  _id,
  title,
  slug,
  _createdAt,
  views,
  description,
  category,
  image,
  idea
}`)