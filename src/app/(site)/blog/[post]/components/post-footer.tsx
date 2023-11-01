import Link from "next/link";
import { type InterfacePostMetadata } from "@models/post-metadata.interface";
import { PostMetadata } from "@components/post-metadata";

export function PostFooter({
  blogsMetaData,
}: {
  blogsMetaData: InterfacePostMetadata[];
}) {
  return (
    <section className="flex flex-col w-full gap-3">
      <h2 className="dark:text-neutral-300 text-neutral-700 text-2xl">
        More posts
      </h2>
      <ul className="flex flex-col gap-5">
        {blogsMetaData.map((metaData, i) => (
          <li key={i}>
            <Link href={`/blog/${metaData.slug}`}>
              <PostMetadata metaData={metaData} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
//
