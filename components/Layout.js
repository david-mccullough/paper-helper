import Head from "next/head";
import Header from "@components/Header";
import { Auth } from "@supabase/ui";
import Link from "next/link";

export default function Layout({ children }) {
  const { user } = Auth.useUser();

  return (
    <>
      <Head>
        <title>Paper Helper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <Header title="Paper Helper" />
        <hr className="my-2" />
        {!user ? <></> : <div>{children}</div>}
      </main>
    </>
  );
}
