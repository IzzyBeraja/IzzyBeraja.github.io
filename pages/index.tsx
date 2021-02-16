import Head from "next/head";
import Card from "../components/Card";

import styles from "../styles/Home.module.css";

export default function Home() {
  const cards = [
    {
      key: 1,
      link: "https://nextjs.org/docs",
      title: "Documentation →",
      description: "Find in-depth information about Next.js features and API.",
    },
    {
      key: 2,
      link: "https://nextjs.org/learn",
      title: "Learn →",
      description: "Learn about Next.js in an interactive course with quizzes!",
    },
    {
      key: 3,
      link: "https://github.com/vercel/next.js/tree/master/examples",
      title: "Examples →",
      description: "Discover and deploy boilerplate example Next.js projects.",
    },
    {
      key: 4,
      link:
        "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Deploy →",
      description:
        "Instantly deploy your Next.js site to a public URL with Vercel.",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {cards.map(({ key, title, description, link }) => (
            <Card
              className={styles.card}
              key={key}
              title={title}
              description={description}
              link={link}
            />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
