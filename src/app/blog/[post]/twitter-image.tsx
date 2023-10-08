import { ImageResponse } from "next/server";
import { usePosts } from "../../hooks/posts";
import NextImage from "next/image";
// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Huilen Solis's blog";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { post: string } }) {
  //   Font
  const clashDisplay = fetch(
    new URL(
      "../../../../public/fonts/clash-display/Fonts/WEB/fonts/ClashDisplay-Medium.woff2",
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  // post metadata
  const { getPostMetadata } = usePosts();
  const postMetadata = getPostMetadata(params.post);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <article
        style={{
          background: "#3782F6",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {postMetadata.image && (
          <NextImage
            src={postMetadata.image}
            alt={postMetadata.title}
            style={{ width: "100%", height: "630px" }}
          />
        )}
        <h1 style={{ fontSize: "45px", color: "#F1F1EF" }}>
          {postMetadata.title}
        </h1>
        <p style={{ fontSize: "35px", color: "#F1F1EF" }}>
          {postMetadata.subtitle}
        </p>
      </article>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await clashDisplay,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
