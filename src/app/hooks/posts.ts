import path from "path";
import { existsSync, readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { type PostMetadata } from "../interfaces/post-metadata.interface";

const postsDir = path.join(process.cwd(), "src", "app", "blog", "posts");

export function usePosts() {
  function getPostsListMetadata({ limit }: { limit: number }): PostMetadata[] {
    const markDownXFiles = readdirSync(postsDir).filter((filename) =>
      filename.endsWith(".mdx")
    );
    const slicedMarkDownXFiles = markDownXFiles.slice(0, limit);
    const postsMetadata = slicedMarkDownXFiles.map((fileName) => {
      const postPath = path.join(postsDir, fileName);
      const fileContent = readFileSync(postPath, "utf8");

      const matterData = matter(fileContent);

      return {
        title: matterData.data.title,
        date: matterData.data.date,
        subtitle: matterData.data.subtitle,
        slug: fileName.replace(".mdx", ""),
      };
    });
    return postsMetadata as PostMetadata[];
  }

  function getPostMetadata(postTitle: string): PostMetadata {
    const post = readFileSync(path.join(postsDir, postTitle + ".mdx"), "utf8");
    const matterData = matter(post);
    return matterData.data as PostMetadata;
  }

  function doesPostExist(postTitle: string): Boolean {
    const postPath = path.join(postsDir, postTitle + ".mdx");
    console.log(postPath);
    const doesFileExist = existsSync(postPath);
    return doesFileExist;
  }

  function readPost(postTitle: string) {
    const postPath = path.join(postsDir, postTitle + ".mdx");
    const post = readFileSync(postPath, "utf8");
    const matterData = matter(post);
    return matterData.content;
  }

  return { getPostsListMetadata, doesPostExist, readPost, getPostMetadata };
}
