import styles from "../styles/Navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.header}>
      <span>
        <i
          className={["fas fa-hamburger", styles.navbar_hamburger].join(" ")}
        ></i>
      </span>
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
            <a
              className={styles.navbar_item}
              href="https://drive.google.com/file/d/18y-X0aYSaXEwDpNo3EzViqz556QEkJrY/view?usp=sharing"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
