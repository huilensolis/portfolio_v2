import Link from "next/link";
import RelativeTime from "../../../components/relative-time";
import { PostMetadata } from "../../../interfaces/post-metadata.interface";

export function PostFooter({
  blogsMetaData,
}: {
  blogsMetaData: PostMetadata[];
}) {
  return (
    <section className="flex flex-col w-full gap-3">
      <span className="text-cm-black dark:text-cm-white text-2xl">
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
