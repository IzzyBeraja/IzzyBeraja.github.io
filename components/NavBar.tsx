import styles from "../styles/Navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_list}>
        <li>
          <a className={styles.navbar_item} href="#Home">
            Home
          </a>
        </li>
        <li>
          <a className={styles.navbar_item} href="#Skills">
            Skills
          </a>
        </li>
        <li>
          <a className={styles.navbar_item} href="#Work">
            Work
          </a>
        </li>
        <li>
          <a className={styles.navbar_item} href="#OpenSource">
            Open Source
          </a>
        </li>
        <li>
          <a className={styles.navbar_item} href="#">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
