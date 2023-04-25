import { LayoutStyled } from "./style";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Frontend Meetup</title>
        <meta name="description" content="2023 Second Half Frontend Meetup Entrance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutStyled>
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutStyled>
    </>
  );
}
