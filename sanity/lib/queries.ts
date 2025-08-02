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
}`)

export const BLOG_BY_ID_QUERY = defineQuery(
    `*[_type == 'blog' && _id == $id][0]{
  _id,
  title,
  slug,
  _createdAt,
  views,
  description,
  category,
  image,
  idea,
}`
)