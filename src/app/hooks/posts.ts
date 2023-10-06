import path from "path";
import { existsSync, readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { type InterfacePostMetadata } from "../models/post-metadata.interface";

const postsDir = path.join(process.cwd(), "src", "app", "blog", "posts");

export function usePosts() {
  function getPostsListMetadata({
    offset = 0,
    limit,
  }: {
    offset: number;
    limit: number;
  }): InterfacePostMetadata[] {
    const markDownXFiles = readdirSync(postsDir).filter((filename) =>
      filename.endsWith(".mdx")
    );

    const endOfSlice = offset + limit;
    const slicedMarkDownXFiles = markDownXFiles.slice(offset, endOfSlice);
    console.log(slicedMarkDownXFiles.length);
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
    return postsMetadata as InterfacePostMetadata[];
  }

  function getPostMetadata(postTitle: string): InterfacePostMetadata {
    const post = readFileSync(path.join(postsDir, postTitle + ".mdx"), "utf8");
    const matterData = matter(post);
    return matterData.data as InterfacePostMetadata;
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
