import Link from "next/link";
import { usePosts } from "../hooks/posts";
import RelativeTime from "../components/relative-time";

export default function Blog() {
  const { getPostsListMetadata } = usePosts();
  const blogsMetaData = getPostsListMetadata();
  return (
    <ul className="w-full flex flex-col gap-5">
      {blogsMetaData.map((metaData) => (
        <li key={metaData.date}>
          <Link href={`blog/${metaData.slug}`}>
            <article>
              <h2 className="font-bold text-4xl dark:text-cm-white text-cm-black">
                {metaData.title}
              </h2>
              <p className="text-gray-400">{metaData.subtitle}</p>
              <span className="italic text-gray-400">
                <RelativeTime date={Date.parse(metaData.date)} />
              </span>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}
