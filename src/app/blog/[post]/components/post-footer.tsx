import Link from "next/link";
import { usePosts } from "../../../hooks/posts";
import RelativeTime from "../../../components/relative-time";

export function PostFooter() {
  const { getPostsListMetadata } = usePosts();
  const blogsMetaData = getPostsListMetadata({ limit: 3 });
  return (
    <section className="flex flex-col w-full">
      <span className="text-cm-black dark:text-cm-white text-sm font-normal">
        More posts
      </span>
      <ul className="flex flex-col gap-5">
        {blogsMetaData.map((metaData) => (
          <li key={metaData.date}>
            <Link href={`blog/${metaData.slug}`}>
              <article>
                <h2 className="font-bold text-4xl dark:text-cm-white text-cm-black">
                  {metaData.title}
                </h2>
                <p className="text-gray-400">{metaData.subtitle}</p>
                <span className="text-gray-400">
                  <RelativeTime date={Date.parse(metaData.date)} />
                </span>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
