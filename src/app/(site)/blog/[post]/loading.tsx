import { Loader } from "@components/loader";

export default function Loading() {
  return (
    <div className="h-[calc(100dvh-5rem)] w-full flex justify-center items-center absolute top-20 left-0">
      <Loader />
    </div>
  );
}
