import Link from "next/link";
import { type InterfacePostMetadata } from "../../../models/post-metadata.interface";
import { PostMetadata } from "../../../components/post-metadata";

export function PostFooter({
  blogsMetaData,
}: {
  blogsMetaData: InterfacePostMetadata[];
}) {
  return (
    <section className="flex flex-col w-full gap-3">
      <h2 className="text-cm-black dark:text-cm-white text-2xl">More posts</h2>
      <ul className="flex flex-col gap-5">
        {blogsMetaData.map((metaData) => (
          <li key={metaData.date}>
            <Link href={`blog/${metaData.slug}`}>
              <PostMetadata metaData={metaData} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
