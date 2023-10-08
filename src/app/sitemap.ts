import { MetadataRoute } from "next";
import { usePosts } from "./hooks/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getPostsListMetadata } = usePosts();
  const postsMetadata = getPostsListMetadata({ offset: 0, limit: 1000 });

  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

  const posts: MetadataRoute.Sitemap = postsMetadata.map((post) => {
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "never",
      priority: 2,
    };
  });
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 3,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...posts,
  ];
}
