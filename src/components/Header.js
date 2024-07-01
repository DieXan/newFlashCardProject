import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

function Header() {
  return (
    <div className={styles.Header}>
      <p>
        <Link className={styles.Link} to={"/"}>MyLogo</Link>
      </p>
      <span className={styles.Nav}>
        <p>
          <Link className={styles.Link} to={"/"}>Учить слова</Link>
        </p>
        <p>
          <Link className={styles.Link} to={"/editor"}>Добавить материал</Link>
        </p>
        <p>
          <Link className={styles.Link} to={"/load"}>Экспорт/Импорт</Link>
        </p>
      </span>
    </div>
  );
}

export default Header;
