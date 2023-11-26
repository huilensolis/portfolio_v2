"use client";

import { Card3 } from "./card-3";

export function ErrorComponent() {
  return (
    <Card3>
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-cm-white w-full text-center">
          There has been an error, please reload the page.
        </h1>
        <p className="text-cm-white w-full text-center">
          if the error persist, please{" "}
          <a href={"/#contact"} className="text-orange-300 font-bold">
            contact me
          </a>
        </p>
      </div>
    </Card3>
  );
}
