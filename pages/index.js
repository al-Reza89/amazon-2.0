import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* <h1 className="text-3xl cursor-pointer font-bold bg-black  ">
        Hello !! Yo
      </h1> */}

      <Header />
    </div>
  );
}
