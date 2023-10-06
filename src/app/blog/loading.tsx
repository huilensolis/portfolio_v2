import { Loader } from "../components/loader";

export default function Loading() {
  return (
    <main className="min-h-[calc(100dvh-100px)] w-full flex justify-center items-center">
      <Loader />
    </main>
  );
}
