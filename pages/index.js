import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      {/* auto center korbe mx-auto */}
      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />

        {/* product */}
      </main>
    </div>
  );
}
