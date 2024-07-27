import Layout from "../components/layout";
import Cards from "../components/card";
import Head from "next/head";
import Nav from "../components/nav";
import LoginForm from "../components/login";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />
      <Layout>
        <LoginForm />
        <Head>
          <title>Easy Eating</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Cards />
      </Layout>
      {/* <Link href="/products">next page</Link> */}
    </>
  );
}
