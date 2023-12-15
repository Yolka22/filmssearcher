import { Link, Outlet } from "react-router-dom";
import styles from "./styles.module.css";

export default function Root() {
  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
        <nav className={styles.nav}>

            <Link className={styles.navlink} to={`/films`}>films</Link>
            <Link className={styles.navlink} to={`/films/admin`}>films admin</Link>

        </nav>
      </div>
      <div style={{ width: "100%" }} id="detail">
        <Outlet />
      </div>
    </div>
  );
}
