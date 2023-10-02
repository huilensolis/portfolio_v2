import { notFound } from "next/navigation";
import { usePosts } from "../../hooks/posts";

import { MDXRemote } from "next-mdx-remote/rsc";
import { PostLayout } from "./components/post-layout";

export default function Post(props: any) {
  const currentUrl = props.params.post;
  const { doesPostExist, readPost, getPostMetadata } = usePosts();

  const postExist = doesPostExist(currentUrl);
  if (!postExist) {
    return notFound();
  }

  const metadata = getPostMetadata(currentUrl);
  const post = readPost(currentUrl);
  return (
    <PostLayout>
      <div className="prose dark:prose-invert max-w-none w-full prose-li:text-cm-black dark:prose-li:text-cm-white prose-h1:text-cm-primary prose-p:text-cm-black dark:prose-p:text-cm-white">
        <MDXRemote source={post} />
      </div>
    </PostLayout>
  );
}
