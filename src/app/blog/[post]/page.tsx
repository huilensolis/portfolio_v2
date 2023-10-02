import { notFound } from "next/navigation";
import { usePosts } from "../../hooks/posts";

import { MDXRemote } from "next-mdx-remote/rsc";
import { PostLayout } from "./components/post-layout";

export default function Post(props: any) {
  const currentUrl = props.params.post;
  const { doesPostExist, readPost } = usePosts();

  const postExist = doesPostExist(currentUrl);
  if (!postExist) {
    return notFound();
  }

  const post = readPost(currentUrl);
  return (
    <PostLayout>
      <div className="prose dark:prose-invert max-w-none w-full">
        <MDXRemote source={post} />
      </div>
    </PostLayout>
  );
}
