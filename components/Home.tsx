import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className="container">
      <main className={styles.main}>
        <div className={styles.title}>
          <h2>Maker</h2>
          <h2>Creator</h2>
          <h2>Designer</h2>
          <h2>Developer</h2>
          <h1 className={styles.name}>Izzy Beraja</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
