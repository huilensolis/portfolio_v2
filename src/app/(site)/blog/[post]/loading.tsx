import { Loader } from "@components/loader";

export default function Loading() {
  return (
    <div className="h-[calc(100dvh-120px)] py-[calc(100px+)] w-full flex justify-center items-center">
      <Loader />
    </div>
  );
}
