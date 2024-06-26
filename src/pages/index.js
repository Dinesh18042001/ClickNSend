import Head from "next/head";
import PrimaryHomePage from "@/sections/primaryhomepage";
import { PrimaryWebLayout } from "@/layout";

HomePage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default function HomePage() {
  return (
    <>
      <Head>
        <title>ClickNSend</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PrimaryHomePage />
    </>
  );
}
