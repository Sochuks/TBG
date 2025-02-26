import {defineCollection, z} from "astro:content";

const blogCollection = defineCollection({
    type:"content",
    schema:z.object({
        title: z.string(),
        excerpt: z.string(),
        pubDate: z.date(),
        author: z.string(),
        authorImage: z.string(),
        image: z.string(),
        category: z.array(z.string()),
        tags: z.array(z.string())
    }),
});

export const collections = {
    blog: blogCollection,
};