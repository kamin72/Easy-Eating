import Layout from "../components/layout";
import Cards from "../components/card";
import Head from "next/head";
import Nav from "../components/nav";
import Link from "next/link";

export default function Main() {
  return (
    <>
      <Head>
        <title>Easy Eating</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Nav />
      <Layout>
        <Cards />
      </Layout>
      <Link href="/products">next page</Link>
    </>
  );
}
