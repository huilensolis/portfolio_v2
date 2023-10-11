import { ImageResponse } from "next/server";
import { Logo } from "../components/icons";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const clasDisplay = fetch(
    new URL(
      "../../../public/fonts/clash-display/Fonts/WEB/fonts/ClashDisplay-Medium.woff2",
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <main className="w-full h-full flex justify-center items-center gap-3 bg-cm-black">
        <Logo />
        <section>
          <h1 className="text-cm-white">{`Huilen's Blog`}</h1>
          <p className="text-cm-white">FullStack Development</p>
        </section>
      </main>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "clasDisplay",
          data: await clasDisplay,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
