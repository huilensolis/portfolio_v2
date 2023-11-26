import path from "path";
import { existsSync, readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { type InterfacePostMetadata } from "@models/post-metadata.interface";

const postsDir = path.join(
  process.cwd(),
  "src",
  "app",
  "(site)",
  "blog",
  "posts",
);

export function usePosts() {
  function getPostsListMetadata({
    offset = 0,
    limit,
  }: {
    offset: number;
    limit: number;
  }): InterfacePostMetadata[] {
    const markDownXFiles = readdirSync(postsDir).filter((filename) =>
      filename.endsWith(".mdx"),
    );
    if (markDownXFiles.length === 0) return [];

    const postsMetadata = markDownXFiles.map((fileName) => {
      const postPath = path.join(postsDir, fileName);
      const fileContent = readFileSync(postPath, "utf8");

      const matterData = matter(fileContent);
      return {
        title: matterData.data.title,
        date: matterData.data.date,
        subtitle: matterData.data.subtitle,
        image: matterData.data.image,
        slug: fileName.replace(".mdx", ""),
      };
    });

    const postsMetadataSorted = postsMetadata
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      })
      .reverse();

    const endOfSlice = offset + limit;
    const postsMetadataSliced = postsMetadataSorted.slice(offset, endOfSlice);

    return postsMetadataSliced as InterfacePostMetadata[];
  }

  function getPostMetadata(postTitle: string): InterfacePostMetadata {
    const post = readFileSync(path.join(postsDir, postTitle + ".mdx"), "utf8");
    const matterData = matter(post);
    return matterData.data as InterfacePostMetadata;
  }

  function doesPostExist(postTitle: string): Boolean {
    const postPath = path.join(postsDir, postTitle + ".mdx");
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
