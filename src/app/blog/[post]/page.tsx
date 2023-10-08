import { notFound } from "next/navigation";
import { usePosts } from "../../hooks/posts";

import { MDXRemote } from "next-mdx-remote/rsc";
import { PostLayout } from "./components/post-layout";
import { Logo } from "../../components/icons";
import { Code } from "../../components/code";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { post } = params as any;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getPostMetadata } = usePosts();

  const postMetadata = getPostMetadata(post);

  function getImages() {
    if (postMetadata.image) {
      return {
        images: [postMetadata.image],
      };
    }
    return;
  }

  return {
    title: postMetadata.title,
    description: postMetadata.subtitle,
    openGraph: {
      ...getImages(),
      title: postMetadata.title,
      description: postMetadata.subtitle,
      authors: "Huilen Solis",
      type: "article",
      siteName: "Huilen Solis",
    },
    twitter: {
      card: "summary_large_image",
      title: postMetadata.title,
      description: postMetadata.subtitle,
      creator: "@solishuilen",
      images: [{ url: postMetadata.image ?? "", alt: postMetadata.title }],
    },
  };
}

export default function Post(props: any) {
  const currentUrl = props.params.post;
  const { doesPostExist, readPost, getPostsListMetadata, getPostMetadata } =
    usePosts();

  const postExist = doesPostExist(currentUrl);
  if (!postExist) {
    return notFound();
  }

  const currentPost = readPost(currentUrl);
  const currentPostMetadata = getPostMetadata(currentUrl);

  const postsMetadata = getPostsListMetadata({ limit: 4, offset: 0 });
  const filteredPostsMetadata = postsMetadata.filter(
    (post) => post.title !== currentPostMetadata.title
  );
  return (
    <PostLayout blogsMetaData={filteredPostsMetadata}>
      <meta name="description" content={currentPostMetadata.subtitle} />
      <div className="prose dark:prose-invert max-w-none w-full">
        <MDXRemote source={currentPost} components={{ Logo, Code }} />
      </div>
    </PostLayout>
  );
}
