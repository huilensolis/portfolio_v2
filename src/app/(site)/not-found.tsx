import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-[calc(100dvh-160px)]">
      <section className="flex justify-center items-center text-cm-white gap-1">
        <h1>404</h1>
        <hr className="h-[50px] w-[1px] bg-cm-white mr-1 ml-1" />
        <p className="flex justify-center ">this page could not be found</p>
      </section>
      <Link href="/" className="text-cm-white font-bold">
        Return Home
      </Link>
    </main>
  );
}
