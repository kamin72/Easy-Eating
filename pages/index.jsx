import Layout from "../components/layout";
import Cards from "../components/card";
import Head from "next/head";
import Nav from "../components/nav";
import LoginForm from "../components/login";
import Link from "next/link";
import Script from "next/script";
import MainPage from "./mainPage";
import { useState, useEffect } from "react";

export default function Home() {
  const [memberData, setMemberData] = useState(null);

  useEffect(() => {
    const storage = localStorage.getItem("loggedInfo");
    if (storage) {
      setMemberData(true);
    } else {
      return setMemberData(false);
    }
  }, []);

  if (!memberData) {
    return (
      <>
        <Head>
          <title>Log in</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Script src="https://accounts.google.com/gsi/client" async></Script>
        <Nav />
        <Layout>
          <LoginForm />
        </Layout>
      </>
    );
  } else {
    return (
      <>
        <MainPage />
      </>
    );
  }
}
