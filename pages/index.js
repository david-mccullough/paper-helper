import Layout from "@components/Layout";
export default function Home() {
  return (
    <>
      <h1 class="max-w-5xl text-center mx-auto text-xl font-bold tracking-tighter !leading-[1.5] sm:text-2xl xl:text-4xl mt-4">
        Manage citations with
        <br class="hidden lg:block" />{" "}
        <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 ">
          with magic.
        </span>
      </h1>
    </>
  );
}

Home.Layout = Layout;
