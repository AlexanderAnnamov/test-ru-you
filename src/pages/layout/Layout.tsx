import { Link, Outlet } from "react-router-dom";

import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.link} to="/timer">
          Timer
        </Link>
        <Link className={styles.link} to="/palette">
          Palette
        </Link>
      </header>
      <Outlet />
      <footer className={styles.footer}></footer>
    </>
  );
};
