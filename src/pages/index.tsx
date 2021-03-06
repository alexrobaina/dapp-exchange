import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data: session }: any = useSession();
  const { authenticate, isAuthenticated, logout, account, chainId } =
    useMoralis();

  useEffect(() => {
    authenticate();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>DApp test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DApp {account}</h1>
        {session && (
          <>
            Signed in as {session?.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}
        {!session && (
          <>
            Not signed in <br />
            <button onClick={() => signIn("github")}>
              Sign in with github
            </button>
            <button onClick={() => signIn("facebook")}>
              Sign in with facebook
            </button>
            <button onClick={() => signIn("google")}>
              Sign in with google
            </button>
          </>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
