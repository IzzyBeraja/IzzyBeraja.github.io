import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Although success seems straightforward in hindsight...</h1>
          <h1>Life tends to take the winding path</h1>
        </div>
        <a className={styles.subTitle} href="#">
          Take the winding path?
        </a>
      </main>
      <footer className={styles.footer}>
        <p>Scroll Instead</p>
        <i className="fas fa-arrow-down"></i>
      </footer>
    </div>
  );
};

export default Home;
